import React from "react";
import useThemeContext from "../customHooks/useThemeContext";

const ComponentA = () => {
  const themeContextContent = useThemeContext();

  return (
    <div>
      <h1>ComponenA</h1>
      <h3>Theme - {themeContextContent.theme}</h3>
    </div>
  );
};

export default ComponentA;
