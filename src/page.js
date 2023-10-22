import React, { useState, useEffect } from 'react'
import { ThemeProvider } from 'styled-components';
import { getCurrentTheme } from "./themes/themes";
import GlobalStyle from "./global";
import isBrowser from './utils';

const Page = ({children}) => {
  const [theme, setTheme] = useState(getCurrentTheme());
  console.log(theme);

  useEffect(() => {
    function updateTheme() {
      setTheme(getCurrentTheme());
    }
    
  // Required for gatsby build
  if (isBrowser) {
        window.addEventListener("themeChanged", updateTheme);
    }
    return () => {window.removeEventListener("themeChanged", updateTheme)}
  }, [])

  return (
    <ThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
    </ThemeProvider>
  )
}

export default Page;
