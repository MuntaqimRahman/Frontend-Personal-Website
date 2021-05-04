import { FC, useContext} from "react";
import styled from "styled-components";

import DarkModeContext from "../../contexts/darkmode";
import { DarkModeProps } from "../../components/styles/LightDarkThemes";
import {TileHolder} from "../styles/globalStyles";

export interface SkillsBubblesProps {
  languages?: string[];
  frameworks?: string[];
  tools?: string[];
}

const SkillsBubbles: FC<SkillsBubblesProps> = ({
  languages = [],
  frameworks = [],
  tools = [],
}) => {
  const { isDarkMode } = useContext(DarkModeContext);

  const BubbleData = [
    {
      title: "Languages",
      values: languages,
    },
    {
      title: "Frameworks",
      values: frameworks,
    },
    {
      title: "Tools",
      values: tools,
    },
  ];

  const SectionContainer = styled.span`
    display: flex;
    flex-direction: row;
    width: 100%;
    flex-wrap: wrap;
    padding-left: 30px;
  `;

  const SectionHeader = styled.span`
    font-size: 1.05em;
    font-weight: bold;
    padding-left: 30px;
    padding-bottom: 10px;
    padding-top: 10px;
  `;

  const Bubble = styled.span<DarkModeProps>`
    border-radius: 5000px;
    background-color: ${({ isDarkMode }) =>
      isDarkMode ? "#000000" : "#FFFFFF"};
    width: fit-content;
    padding: 1px 10px;
    border: 2px solid ${({isDarkMode}) => isDarkMode ? "#4682B4" : "#adb9ca"};
    margin: 2px 2px;
    
  `;

  return (
    <TileHolder isDarkMode={isDarkMode}>
      {BubbleData.map(({ title, values }) => {
        return (
          values.length > 0 && (
            <>
              <SectionHeader> {title}</SectionHeader>
              <SectionContainer>
                {values.map((item) => {
                  return <Bubble isDarkMode={isDarkMode}>{item}</Bubble>;
                })}
              </SectionContainer>
            </>
          )
        );
      })}
    </TileHolder>
  );
};

export default SkillsBubbles;
