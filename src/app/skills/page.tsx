'use client';

import { useState, useCallback } from 'react';
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
  useReactFlow,
} from 'reactflow';
import 'reactflow/dist/style.css';
import CustomNode from '@/components/flow/CustomNode';
import * as S from './page.style';

// 노드 타입 정의
const nodeTypes = {
  custom: CustomNode,
};

// 스킬 노드 초기 데이터
const initialNodes: Node[] = [
  // 코어 기술
  {
    id: 'core-javascript',
    type: 'custom',
    position: { x: 300, y: 0 },
    data: { label: 'JavaScript', type: 'core', level: 5 },
  },
  
  // 프론트엔드 기술
  {
    id: 'frontend-react',
    type: 'custom',
    position: { x: 100, y: 150 },
    data: { label: 'React', type: 'frontend', level: 5 },
  },
  {
    id: 'frontend-nextjs',
    type: 'custom',
    position: { x: 250, y: 150 },
    data: { label: 'Next.js', type: 'frontend', level: 4 },
  },
  {
    id: 'frontend-typescript',
    type: 'custom',
    position: { x: 400, y: 150 },
    data: { label: 'TypeScript', type: 'frontend', level: 4 },
  },
  {
    id: 'frontend-tailwind',
    type: 'custom',
    position: { x: 550, y: 150 },
    data: { label: 'Tailwind CSS', type: 'frontend', level: 4 },
  },
  
  // 상태 관리
  {
    id: 'frontend-redux',
    type: 'custom',
    position: { x: 100, y: 300 },
    data: { label: 'Redux', type: 'frontend', level: 4 },
  },
  {
    id: 'frontend-query',
    type: 'custom',
    position: { x: 250, y: 300 },
    data: { label: 'React Query', type: 'frontend', level: 3 },
  },
  
  // 백엔드 기술
  {
    id: 'backend-nodejs',
    type: 'custom',
    position: { x: 400, y: 300 },
    data: { label: 'Node.js', type: 'backend', level: 3 },
  },
  {
    id: 'backend-express',
    type: 'custom',
    position: { x: 550, y: 300 },
    data: { label: 'Express', type: 'backend', level: 3 },
  },
  
  // 데이터베이스
  {
    id: 'database-mongodb',
    type: 'custom',
    position: { x: 100, y: 450 },
    data: { label: 'MongoDB', type: 'database', level: 3 },
  },
  {
    id: 'database-mysql',
    type: 'custom',
    position: { x: 250, y: 450 },
    data: { label: 'MySQL', type: 'database', level: 2 },
  },
  
  // 개발 도구
  {
    id: 'tool-git',
    type: 'custom',
    position: { x: 400, y: 450 },
    data: { label: 'Git', type: 'tool', level: 4 },
  },
  {
    id: 'tool-github',
    type: 'custom',
    position: { x: 550, y: 450 },
    data: { label: 'GitHub', type: 'tool', level: 4 },
  },
];

// 엣지 초기 데이터 (기술 간의 연결)
const initialEdges: Edge[] = [
  // 코어에서 프론트엔드로의 연결
  { id: 'e-js-react', source: 'core-javascript', target: 'frontend-react', animated: true },
  { id: 'e-js-nextjs', source: 'core-javascript', target: 'frontend-nextjs', animated: true },
  { id: 'e-js-typescript', source: 'core-javascript', target: 'frontend-typescript', animated: true },
  
  // 프론트엔드 내부 연결
  { id: 'e-react-redux', source: 'frontend-react', target: 'frontend-redux' },
  { id: 'e-react-query', source: 'frontend-react', target: 'frontend-query' },
  { id: 'e-nextjs-tailwind', source: 'frontend-nextjs', target: 'frontend-tailwind' },
  
  // 백엔드 연결
  { id: 'e-js-nodejs', source: 'core-javascript', target: 'backend-nodejs', animated: true },
  { id: 'e-nodejs-express', source: 'backend-nodejs', target: 'backend-express' },
  
  // 데이터베이스 연결
  { id: 'e-express-mongodb', source: 'backend-express', target: 'database-mongodb' },
  { id: 'e-express-mysql', source: 'backend-express', target: 'database-mysql' },
  
  // 도구 연결
  { id: 'e-nodejs-git', source: 'backend-nodejs', target: 'tool-git' },
  { id: 'e-git-github', source: 'tool-git', target: 'tool-github' },
];

