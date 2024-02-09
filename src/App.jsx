/* eslint-disable no-undef */
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import { GlobalStyle } from "./components/styled/GlobalStyle";
import { useContext } from "react";
import { SiteContext } from "./context/SiteContext";
import { lightTheme, darkTheme } from "./theme/theme";
import Main from "./components/Main";

export default function App() {
  const { themeName } = useContext(SiteContext);
  return (
    <ThemeProvider theme={themeName === "light" ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Header />
      <Main />
    </ThemeProvider>
  );
}
