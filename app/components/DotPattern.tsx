
import React from 'react';

interface DotPatternProps {
  width?: string;
  height?: string;
  dotColor?: string;
  dotRadius?: number;
  className?: string;
}

const DotPattern: React.FC<DotPatternProps> = ({
  width = '160px',
  height = '100px',
  dotColor = 'rgba(146, 133, 84, 0.56)',
  dotRadius = 1,
  className,
}) => {
  return (
    <div
      className={`absolute bg-gradient-to-br ${className}`}
      style={{ width, height }}
    >
      <div
        className="w-full h-full"
        style={{
          backgroundImage: `radial-gradient(circle, ${dotColor} ${dotRadius}px, transparent ${dotRadius}px)`,
          backgroundSize: '20px 20px',
        }}
      >
      </div>
    </div>
  );
};

export default DotPattern;