export default function SkillsPage() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [selectedNodeType, setSelectedNodeType] = useState<string>('all');
  
  const reactFlowInstance = useReactFlow();
  
  // 연결이 생성될 때 엣지 추가
  const onConnect = useCallback(
    (connection: Connection) => {
      setEdges((eds) => addEdge({ ...connection, type: 'smoothstep' }, eds));
    },
    [setEdges],
  );
  
  // 노드 타입별 필터링
  const filterNodesByType = useCallback(
    (type: string) => {
      if (type === 'all') {
        setNodes(initialNodes);
        setEdges(initialEdges);
        return;
      }
      
      const filteredNodes = initialNodes.filter((node) => 
        node.data.type === type || node.data.type === 'core');
      
      const nodeIds = filteredNodes.map((node) => node.id);
      
      const filteredEdges = initialEdges.filter(
        (edge) => nodeIds.includes(edge.source) && nodeIds.includes(edge.target)
      );
      
      setNodes(filteredNodes);
      setEdges(filteredEdges);
    },
    [setNodes, setEdges],
  );
  
  return (
    <div className={S.container}>
      <h1 className={S.title}>기술 스택</h1>
      <p className={S.subtitle}>
        제가 보유한 기술 스택들과 그 관계를 시각적으로 볼 수 있습니다.
        노드를 드래그하여 직접 상호작용해보세요.
      </p>
      
      {/* 노드 타입 선택기 */}
      <div className={S.nodeTypeSelector}>
        <button
          className={`${S.nodeSelectorButton} ${
            selectedNodeType === 'all' ? S.nodeSelectorButtonActive : S.nodeSelectorButtonInactive
          }`}
          onClick={() => {
            setSelectedNodeType('all');
            filterNodesByType('all');
          }}
        >
          전체 보기
        </button>
        <button
          className={`${S.nodeSelectorButton} ${
            selectedNodeType === 'frontend' ? S.nodeSelectorButtonActive : S.nodeSelectorButtonInactive
          }`}
          onClick={() => {
            setSelectedNodeType('frontend');
            filterNodesByType('frontend');
          }}
        >
          프론트엔드
        </button>
        <button
          className={`${S.nodeSelectorButton} ${
            selectedNodeType === 'backend' ? S.nodeSelectorButtonActive : S.nodeSelectorButtonInactive
          }`}
          onClick={() => {
            setSelectedNodeType('backend');
            filterNodesByType('backend');
          }}
        >
          백엔드
        </button>
        <button
          className={`${S.nodeSelectorButton} ${
            selectedNodeType === 'database' ? S.nodeSelectorButtonActive : S.nodeSelectorButtonInactive
          }`}
          onClick={() => {
            setSelectedNodeType('database');
            filterNodesByType('database');
          }}
        >
          데이터베이스
        </button>
        <button
          className={`${S.nodeSelectorButton} ${
            selectedNodeType === 'tool' ? S.nodeSelectorButtonActive : S.nodeSelectorButtonInactive
          }`}
          onClick={() => {
            setSelectedNodeType('tool');
            filterNodesByType('tool');
          }}
        >
          개발 도구
        </button>
      </div>
      
      {/* 기술 스택 플로우 차트 */}
      <div className={S.flowContainer}>
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
          <MiniMap
            nodeColor={(node) => {
              switch (node.data.type) {
                case 'frontend':
                  return '#93c5fd';
                case 'backend':
                  return '#86efac';
                case 'database':
                  return '#fde68a';
                case 'tool':
                  return '#d1d5db';
                case 'core':
                  return '#fca5a5';
                default:
                  return '#d1d5db';
              }
            }}
          />
        </ReactFlow>
      </div>
      
      {/* 범례 */}
      <div className={S.legendContainer}>
        <div className={S.legendItem}>
          <div className="w-3 h-3 rounded-full bg-blue-300 dark:bg-blue-700"></div>
          <span>프론트엔드</span>
        </div>
        <div className={S.legendItem}>
          <div className="w-3 h-3 rounded-full bg-green-300 dark:bg-green-700"></div>
          <span>백엔드</span>
        </div>
        <div className={S.legendItem}>
          <div className="w-3 h-3 rounded-full bg-yellow-300 dark:bg-yellow-700"></div>
          <span>데이터베이스</span>
        </div>
        <div className={S.legendItem}>
          <div className="w-3 h-3 rounded-full bg-gray-300 dark:bg-gray-700"></div>
          <span>개발 도구</span>
        </div>
        <div className={S.legendItem}>
          <div className="w-3 h-3 rounded-full bg-red-300 dark:bg-red-700"></div>
          <span>핵심 기술</span>
        </div>
      </div>
    </div>
  );
}