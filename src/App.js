import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import { GlobalStyle } from "./styled-components/GlobalStyle";

function App() {
  const theme = {
    main: "#242526",
    red: "#ED254E",
    blue: "#1985A1",
    white: "#F4FFFD",
    gray: "#70798C",
  };
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
    </ThemeProvider>
  );
}

export default App;
