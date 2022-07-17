import { StyledHeader } from "../styled-components/Header.styled";
import { StyledHeaderSection } from "../styled-components/HeaderSection.styled";
import { StyledHeaderText } from "../styled-components/HeaderText.styled";
import AboutButton from "./AboutButton";
import MobileNavbar from "./MobileNavbar";
import Navbar from "./Navbar";
import ProjectsButton from "./ProjectsButton";

function Header() {
  return (
    <StyledHeader id="home">
      <Navbar />
      <MobileNavbar />
      <StyledHeaderSection>
        <StyledHeaderText>
          I'm Fredrik, a <span>Full Stack Developer.</span>
        </StyledHeaderText>
        <div
          style={{
            padding: "10px",
            display: "flex",
            gap: "15px",
          }}
        >
          <AboutButton />
          <ProjectsButton />
        </div>
      </StyledHeaderSection>
    </StyledHeader>
  );
}

export default Header;
