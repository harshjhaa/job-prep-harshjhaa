import React, { createContext, useState } from "react";

const ThemeContextProvider = createContext(); //initial data can be passed here

const initialTheme = "white";

const ProviderComponent = ({ children }) => {
  const [theme, setTheme] = useState(initialTheme);

  const changeTheme = (newTheme) => {
    setTheme(newTheme);
  };

  const themeContextContent = {
    theme,
    changeTheme,
  };

  return (
    <ThemeContextProvider.Provider value={{ themeContextContent }}>
      {children}
    </ThemeContextProvider.Provider>
  );
};

export { ThemeContextProvider, ProviderComponent };
