import { FC } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { ThemeProvider } from "styled-components";
import { topLayerLightMode, topLayerDarkMode } from "./LightDarkThemes";

import { Link } from "react-router-dom";

interface GlobalProps {
  theme: {
    body: string;
    text: string;
  };
}

export interface TopLayerThemeProps {
  theme: {
    backgroundColor: string;
    boxShadowColor: string;
    transition: string;
  }
}

interface TopLayerProps {
  isDarkMode?: boolean | null;
  children: any;
}

export const GlobalStyle = createGlobalStyle<GlobalProps>`
    body {
        background: ${(props) => props.theme.body};
        color: ${(props) => props.theme.text};
        font-family: Inter,system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont,Helvetica Neue,Arial,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
        transition: color, background 0.3s linear;
    }
`;

export const TopLayerTheme: FC<TopLayerProps> = ({ isDarkMode, children }) => {
  return (
    <ThemeProvider
      theme={isDarkMode === true ? topLayerDarkMode : topLayerLightMode}
    >
      {children}
    </ThemeProvider>
  );
};

export const TileHolder = styled.div<TopLayerThemeProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: fit-content;
  border-radius: 10px;
  background-color: ${({ theme }) => (theme.backgroundColor)};
  box-shadow: 0 3px 6px -4px rgb(0 0 0 / 16%), 0 3px 6px rgb(0 0 0 / 23%);
`;

export const SimpleLink = styled(Link)`
  cursor: default;
  text-decoration: none;
  color: inherit;
`;

export const ContentTileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  margin-left: 4vw;
  margin-right: 4vw;
  width: 92vw;
`;
