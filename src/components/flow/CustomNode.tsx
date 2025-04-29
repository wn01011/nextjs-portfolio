import { memo } from 'react';
import { Handle, Position, NodeProps } from 'reactflow';

type SkillNode = {
  label: string;
  type: string;
  level?: number;
  description?: string;
};

const CustomNode = ({ data, isConnectable }: NodeProps<SkillNode>) => {
  // 스킬 타입에 따른 배경색 설정
  const getBackgroundColor = () => {
    switch (data.type) {
      case 'frontend':
        return 'bg-blue-100 dark:bg-blue-900/30 border-blue-300 dark:border-blue-700';
      case 'backend':
        return 'bg-green-100 dark:bg-green-900/30 border-green-300 dark:border-green-700';
      case 'database':
        return 'bg-yellow-100 dark:bg-yellow-900/30 border-yellow-300 dark:border-yellow-700';
      case 'devops':
        return 'bg-purple-100 dark:bg-purple-900/30 border-purple-300 dark:border-purple-700';
      case 'tool':
        return 'bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-700';
      case 'core':
        return 'bg-red-100 dark:bg-red-900/30 border-red-300 dark:border-red-700';
      default:
        return 'bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-700';
    }
  };

  // 스킬 레벨에 따른 진행 바 표시
  const getLevelBar = () => {
    if (!data.level) return null;
    
    const width = `${data.level * 20}%`; // 레벨 1-5 scale을 %로 변환
    
    return (
      <div className="mt-2 bg-gray-200 dark:bg-gray-700 h-2 rounded-full w-full">
        <div 
          className="bg-primary-500 h-2 rounded-full" 
          style={{ width }}
        />
      </div>
    );
  };

  return (
    <div className={`p-4 rounded-lg shadow-md border ${getBackgroundColor()} min-w-[120px]`}>
      <Handle
        type="target"
        position={Position.Top}
        isConnectable={isConnectable}
        className="w-2 h-2 bg-gray-400 dark:bg-gray-300"
      />
      
      <div className="text-center">
        <div className="font-bold text-gray-800 dark:text-white">{data.label}</div>
        {data.description && (
          <div className="text-xs text-gray-600 dark:text-gray-300 mt-1">
            {data.description}
          </div>
        )}
        {getLevelBar()}
      </div>
      
      <Handle
        type="source"
        position={Position.Bottom}
        isConnectable={isConnectable}
        className="w-2 h-2 bg-gray-400 dark:bg-gray-300"
      />
    </div>
  );
};

export default memo(CustomNode);