import * as React from 'react'
import Layout from '../components/Layout/Layout'
import Page from "../page";
import styled from "styled-components";


const StyledLink = styled.a`
    color: ${props => props.theme.linkColor};
`;


const AboutPage = () => {
  return (
    <Page>
      <Layout pageTitle="About Me">
        <p>Hi there! I'm Adam, and I'm a software engineer. In this blog, I'm writing about cool stuff that I stumbled upon while writing software.</p>
        <p>I've worked in various roles throughout my career, starting off from Desktop Application development, transitioning to a Full-Stack engineer, moving on to the Back-End, and then to Data Engineering. I have a wide variety of interests, something which I hope will be reflected on this blog.</p>
        <p>Feel free to check out my projects on <StyledLink href="https://github.com/adamantmc/">GitHub</StyledLink>, which contain among others the <StyledLink href="https://github.com/adamantmc/blog/">source code of this blog.</StyledLink></p>
      </Layout>
    </Page>
  )
}

export const Head = () => <title>About Me</title>

export default AboutPage