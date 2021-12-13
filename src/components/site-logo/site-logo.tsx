import { FC } from "react";
import styled from "styled-components";

import SiteLogoLight from "../../assets/Site-Logo-Light.svg";
import SiteLogoDark from "../../assets/Site-Logo-Dark.png";

import { DarkModeProps } from "../styles/LightDarkThemes";

interface SiteLogoImageProps {
  hide: boolean | null | undefined;
}

const SiteLogoImage = styled.img<SiteLogoImageProps>`
  position: absolute;
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
  ${({ hide }) => hide ? `opacity: 0` : `transition: opacity 0.3s linear;`}

`;

const SiteLogo: FC<DarkModeProps> = ({ isDarkMode }) => {
  return (
    <>
      <SiteLogoImage
        hide={isDarkMode}
        key="light logo"
        alt="logo light"
        src={SiteLogoLight}
      />
      <SiteLogoImage
        hide={!isDarkMode}
        key="dark logo"
        alt="logo dark"
        src={SiteLogoDark}
      />
    </>
  );
};

export default SiteLogo;
