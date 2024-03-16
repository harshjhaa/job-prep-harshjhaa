import React from "react";
import useThemeContext from "../customHooks/useThemeContext";

const ComponentB = () => {
  const themeContextContent = useThemeContext();

  const handleThemeChange = () => {
    themeContextContent?.changeTheme("dark");
  };

  return (
    <div>
      <h1>ComponentB</h1>
      <h3>Theme - {themeContextContent?.theme}</h3>
      <button onClick={handleThemeChange}>Change to dark mode</button>
    </div>
  );
};

export default ComponentB;
