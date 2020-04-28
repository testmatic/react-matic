import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from '@material-ui/core/CssBaseline';

// Components
import Navbar from "./components/Navbar";

// Pages
import home from "./pages/home";

// We keep the theme in app state
const themeObject = {
  palette: {
    primary: { main: "#053f5b" },
    secondary: { main: "#5e3c6f" },
    type: "light"
  }
};

const useDarkMode = () => {
  const [theme, setTheme] = useState(themeObject);

  const {palette: { type }} = theme;
  
  // we change the palette type of the theme in state
  const toggleDarkMode = () => {
    console.log("changeMode")
    const updatedTheme = {
      ...theme,
      palette: {
        ...theme.palette,
        type: type==="light"? "dark" : "light"
      }
    }
    setTheme(updatedTheme);
  }
  return [theme, toggleDarkMode]
}


const App = () => {

  const [theme, toggleDarkMode] = useDarkMode()
  const themeConfig = createMuiTheme(theme);

  return (
    <ThemeProvider theme={themeConfig}>
      <CssBaseline />
      <div className="App">
        <Router>
          <Navbar toggleDarkTheme={{method:toggleDarkMode, type: theme.palette.type}} />
          <div className="container">
            <Switch>
              <Route exact path="/" component={home} />
            </Switch>
          </div>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
