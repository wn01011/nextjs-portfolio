'use client';

import { useCallback, useEffect, useState } from 'react';
import ReactFlow, {
  Controls,
  Background,
  MiniMap,
  Edge,
  Node,
  useNodesState,
  useEdgesState,
  addEdge,
  ConnectionLineType,
  Connection,
} from 'reactflow';
import 'reactflow/dist/style.css';
import CustomNode from './CustomNode';

// 노드 타입 정의
const nodeTypes = {
  custom: CustomNode,
};

// 스킬 노드 초기 데이터
const initialNodes: Node[] = [
  // 코어 기술
  {
    id: "core-javascript",
    type: "custom",
    position: { x: 300, y: 0 },
    data: { label: "JavaScript", type: "core", level: 5 },
  },

  // 프론트엔드 기술
  {
    id: "frontend-react",
    type: "custom",
    position: { x: 100, y: 150 },
    data: { label: "React", type: "frontend", level: 5 },
  },
  {
    id: "frontend-nextjs",
    type: "custom",
    position: { x: 250, y: 150 },
    data: { label: "Next.js", type: "frontend", level: 4 },
  },
  {
    id: "frontend-typescript",
    type: "custom",
    position: { x: 400, y: 150 },
    data: { label: "TypeScript", type: "frontend", level: 4 },
  },
  {
    id: "frontend-styled-components",
    type: "custom",
    position: { x: 550, y: 150 },
    data: { label: "Styled Components", type: "frontend", level: 4 },
  },

  // 상태 관리
  {
    id: "frontend-redux",
    type: "custom",
    position: { x: 100, y: 300 },
    data: { label: "Redux", type: "frontend", level: 4 },
  },
  {
    id: "frontend-query",
    type: "custom",
    position: { x: 250, y: 300 },
    data: { label: "React Query", type: "frontend", level: 3 },
  },

  // 백엔드 기술
  {
    id: "backend-nodejs",
    type: "custom",
    position: { x: 400, y: 300 },
    data: { label: "Node.js", type: "backend", level: 3 },
  },
  {
    id: "backend-express",
    type: "custom",
    position: { x: 550, y: 300 },
    data: { label: "Express", type: "backend", level: 3 },
  },

  // 데이터베이스
  {
    id: "database-posgresql",
    type: "custom",
    position: { x: 100, y: 450 },
    data: { label: "PostgreSQL", type: "database", level: 3 },
  },
  {
    id: "database-mysql",
    type: "custom",
    position: { x: 250, y: 450 },
    data: { label: "MySQL", type: "database", level: 2 },
  },

  // 개발 도구
  {
    id: "tool-git",
    type: "custom",
    position: { x: 400, y: 450 },
    data: { label: "Git", type: "tool", level: 4 },
  },
  {
    id: "tool-github",
    type: "custom",
    position: { x: 550, y: 450 },
    data: { label: "GitHub", type: "tool", level: 4 },
  },
];

// 엣지 초기 데이터 (기술 간의 연결)
const initialEdges: Edge[] = [
  // 코어에서 프론트엔드로의 연결
  {
    id: "e-js-react",
    source: "core-javascript",
    target: "frontend-react",
    animated: true,
  },
  {
    id: "e-js-nextjs",
    source: "core-javascript",
    target: "frontend-nextjs",
    animated: true,
  },
  {
    id: "e-js-typescript",
    source: "core-javascript",
    target: "frontend-typescript",
    animated: true,
  },

  // 프론트엔드 내부 연결
  { id: "e-react-redux", source: "frontend-react", target: "frontend-redux" },
  { id: "e-react-query", source: "frontend-react", target: "frontend-query" },
  {
    id: "e-nextjs-styled-components",
    source: "frontend-nextjs",
    target: "frontend-styled-components",
  },

  // 백엔드 연결
  {
    id: "e-js-nodejs",
    source: "core-javascript",
    target: "backend-nodejs",
    animated: true,
  },
  {
    id: "e-nodejs-express",
    source: "backend-nodejs",
    target: "backend-express",
  },

  // 데이터베이스 연결
  {
    id: "e-express-postgresql",
    source: "backend-express",
    target: "database-postgresql",
  },
  {
    id: "e-express-mysql",
    source: "backend-express",
    target: "database-mysql",
  },

  // 도구 연결
  { id: "e-nodejs-git", source: "backend-nodejs", target: "tool-git" },
  { id: "e-git-github", source: "tool-git", target: "tool-github" },
];

interface SkillsFlowProps {
  selectedNodeType: string;
}

export default function SkillsFlow({ selectedNodeType }: SkillsFlowProps) {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  // 선택된 노드 타입에 따라 노드와 엣지 필터링
  useEffect(() => {
    if (selectedNodeType === "all") {
      setNodes(initialNodes);
      setEdges(initialEdges);
      return;
    }

    const filteredNodes = initialNodes.filter(
      (node) => node.data.type === selectedNodeType || node.data.type === "core"
    );

    const nodeIds = filteredNodes.map((node) => node.id);

    const filteredEdges = initialEdges.filter(
      (edge) => nodeIds.includes(edge.source) && nodeIds.includes(edge.target)
    );

    setNodes(filteredNodes);
    setEdges(filteredEdges);
  }, [selectedNodeType, setNodes, setEdges]);

  // 연결이 생성될 때 엣지 추가
  const onConnect = useCallback(
    (connection: Connection) => {
      setEdges((eds) => addEdge({ ...connection, type: "smoothstep" }, eds));
    },
    [setEdges]
  );

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      nodeTypes={nodeTypes}
      connectionLineType={ConnectionLineType.SmoothStep}
      fitView
    >
      <Background />
      <Controls />
    </ReactFlow>
  );
}