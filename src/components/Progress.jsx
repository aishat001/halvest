import React from 'react';

const LinearProgress = ({ value, range, height }) => {
  const progressStyle = {
    width: `${(value / range) * 100}%`,
    height: `${height}px`,
    backgroundColor: '#17B26A',
    borderRadius: '4px',
    transition: 'width 0.3s ease',
  };

  return <div style={progressStyle}></div>;
};

const Progress = ({ raised, total }) => {
  const progressValue = (raised / total) * 100;

  return (
    <div className="flex flex-col space-y-4 bg-[#EAECF0] rounded-[4px]">
      {/* <div className="flex items-center">
        <span className="mr-2 font-semibold text-gray-600">Amount Raised:</span>
        <span className="text-lg font-bold text-blue-500">₦{raised.toLocaleString()}</span>
      </div> */}
      <LinearProgress value={raised} range={total} height={8} />
    </div>
  );
};

export default Progress;
