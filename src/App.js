import { ThemeProvider } from "styled-components";
import AboutSection from "./components/AboutSection";
import Header from "./components/Header";
import { GlobalStyle } from "./styled-components/GlobalStyle";

function App() {
  const theme = {
    main: "#242526",
    red: "#ED254E",
    blue: "#1985A1",
    white: "#F4FFFD",
    gray: "#70798C",
    darkGray: "#20232A",
    paleRed: "#CF6F82",
  };
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <main>
        <AboutSection />
      </main>
    </ThemeProvider>
  );
}

export default App;
