import styled, { createGlobalStyle } from "styled-components";
import { DarkModeProps } from "./LightDarkThemes";

import {Link} from "react-router-dom";

interface GlobalProps {
  theme: {
    body: string;
    text: string;
  };
}

export const GlobalStyle = createGlobalStyle<GlobalProps>`
    body {
        background: ${(props) => props.theme.body};
        color: ${(props) => props.theme.text};
        font-family: Inter,system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont,Helvetica Neue,Arial,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
        transition: all 0.3s linear;
        transition-property: background, color;
    }
`;

export const TileHolder = styled.div<DarkModeProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: fit-content;
  border-radius: 10px;
  padding-bottom: 20px;
  margin-bottom: 20px;

  background-color: ${({ isDarkMode }) => (isDarkMode ? "#282828" : "#F8F8F8")};
`;

export const SimpleLink = styled(Link)`
    text-decoration: none;
    color: inherit;
  `

export const ContentTileContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    margin-left: 4vw;
    margin-right: 4vw;
    width: 92vw;
  `;