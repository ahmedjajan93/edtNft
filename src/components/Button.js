import React from "react";

const Button = ({ text, color, btnWidth, setActiveTap, activeTap }) => {
    
    
  return (
    <button
      className={`p-2 text-white rounded-full  w-${btnWidth} border text-[18px] border-gray-500  `}
      style={{ backgroundColor: activeTap === text ? color : "" }}
      onClick={() => setActiveTap(text)}
    >
      {text}
    </button>
  );
};

export default Button;
