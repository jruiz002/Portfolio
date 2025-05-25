import React from "react";
import styled from "@emotion/styled";
import ScrollAnimation from "react-animate-on-scroll";
import PersonalPhoto from "../../assets/jose.jpeg";

const About = () => {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
          <ScrollAnimation animateIn="fadeInLeft">
            <Image
              src={PersonalPhoto}
              alt="jose"
            />
          </ScrollAnimation>
          <div className="AboutBio">
            <ScrollAnimation animateIn="fadeInLeft">
              🎓 I'm a Computer Science and Information Technology Engineering student at Universidad del Valle de Guatemala, with a solid foundation in programming, software development, and problem-solving. I consider myself a proactive person, highly adaptable, with a constant motivation to learn and a strong orientation towards teamwork.
            </ScrollAnimation>

            <br /><br />

            <ScrollAnimation animateIn="fadeInLeft">
              💼 I have professional experience in various tech environments, from developing WordPress plugins to building applications with Angular and Node.js during my internship at BDG, where I also contributed to significant projects like implementing encryption techniques for IGSS. Currently, I am working as a .NET and SQL Server developer, further expanding my skills in backend development and database management.
            </ScrollAnimation>

            <br /><br />

            <ScrollAnimation animateIn="fadeInLeft">
              🌟 I'm a proud ambassador of the Juan Bautista Gutiérrez scholarship, awarded by Corporación Multi Inversiones (CMI), promoting values such as excellence, innovation, and social responsibility.
            </ScrollAnimation>

            <br /><br />

            <ScrollAnimation animateIn="fadeInLeft">
              🔧 <strong>Technical skills:</strong> .NET, Node.js, Angular, React, Java, PHP, Docker, MongoDB, MySQL, GIT.
            </ScrollAnimation>

            <br /><br />
          </div>
        </div>
      </div>
    </ContactWrapper>
  );
};

export default About;

// --- Styled Components ---

const ContactWrapper = styled.div`
  margin-top: 5rem;
  color: #333;

  .Container {
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  .SectionTitle {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 2rem;
    text-align: center;
  }

  .BigCard {
    display: flex;
    flex-direction: row;
    background: #f5f5f5;
    padding: 2rem;
    border-radius: 10px;
    gap: 2rem;

    @media screen and (max-width: 768px) {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
  }

  .AboutBio {
    flex: 1;
    font-size: 1rem;
    line-height: 1.6;

    .tagline2 {
      margin-top: 1.5rem;
      font-weight: 600;
      font-style: italic;
      color: #555;
    }
  }
`;

const Image = styled.img`
  max-width: 120px;
  margin: 0 auto;
  margin-bottom: 1rem;
  border-radius: 50%;
  object-fit: cover;

  @media screen and (max-width: 768px) {
    max-width: 100px;
  }
`;

const Technologies = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 1rem;
  gap: 1.5rem;
`;

const Tech = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100px;
  min-width: 100px;
  margin-bottom: 2rem;
`;

const TechImg = styled.img`
  height: 40px;
  width: 40px;
  padding-bottom: 5px;
`;

const TechName = styled.div`
  font-size: 14px;
  color: #222;
`;
