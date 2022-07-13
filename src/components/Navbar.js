import NavItem from "./NavItem";
import HomeIcon from "../images/home.svg";
import AboutIcon from "../images/about.svg";
import ProjectsIcon from "../images/projects.svg";
import SkillsIcon from "../images/skills.svg";
import {
  StyledLogoContainer,
  StyledNavbar,
} from "../styled-components/Navbar.styled";

function Navbar() {
  return (
    <StyledNavbar>
      <StyledLogoContainer>
        <a
          style={{ textDecoration: "none", color: "inherit", display: "flex" }}
          href="#home"
        >
          <p>FREDRIK</p>
          <p style={{ color: "#ED254E" }}>B12</p>
        </a>
      </StyledLogoContainer>
      <ul style={{ display: "flex", gap: "20px", listStyle: "none" }}>
        <NavItem name="Home" src={HomeIcon} />
        <NavItem name="About" src={AboutIcon} />
        <NavItem name="Skills" src={SkillsIcon} />
        <NavItem name="Projects" src={ProjectsIcon} />
      </ul>
    </StyledNavbar>
  );
}

export default Navbar;
