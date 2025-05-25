import React from "react";
import styled from "@emotion/styled";
import { FaBars } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import LogoImage from "../../assets/Logo.png"; 

const Nav = styled.nav`
  background: transparent;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 10;
`;

const NavLink = styled(ScrollLink)`
  color: rgb(119, 119, 121);
  display: flex;
  font-size: 1.2rem;
  align-items: center;
  height: 100%;
  cursor: pointer;
  &:hover {
    color: #f6f6f6;
  }
`;

const Logo = styled('div')`
  img {
    width: 75px;
    height: 75px;
  }
`;

const Bars = styled(FaBars)`
  display: none;
  color: #fff;
  font-size: 1.8rem;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;

  .menu-item + .menu-item {
    margin-left: 1rem;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Header = ({ toggle }) => {
  return (
    <div className="Container" style={{ padding: 0 }}>
      <Nav>
        <Logo to="/">
          <img src={LogoImage} alt="logo" />
        </Logo>
        <NavMenu>
          <NavLink className="menu-item" to="projects" smooth={true} duration={500}>
            Projects
          </NavLink>
          <NavLink className="menu-item" to="about" smooth={true} duration={500}>
            About
          </NavLink>
          <NavLink className="menu-item" to="contact" smooth={true} duration={500}>
            Contact
          </NavLink>
        </NavMenu>
        <NavBtn>
          <a
            className="btn PrimaryBtn"
            href="https://www.linkedin.com/in/joseruiz002/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linkedin
          </a>
        </NavBtn>
        <Bars onClick={toggle} />
      </Nav>
    </div>
  );
};

export default Header;
