import React from 'react';
import LandingPage from './pages/LandingPage';
import GlobalStyles from './styles/GlobalStyles';
import themeContext from './context/themeContext';
import themeList from './data/themeList';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.toggleTheme = () => {
      this.setState(state => ({
        theme: state.theme === themeList.dark ? themeList.light : themeList.dark
      }));
    }

    this.state = {
      theme: themeList.light,
      toggleTheme: this.toggleTheme
    }
  }



  render() {
    return (
      <>
        <themeContext.Provider value={this.state}>
          <GlobalStyles mode={this.state.theme}/>
          <LandingPage />
        </themeContext.Provider>
      </>
    )
  }
}


export default App;
