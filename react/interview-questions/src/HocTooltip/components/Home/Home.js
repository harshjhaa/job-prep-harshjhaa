import React from "react";
import PropTypes from "prop-types";
import TooltipHOC from "../../hoc/TooltipHOC";

const Home = ({ text }) => {
  return (
    <React.Fragment>
      <h2>{text}</h2>
    </React.Fragment>
  );
};

Home.propTypes = {
  showTooltip: PropTypes.bool,
};

export default TooltipHOC(Home, "This is the tooltip");
