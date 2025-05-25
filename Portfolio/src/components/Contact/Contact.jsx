import React, { useState } from "react";
import styled from "@emotion/styled";
import { MdContentCopy } from "react-icons/md";
import ScrollAnimation from "react-animate-on-scroll";

const ContactWrapper = styled.div`
  margin: 5rem 0;
`;

const Email = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  text-align: center;

  .email-row {
    display: flex;
    align-items: center;
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;
  }

  .copy-icon {
    cursor: pointer;
    color: #151418;
    transition: transform 0.2s ease-in-out;
  }

  .copy-icon:hover {
    transform: scale(1.2);
  }

  .tooltip {
    font-size: 0.875rem;
    color: green;
    margin-top: 0.5rem;
    opacity: 1;
    transition: opacity 0.3s ease-in-out;
  }

  span {
    font-size: 1rem;
    font-weight: 400;
  }

  @media (min-width: 576px) {
    span {
      font-size: 1.25rem;
    }
  }

  @media (min-width: 992px) {
    span {
      font-size: 1.5rem;
    }
  }
`;

function Contact() {
  const [showTooltip, setShowTooltip] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText("josegrg04@gmail.com");
    setShowTooltip(true);
    setTimeout(() => {
      setShowTooltip(false);
    }, 1000);
  };

  return (
    <ContactWrapper id="contact">
      <div className="Container">
        <div className="SectionTitle">Get In Touch</div>
        <ScrollAnimation animateIn="fadeIn">
          <div className="BigCard">
            <Email>
              <div className="email-row">
                <span>josegrg04@gmail.com</span>
                <MdContentCopy
                  size={25}
                  className="copy-icon"
                  onClick={copyToClipboard}
                />
              </div>
              {showTooltip && <div className="tooltip">Copied!</div>}
            </Email>
          </div>
        </ScrollAnimation>
      </div>
    </ContactWrapper>
  );
}

export default Contact;
