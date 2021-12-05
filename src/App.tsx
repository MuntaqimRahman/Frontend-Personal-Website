import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Pages
import PortfolioPage from "./pages/portfolio/portfolio";
import AboutPage from "./pages/about/about";
import ContentPage from "./pages/content-page/content-page";
import BlogPage from "./pages/blogs/blog";

//Components
import useLocalStorage from "./hooks/useLocalStorage";
import Header from "./pages/header/header";

import { ThemeProvider } from "styled-components";
import { GlobalStyle, TopLayerTheme } from "./components/styles/globalStyles";
import { lightMode, darkMode } from "./components/styles/LightDarkThemes";
import { DarkModeContextProvider } from "./contexts/darkmode";

import { ContentPageTypes } from "./enum/enum";


function App() {
  const [isDarkMode, setIsDarkMode, isComponentMounted] = useLocalStorage(
    "isDarkMode",
    true
  );


  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  

  return (
    !isComponentMounted ? 
      <></> :

    <Router>
      <ThemeProvider theme={isDarkMode === true ? darkMode : lightMode}>
        <DarkModeContextProvider value={{ isDarkMode, setIsDarkMode }}>
          <GlobalStyle />
          <TopLayerTheme isDarkMode={isDarkMode}>
            <div className="App">
              <Header toggleDarkMode={toggleDarkMode} />
            </div>
            <Switch>
              <Route exact path="/portfolio">
                <PortfolioPage />
              </Route>
              <Route path={`/portfolio/:ID`}>
                <ContentPage pageType={ContentPageTypes.Portfolio} />
              </Route>
              <Route exact path="/blogs">
                <BlogPage />
              </Route>
              <Route exact path={`/blogs/:ID`}>
                <ContentPage pageType={ContentPageTypes.Blog} />
              </Route>
              <Route path="/">
                <AboutPage />
              </Route>
            </Switch>
          </TopLayerTheme>
        </DarkModeContextProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
