import { useContext } from "react";
import styled from "styled-components";
import TypingText from "../typing-text/typing-text";
import IconLinks from "../icon-links/icon-links";

import FaceImage from "../../assets/Face-Image.png";

import DarkModeContext from "../../contexts/darkmode";
import { DarkModeProps } from "../../components/styles/LightDarkThemes";

import filterIconArrayByTheme from "./filter-icon-link";
import { MoveDirection } from "tsparticles";

import Particles from "react-particles-js";

const LandingContainer = styled.div<DarkModeProps>`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 600px;
  background-color: ${({ isDarkMode }) => (isDarkMode ? "#000000" : "#FFFFFF")};
`;
const NameLabel = styled.span`
  position: relative;
  text-align: center;
  font-size: 54px;
  padding-top: 60px;
`;

const FaceContainer = styled.div`
  position: relative;
  width: 200px !important;
  min-height: 200px;
  border-radius: 50%;
  margin-top: 30px;
  background-image: url(${FaceImage});
  background-size: 200px 200px;
`;
const TypingTextContainer = styled.div`
  position: relative;
  padding-top: 30px;
  padding-left: 4vw;
  width: 480px;
`;
const IconLinkContainer = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  max-width: 540px;
  padding-top: 40px;
  justify-content: space-between;
`;

const ParticleContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 600px;
`;

const particleParams = {
  fps_limit: 28,
  particles: {
    number: {
      value: 500,
      density: {
        enable: false,
      },
    },
    line_linked: {
      enable: false,
    },
    move: {
      speed: 0.1,
      direction: MoveDirection["top"],
    },
    opacity: {
      anim: {
        enable: true,
        opacity_min: 0.05,
        speed: 1,
        sync: false,
      },
      value: 1,
    },
  },
  retina_detect: false,
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: "bubble",
      },
    },
    modes: {
      bubble: {
        size: 6,
        distance: 40,
      },
    },
  },
};

const LandingComponent = () => {
  const { isDarkMode } = useContext(DarkModeContext);

  return (
    <LandingContainer isDarkMode={isDarkMode}>
      <ParticleContainer>
        <Particles
          params={{
            ...particleParams,
            particles: {
              ...particleParams.particles,
              color: { value: isDarkMode ? "#FFFFFF" : "#000000" },
            },
          }}
          width={"100%"}
          height="600px"
        />
      </ParticleContainer>
      <NameLabel> MUNTAQIM RAHMAN</NameLabel>
      <FaceContainer />
      <TypingTextContainer>
        <TypingText />
      </TypingTextContainer>
      <IconLinkContainer>
        <IconLinks iconArray={filterIconArrayByTheme(isDarkMode)} />
      </IconLinkContainer>
    </LandingContainer>
  );
};

export default LandingComponent;
