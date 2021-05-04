import React, { useContext } from "react";
import { SimpleLink } from "../../components/styles/globalStyles";

import DarkModeContext from "../../contexts/darkmode";
import ToggleButton from "../../components/toggle-button/toggle-button";

import styled from "styled-components";
import { DarkModeProps } from "../../components/styles/LightDarkThemes";

const HeaderWrapper = styled.div<DarkModeProps>`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 64px;
  background: ${({ isDarkMode }) => (isDarkMode ? "#2e2828" : "#fafafa")};
  box-shadow: 0px 3px 8px 0px
    ${({ isDarkMode }) =>
      isDarkMode ? "rgba(181, 191, 201,0.16)" : "rgba(62, 100, 146, 0.16)"};
  transition: background 0.3s linear;
`;
const DarkModeButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-self: center;
  padding-left: 30px;
`;

const DarkModeLabel = styled.span`
  padding-right: 10px;
  padding-top: 3px;
  font-size: 14px;
`;

const LinkContainer = styled.div`
  display: flex;
  justify-content: space-between;

  width: fit-content;
  align-self: center;
  height: 20px;
  width: 150px;

  padding-right: 80px;
`;

const LinkLabel = styled.span`
  font-size: 16px;
  cursor: pointer;
`;

const StyledLink = styled(SimpleLink)<DarkModeProps>`

  &:after{
    content: "";
    display: block;
    width: 0%;
    padding-top: 5px;
    border-bottom: 1px solid ${({ isDarkMode }) =>
      isDarkMode ? "#E8E8E8" : "#464547"}};
    transition: width 2s;
  }

    &:hover:after{
      width: 100%;
      transition: width 0.3s;
    }
  
`;

interface HeaderProps {
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleDarkMode }) => {
  const { isDarkMode } = useContext(DarkModeContext);

  return (
    <HeaderWrapper isDarkMode={isDarkMode}>
      <DarkModeButtonContainer>
        <DarkModeLabel>Dark Mode</DarkModeLabel>
        <ToggleButton onClickHandler={toggleDarkMode} />
      </DarkModeButtonContainer>
      <LinkContainer>
        <StyledLink to="/portfolio">
          <LinkLabel> Portfolio </LinkLabel>
        </StyledLink>
        <StyledLink to="/blogs">
          <LinkLabel> Blog </LinkLabel>
        </StyledLink>
      </LinkContainer>
    </HeaderWrapper>
  );
};

export default Header;
