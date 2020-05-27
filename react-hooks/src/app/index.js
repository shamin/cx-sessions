import React, { useState } from 'react';
import { themes, ThemeContext } from './theme'
// import Home from './components/class/home';
import Home from './components/function/home';

function App() {
  const [theme, setTheme] = useState(themes.light)

  function toogleTheme() {
    const newTheme = theme.key === themes.light.key ? themes.dark : themes.light
    setTheme(newTheme)
  }

  return (
    <div className="app">
      <ThemeContext.Provider value={theme}>
        <div className="theme-toggle">
          <button onClick={toogleTheme}>{theme.name}</button>
        </div>
        <Home />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
