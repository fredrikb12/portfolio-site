import { ThemeProvider } from "styled-components";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import { GlobalStyle } from "./styled-components/GlobalStyle";

function App() {
  const theme = {
    main: "#242526",
    red: "#ED254E",
    blue: "#1985A1",
    white: "#F4FFFD",
    gray: "#70798C",
    darkGray: "#20232A",
    lighterGray: "#383A3D",
    paleRed: "#CF6F82",
  };
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <main>
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
