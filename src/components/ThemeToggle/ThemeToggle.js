import React from "react";
import ThemeToggleStyles from "./ThemeToggleStyle";
import themeContext from "../../context/themeContext";

class ThemeToggle extends React.Component {

  render() {

    return (
      <ThemeToggleStyles className="item">
         <input type="checkbox"
                id="toggle"
                onChange={this.context.toggleTheme} />
        <label htmlFor="toggle">
          <div className="iconfont icon-sun"></div>
          <div className="iconfont icon-moon-1"></div>
        </label>
      </ThemeToggleStyles>
    )
  }
}

ThemeToggle.contextType = themeContext;

export default ThemeToggle;