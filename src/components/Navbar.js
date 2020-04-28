import React, { Component } from "react";
import Link from "react-router-dom/Link";

//MUI stuff
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import Tooltip from "@material-ui/core/Tooltip";

class Navbar extends Component {
  render() {
    return (
      <AppBar position="fixed">
        <Toolbar className="nav-container">
          <Tooltip title="Delete">
            <IconButton onClick={this.props.toggleDarkTheme.method}>
              {this.props.toggleDarkTheme.type === "light" ? (
                <Brightness7Icon style={{ fill: "white" }} />
              ) : (
                <Brightness4Icon />
              )}
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Navbar;
