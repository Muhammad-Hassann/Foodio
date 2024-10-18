import React from "react";

const WorkCard = ({ icon, iconNo, heading, text }) => (
    <div className="flex flex-col items-center text-center p-4 w-64">
      <div className="relative text-6xl bg-blue rounded-full p-8 text-white mb-4">
        <div className="absolute w-10 h-10 top-0 left-0 flex items-center justify-center text-white text-xl font-bold bg-black p-4 rounded-full">{iconNo}</div>
        {icon}
        </div>
      <h3 className="text-2xl text-white  font-semibold mb-2">{heading}</h3>
      <p className="text-white text-lg">{text}</p>
    </div>
  );

export default WorkCard