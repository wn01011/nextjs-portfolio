'use client';

import React, { useCallback, useEffect, useState } from 'react';
import ReactFlow, {
  Node,
  Edge,
  Background,
  Controls,
  MiniMap,
  useNodesState,
  useEdgesState,
  Panel,
} from 'reactflow';
import 'reactflow/dist/style.css';
import { Project, WorkExperience } from '@/data/experience';
import * as S from './CareerFlow.style';

interface CareerFlowProps {
  experience: WorkExperience;
}

// 카테고리별 색상 정의
const categoryColors = {
  '개발': '#60a5fa',
  '데브옵스': '#f97316', 
  '인프라': '#10b981',
  '최적화': '#a855f7',
  '유지보수': '#f59e0b',
};

// 커스텀 노드 컴포넌트들
const CompanyNode = ({ data }: { data: any }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={S.companyNode}
      style={{ 
        zIndex: isHovered ? 10 : 0,
        opacity: isHovered ? 1 : 0.9,
        transition: 'opacity 0.3s ease, transform 0.3s ease',
        transform: isHovered ? 'scale(1.05)' : 'scale(1)'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h3 className={S.companyTitle}>{data.label}</h3>
      <p className={S.companyPeriod}>{data.period}</p>
      <p className={S.companyPosition}>{data.position}</p>
    </div>
  );
};

const ProjectNode = ({ data }: { data: any }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={S.projectNode}
      style={{ 
        borderLeftColor: data.color,
        backgroundColor: 'white',
        zIndex: isHovered ? 10 : 0,
        opacity: isHovered ? 1 : 0.85,
        transition: 'opacity 0.3s ease, transform 0.3s ease',
        transform: isHovered ? 'scale(1.05)' : 'scale(1)'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h4 className={S.projectTitle}>{data.label}</h4>
      <p className={S.projectPeriod}>{data.period}</p>
      <div className={S.projectTechContainer}>
        {data.technologies.slice(0, 3).map((tech: string, i: number) => (
          <span key={i} className={S.projectTechTag}>
            {tech}
          </span>
        ))}
        {data.technologies.length > 3 && (
          <span className={S.projectTechMore}>
            +{data.technologies.length - 3}
          </span>
        )}
      </div>
    </div>
  );
};

const SkillNode = ({ data }: { data: any }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={S.skillNode}
      style={{ 
        backgroundColor: data.bgColor, 
        color: 'white',
        zIndex: isHovered ? 10 : 0,
        opacity: isHovered ? 1 : 0.75,
        transition: 'opacity 0.3s ease, transform 0.3s ease',
        transform: isHovered ? 'scale(1.1)' : 'scale(1)'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {data.label}
    </div>
  );
};

// 노드 유형별로 커스텀 컴포넌트 매핑
const nodeComponents = {
  company: CompanyNode,
  project: ProjectNode,
  skill: SkillNode,
};

// 커스텀 노드 렌더러
const CustomNode = ({ type, data }: { type: string; data: any }) => {
  const NodeComponent = nodeComponents[type as keyof typeof nodeComponents];
  return NodeComponent ? <NodeComponent data={data} /> : null;
};

const CareerFlow: React.FC<CareerFlowProps> = ({ experience }) => {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  // 다크모드 감지
  useEffect(() => {
    // 초기 다크모드 상태 확인
    const isDark = document.documentElement.classList.contains('dark');
    setIsDarkMode(isDark);
    
    // 다크모드 변경 감지
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          const isDark = document.documentElement.classList.contains('dark');
          setIsDarkMode(isDark);
        }
      });
    });
    
    observer.observe(document.documentElement, { attributes: true });
    
    return () => {
      observer.disconnect();
    };
  }, []);
  
  // 프로젝트에서 모든 기술 추출 (중복 제거)
  const getAllTechnologies = useCallback((projects: Project[]) => {
    const techSet = new Set<string>();
    projects.forEach(project => {
      project.technologies.forEach(tech => techSet.add(tech));
    });
    return Array.from(techSet);
  }, []);

  // 노드와 엣지 생성
  const generateGraphData = useCallback((experience: WorkExperience, selectedCategory: string, isDark: boolean) => {
    const newNodes: Node[] = [];
    const newEdges: Edge[] = [];
    let nodeId = 1;
    
    // 회사 노드 (중심)
    const companyNode: Node = {
      id: 'company-1',
      type: 'company',
      data: { 
        label: experience.company, 
        period: experience.period,
        position: experience.position
      },
      position: { x: 0, y: 0 },
    };
    newNodes.push(companyNode);
    
    // 프로젝트 노드들 (회사 주변)
    const filteredProjects = selectedCategory === 'all' 
      ? experience.projects 
      : experience.projects.filter(project => project.category === selectedCategory);
    
    const projectCount = filteredProjects.length;
    const radius = 350; // 노드 간 거리
    
    filteredProjects.forEach((project, index) => {
      const angle = (index * 2 * Math.PI) / projectCount;
      const x = radius * Math.cos(angle);
      const y = radius * Math.sin(angle);
      
      const projectNodeId = `project-${nodeId++}`;
      const projectNode: Node = {
        id: projectNodeId,
        type: 'project',
        data: { 
          label: project.title, 
          period: project.period,
          technologies: project.technologies,
          category: project.category,
          color: categoryColors[project.category as keyof typeof categoryColors] || '#64748b',
        },
        position: { x, y },
      };
      newNodes.push(projectNode);
      
      // 회사와 프로젝트 연결하는 엣지
      newEdges.push({
        id: `edge-company-${projectNodeId}`,
        source: 'company-1',
        target: projectNodeId,
        animated: false,
        style: { 
          stroke: isDark ? '#94a3b8' : '#475569', 
          strokeWidth: 2, 
          opacity: 0.8
        },
      });
    });
    
    // 기술 노드들 (바깥쪽 원)
    const allTechnologies = getAllTechnologies(filteredProjects);
    const techRadius = radius * 1.8; // 프로젝트 노드보다 더 바깥쪽
    
    allTechnologies.forEach((tech, index) => {
      const angle = (index * 2 * Math.PI) / allTechnologies.length;
      const x = techRadius * Math.cos(angle);
      const y = techRadius * Math.sin(angle);
      
      const skillNodeId = `skill-${nodeId++}`;
      const techNode: Node = {
        id: skillNodeId,
        type: 'skill',
        data: { 
          label: tech,
          bgColor: '#3b82f6',
        },
        position: { x, y },
      };
      newNodes.push(techNode);
      
      // 관련 프로젝트에 연결하는 엣지
      filteredProjects.forEach(project => {
        if (project.technologies.includes(tech)) {
          const projectId = `project-${filteredProjects.indexOf(project) + 1}`;
          newEdges.push({
            id: `edge-${projectId}-${skillNodeId}`,
            source: projectId,
            target: skillNodeId,
            animated: false,
            style: { 
              stroke: isDark ? '#94a3b8' : '#475569', 
              strokeWidth: 1.5, 
              opacity: 0.7 
            },
          });
        }
      });
    });
    
    return { nodes: newNodes, edges: newEdges };
  }, [getAllTechnologies]);
  
  // 카테고리 변경 또는 다크모드 변경시 그래프 업데이트
  useEffect(() => {
    const { nodes: newNodes, edges: newEdges } = generateGraphData(experience, selectedCategory, isDarkMode);
    setNodes(newNodes);
    setEdges(newEdges);
  }, [experience, selectedCategory, isDarkMode, generateGraphData, setNodes, setEdges]);
  
  const categories = ['all', '개발', '데브옵스', '인프라', '최적화', '유지보수'];
  
  return (
    <div className={S.container}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={{
          company: CustomNode,
          project: CustomNode,
          skill: CustomNode,
        }}
        fitView
        minZoom={0.5}
        maxZoom={2}
        defaultEdgeOptions={{
          style: { 
            stroke: isDarkMode ? '#94a3b8' : '#475569', 
            strokeWidth: 2 
          }
        }}
      >
        <Background 
          color={isDarkMode ? '#94a3b8' : '#475569'} 
          gap={16} 
          size={1}
        />
        <Controls />
        <MiniMap 
          nodeColor={(node) => {
            if (node.type === 'company') return '#1e293b';
            if (node.type === 'project') {
              return node.data?.color || '#64748b';
            }
            return '#3b82f6';
          }}
          maskColor={isDarkMode ? 'rgba(0, 0, 0, 0.2)' : 'rgba(255, 255, 255, 0.2)'}
        />
        <Panel position="top-right">
          <div className={S.panel}>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category ? S.activeButton : S.inactiveButton}
              >
                {category === 'all' ? '전체' : category}
              </button>
            ))}
          </div>
        </Panel>
      </ReactFlow>
    </div>
  );
};

export default CareerFlow;