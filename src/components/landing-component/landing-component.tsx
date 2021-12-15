import { useContext } from "react";
import styled from "styled-components";
import TypingText from "../typing-text/typing-text";
import IconLinks from "../icon-links/icon-links";

import FaceImage from "../../assets/Face-Image.png";

import DarkModeContext from "../../contexts/darkmode";
import { DarkModeProps } from "../../components/styles/LightDarkThemes";

import filterIconArrayByTheme from "./filter-icon-link";
import { MoveDirection } from "tsparticles";

import Particles from "react-tsparticles";
import './particle.css';

const LandingContainer = styled.div<DarkModeProps>`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 600px;
  background-color: ${({ isDarkMode }) => (isDarkMode ? "#000000" : "#FFFFFF")};
`;
const NameLabel = styled.span`
  position: relative;
  text-align: center;

  @media (min-width: 0px) and (max-width: 910px){
    font-size: 46px;
  }

  @media (min-width: 910px) and (max-width: 1537px){
    font-size: 60px;
  }

  @media (min-width: 1537px){
    font-size: 100px;
  }

`;

const FaceContainer = styled.div`
  position: relative;
  border-radius: 50%;
  background-image: url(${FaceImage});

  @media (min-width: 0px) and (max-width: 910px){
    width: 175px !important;
    height: 175px;
    background-size: 175px 175px;
  }

  @media (min-width: 910px) and (max-width: 1537px){
    width: 200px !important;
    height: 200px;
    background-size: 200px 200px;
  }

  @media (min-width: 1537px){
    width: 250px !important;
    min-height: 250px;
    height: 250px !important;
    background-size: 250px 250px;
  }
`;
const TypingTextContainer = styled.div`
  position: relative;

  @media (min-width: 0px) and (max-width: 910px){
    font-size: 32px;
    width: 230px;
  }

  @media (min-width: 910px) and (max-width: 1537px){
    font-size: 52px;
    width: 380px;
  }

  @media (min-width: 1537px){
    font-size: 72px;
    width: 520px;
  }
`;
const IconLinkContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;

  @media (min-width: 0px) and (max-width: 910px){
    width: 230px;
  }

  @media (min-width: 910px) and (max-width: 1537px){
    width: 500px;
  }

  @media (min-width: 1537px){
    width: 800px;
  }
`;

const ParticleContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 600px;
`;

const particleParams = {
  fpsLimit: 28,
  particles: {
    size: {
      value: 1
    },
    number: {
      value: 400,
      density: {
        enable: false,
      },
    },
    move: {
      enable: true,
      speed: 0.1,
      direction: MoveDirection["top"],
    },
    opacity: {
      animation: {
        enable: true,
        opacity_min: 0.05,
        speed: 1,
        sync: false,
      },
      value: 1,
    },
  },
  detectRetina: false,
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: "bubble",
      },
      resize: true
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

  const particlesInit = (main: any) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container: any) => {
    console.log(container);
  };

  return (
    <LandingContainer isDarkMode={isDarkMode}>
      <ParticleContainer>
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            ...particleParams,
            particles: {
              ...particleParams.particles,
              color: { value: isDarkMode ? "#FFFFFF" : "#000000" },
            },
          }}
          canvasClassName = "particles-canvas"
          width="100%"
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
