import { useState } from "react";
import styled, { keyframes } from "styled-components";
import { TypeAnimation } from 'react-type-animation';
import { Link as LinkScroll } from "react-scroll";
import ScrollAnimation from "react-animate-on-scroll";
import Dropdown from "../Dropdown/Dropdown";
import Header from "../Header/Header";
import Person from "../../assets/programador.png";
import BackgroundImage from "../../assets/background.jpeg";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showScrollDown, setShowScrollDown] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <HeroBackground>
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} />
      <HeroContainer>
        <HeroWrapper>
          <HeroLeft>
            <ScrollAnimation animateIn="fadeIn">
              <TypeAnimation
                cursor={false}
                sequence={[
                  "Hi, I'm Jose.",
                  () => setShowSubtitle(true)
                ]}
                speed={150}
                wrapper="h1"
                repeat={0}
              />
              {showSubtitle && (
                <TypeAnimation
                  cursor
                  sequence={[
                    500, "A .NET Developer", 1000,
                    "A disciplined person with excellence", 1000,
                    () => setShowScrollDown(true),
                    500,
                  ]}
                  speed={50}
                  deletionSpeed={65}
                  wrapper="h5"
                  repeat={Infinity}
                />
              )}
            </ScrollAnimation>
          </HeroLeft>
          <HeroRight>
            <ScrollAnimation animateIn="fadeIn">
              <Image src={Person} alt="man" />
            </ScrollAnimation>
          </HeroRight>
        </HeroWrapper>
        {showScrollDown && (
          <ScrollAnimation animateIn="flipInX" offset={0}>
            <ScrollDown to="projects" id="scrollDown">
              <ScrollLink>
                Scroll down
              </ScrollLink>
            </ScrollDown>
          </ScrollAnimation>
        )}
      </HeroContainer>
    </HeroBackground>
  );
};


export default Hero;

const HeroBackground = styled.div`
  width: 100%;
  min-height: 70vh;
  position: relative;
  background-image: url(${BackgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  /* Overlay oscuro */
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 0;
  }

  /* Asegura que todos los hijos estén encima del overlay */
  > * {
    position: relative;
    z-index: 1;
  }
`;

const HeroContainer = styled.div`
  padding: 4rem 1rem 2rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  color: white;
`;



const HeroWrapper = styled.div`
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 992px) {
    flex-direction: column;
  }
`;

const HeroLeft = styled.div`
  flex: 1;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-size: 2.8rem;
    color: #f6f6f6;
  }

  h5 {
    font-size: 1.6rem;
    color: rgb(119, 119, 121);
    margin-bottom: 1rem;
  }

  @media screen and (max-width: 992px) {
    align-items: center;
    text-align: center;
  }
`;

const HeroRight = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

const Image = styled.img`
  height: 300px;
`;

const ScrollDownAnim = keyframes`
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-20px); }
  60% { transform: translateY(-10px); }
`;

const ScrollDown = styled(LinkScroll)`
  animation: ${ScrollDownAnim} 2s linear infinite;
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  position: absolute;

  @media screen and (max-width: 992px) {
    position: relative;
    justify-content: center;
    margin-top: 2rem;
  }
`;

const ScrollLink = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.3rem;
  color: #f6f6f6;

  img {
    height: 35px;
    margin-left: 6px;
  }
`;
