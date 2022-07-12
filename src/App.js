import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styled-components/GlobalStyle";

function App() {
  const theme = {};
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div>App</div>
    </ThemeProvider>
  );
}

export default App;
