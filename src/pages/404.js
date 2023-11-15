import * as React from 'react'
import Layout from '../components/Layout/Layout'
import Page from "../page";


const AboutPage = () => {
  return (
    <Page>
      <Layout postTitle="Page not found">
        <div style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
          <a href="https://xkcd.com/1969/">
            <img style={{borderRadius: "4px"}} src="https://imgs.xkcd.com/comics/not_available.png" alt="https://xkcd.com/1969/"></img>
          </a>
        </div>
      </Layout>
    </Page>
  )
}

export const Head = () => <title>Page not found</title>

export default AboutPage