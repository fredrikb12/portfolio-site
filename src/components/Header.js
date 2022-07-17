import { StyledHeaderSection } from "../styled-components/HeaderSection.styled";
import { StyledHeaderText } from "../styled-components/HeaderText.styled";
import AboutButton from "./AboutButton";
import MobileNavbar from "./MobileNavbar";
import Navbar from "./Navbar";
import ProjectsButton from "./ProjectsButton";

function Header() {
  return (
    <header
      id="home"
      style={{
        backgroundColor: "#242526",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        width: "100vw",
        justifyContent: "center",
      }}
    >
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
    </header>
  );
}

export default Header;
