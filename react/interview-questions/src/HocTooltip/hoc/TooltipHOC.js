import React, { useState } from "react";

function TooltipHOC(WrappedComponent, hoverText) {
  return function TooltipWrapper(props) {
    const [showTooltip, setShowToolTip] = useState(false);

    const hanleMouseEvent = () => {
      setShowToolTip(!showTooltip);
    };

    return (
      <div onMouseEnter={hanleMouseEvent} onMouseLeave={hanleMouseEvent}>
        <WrappedComponent {...props} />
        {showTooltip && <div className="tooltip">{hoverText}</div>}
      </div>
    );
  };
}

export default TooltipHOC;
