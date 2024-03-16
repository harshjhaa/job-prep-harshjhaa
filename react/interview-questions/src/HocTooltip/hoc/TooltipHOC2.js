import React, { useState } from "react";

const TooltipHOC2 = ({ children, tooltipContent }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEvent = () => {
    setShowTooltip(!showTooltip);
  };

  return (
    <div onMouseEnter={handleMouseEvent} onMouseLeave={handleMouseEvent}>
      {children}
      {showTooltip && <div className="tooltip">{tooltipContent}</div>}
    </div>
  );
};

export default TooltipHOC2;
