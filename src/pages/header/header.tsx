import { FC, useContext } from "react";
import { SimpleLink } from "../../components/styles/globalStyles";

import DarkModeContext from "../../contexts/darkmode";
import ToggleButton from "../../components/toggle-button/toggle-button";
import SiteLogo from "../../components/site-logo/site-logo";

import styled from "styled-components";
import {
  TopLayerThemeProps,
} from "../../components/styles/globalStyles";
import { DarkModeProps } from "../../components/styles/LightDarkThemes";

const HeaderWrapper = styled.div<TopLayerThemeProps>`
  display: flex;
  justify-content: space-between;
  width: 100%;
  background: ${({ theme }) => theme.backgroundColor};
  box-shadow: 0px 3px 8px 0px ${({ theme }) => theme.boxShadowColor};
  transition: ${({ theme }) => theme.transition};

  @media (min-width: 0px) and (max-width: 910px) {
    height: 50px;
    font-size: 13px;
  }

  @media (min-width: 910px) and (max-width: 1537px) {
    height: 60px;
    font-size: 16px;
  }

  @media (min-width: 1537px) {
    height: 80px;
    font-size: 22px;
  }
`;
const LeftControlContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-self: center;
  align-items: center;
  padding-left: 2vmax;
`;

const DarkModeLabel = styled.span`
  padding-right: 1vmax;
  padding-left: 1vmax;
  padding-bottom: 0.3vmax;
`;

const LinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 4vmax;
  height: fit-content;
  align-self: center;

  @media (min-width: 0px) and (max-width: 910px) {
    width: 100px;
  }

  @media (min-width: 910px) and (max-width: 1537px) {
    width: 140px;
  }

  @media (min-width: 1537px) {
    width: 200px;
  }
`;

const LinkLabel = styled.span`
  cursor: pointer;
`;

const StyledLink = styled(SimpleLink)<DarkModeProps>`

transition: opacity ease-out 0.2s;

&:hover{
  transition: opacity ease-out 0.2s;
  opacity: 0.5;
}
  
`;

const LogoContainer = styled.div`
  cursor: pointer;
  margin: auto;
  align-self: center;

  @media (min-width: 0px) and (max-width: 910px) {
    width: 50px;
    height: 50px;
  }

  @media (min-width: 910px) and (max-width: 1537px) {
    width: 60px;
    height: 60px;
  }

  @media (min-width: 1537px) {
    width: 80px;
    height: 80px;
  }
`;

interface HeaderProps {
  toggleDarkMode: () => void;
}

const Header: FC<HeaderProps> = ({ toggleDarkMode }) => {
  const { isDarkMode } = useContext(DarkModeContext);

  return (
      <HeaderWrapper>
        <LeftControlContainer>
          <SimpleLink to="/">
            <LogoContainer>
              <SiteLogo isDarkMode={isDarkMode} />
            </LogoContainer>
          </SimpleLink>
          <DarkModeLabel>Dark Mode</DarkModeLabel>
          <ToggleButton onClickHandler={toggleDarkMode} />
        </LeftControlContainer>

        <LinkContainer>
          <StyledLink isDarkMode={isDarkMode} to="/portfolio">
            <LinkLabel> Portfolio </LinkLabel>
          </StyledLink>
          <StyledLink isDarkMode={isDarkMode} to="/blogs">
            <LinkLabel> Blog </LinkLabel>
          </StyledLink>
        </LinkContainer>
      </HeaderWrapper>
  );
};

export default Header;
