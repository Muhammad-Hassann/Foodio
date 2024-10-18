import React from 'react';

const MilestoneCard = ({ year, title, description }) => {
  return (
    <div className="flex flex-col max-w-[300px]  p-6">
      {/* Line on top */}
      <div className="w-16 h-1 bg-yellow mb-4"></div>

      {/* Year */}
      <h3 className="text-2xl font-semibold text-[#cc9d2f]">{year}</h3>

      {/* Title */}
      <h4 className="text-lg font-bold text-white mt-2 mb-4">{title}</h4>

      {/* Description */}
      <p className="text-white">{description}</p>
    </div>
  );
};

export default MilestoneCard;
