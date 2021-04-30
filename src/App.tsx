import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Pages
import PortfolioPage from "./pages/portfolio/portfolio";
import AboutPage from "./pages/about/about";

//Components
import useLocalStorage from "./hooks/useLocalStorage";
import Header from "./pages/header/header";

import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./components/styles/globalStyles";
import { lightMode, darkMode } from "./components/styles/LightDarkThemes";
import { DarkModeContextProvider } from "./contexts/darkmode";

function App() {
  const [isDarkMode, setIsDarkMode] = useLocalStorage("isDarkMode", true);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <Router>
      <ThemeProvider theme={isDarkMode === true ? darkMode : lightMode}>
        <DarkModeContextProvider value={{ isDarkMode, setIsDarkMode }}>
          <GlobalStyle />
          <div className="App">
            <Header toggleDarkMode={toggleDarkMode} />
          </div>
          <Switch>
            <Route path="/portfolio">
              <PortfolioPage />
            </Route>
            <Route path="/">
              <AboutPage />
            </Route>
          </Switch>
        </DarkModeContextProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
