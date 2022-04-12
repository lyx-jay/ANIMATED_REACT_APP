import React from 'react';
import LandingPage from './pages/LandingPage';
import GlobalStyles from './styles/GlobalStyles';
import themeContext from './context/themeContext';

class App extends React.Component {
  render() {
    return (
      <>
        <themeContext.Provider value='light'>
          <GlobalStyles />
          <LandingPage />
        </themeContext.Provider>
      </>
    )
  }
}


export default App;
