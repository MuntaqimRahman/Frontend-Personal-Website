export const lightMode = {
  body: "#E8E8E8",
  text: "#464547",
};

export const darkMode = {
  body: "#464547",
  text: "#E8E8E8",
};

export const topLayerLightMode = {
    backgroundColor: "#f8f8f8",
    boxShadowColor: "rgba(62, 100, 146, 0.16)",
    transition: "all 0.3s linear"
}

export const topLayerDarkMode = {
    backgroundColor: "#282828",
    boxShadowColor: "rgba(181, 191, 201,0.16)",
    transition: "all 0.3s linear"
}

export interface DarkModeProps {
  isDarkMode?: boolean | null;
}
