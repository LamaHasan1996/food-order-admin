import { basicTheme } from "../styles/theme";

export const makeTheme = (currentTheme, mode) => {
  return {
    ...currentTheme,
    elements: {
      ...currentTheme.elements,
      colors: {
        ...currentTheme.elements.colors,
        primary: mode === "light" ? "#ff9752" : "#0a1929",
        black: mode === "light" ? "#000000" : "#fff",
        secondary: mode === "light" ? "#d7f4f4" : "#0a1929",
        white: "#fff",
        gray: mode === "light" ? "#918d8d" : "#fff",
        lightGray: mode === "light" ? "#f2f0f0" : "#fff",
        green: "#2cef2c",
        offWhite: mode === "light" ? "#fff" : "#001e3c",
      },
    },
    palette: {
      ...currentTheme.palette,
      mode: mode,
    },
  };
};

export const changeThemeColor = (key, color) => {
  let theme = localStorage.getItem("currentTheme")
    ? JSON.parse(localStorage.getItem("currentTheme"))
    : basicTheme;
  localStorage?.setItem(
    "currentTheme",
    JSON.stringify({
      ...theme,
      elements: {
        ...theme.elements,
        colors: { ...theme.elements.colors, [key]: color?.hex },
      },
    })
  );
};
