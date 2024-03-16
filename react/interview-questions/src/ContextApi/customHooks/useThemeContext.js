import { ThemeContextProvider } from "../context/PoviderComponent";
import { useContext } from "react";

const useThemeContext = () => {
  const { themeContextContent } = useContext(ThemeContextProvider);
  return themeContextContent;
};

export default useThemeContext;
