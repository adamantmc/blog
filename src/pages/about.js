import * as React from 'react'
import Layout from '../components/Layout/Layout'
import { ThemeProvider } from 'styled-components';
import Themes from "../themes/themes";
import GlobalStyle from "../global";

const AboutPage = () => {
  return (
    <ThemeProvider theme={Themes.light}>
      <GlobalStyle />
      <Layout pageTitle="About Me">
        <p>Hi there! I'm Adam, and I'm a software engineer. In this blog, I'm writing about cool stuff that I stumbled upon while writing software.</p>
        <p>I've worked in various roles throughout my career, starting off from Desktop Application development, transitioning to a Full-Stack engineer, moving on to the Back-End, and then to Data Engineering. I have a wide variety of interests, something which I hope will be reflected on this blog.</p>
        <p>Feel free to check out my projects on <a href="https://github.com/adamantmc/">GitHub</a>, which contain among others the <a href="https://github.com/adamantmc/blog/">source code of this blog.</a></p>.
      </Layout>
    </ThemeProvider>
  )
}

export const Head = () => <title>About Me</title>

export default AboutPage