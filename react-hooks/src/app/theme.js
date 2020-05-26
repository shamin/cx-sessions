import React from 'react'

export const themes = {
  light: {
    className: "app--light",
    key: 'light',
    name: 'Light',
    colors: {
      text: "#11111a",
      background: "#eeeeee",
    }
  },
  dark: {
    className: "app--dark",
    key: 'dark',
    name: 'Dark',
    colors: {
      text: "#ffffff",
      background: "#222222",
    }
  }
}

export const ThemeContext = React.createContext(
  themes.dark
)
