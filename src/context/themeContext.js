import React from "react";
import themeList from '../data/themeList';

const themeContext = React.createContext({
  theme: themeList.light,
  toggleTheme: () => {}
});

export default themeContext;