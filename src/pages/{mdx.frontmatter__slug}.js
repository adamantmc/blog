import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout/Layout'
import PageTitle from '../components/PageTitle/PageTitle'
import Page from "../page";


function calculateReadingTime(text) {
  // Poor man's word count
  let words = text.split(/\W+/).filter((word) => word.length >= 2);
  // 238 is the average words-read-per-minute, set it to 220 for no apparent reason - just looks better
  return Math.ceil(words.length / 220);
}

const BlogPost = ({ data, children }) => {
    return (
        <Page>
            <Layout postTitle={data.mdx.frontmatter.title} postDate={data.mdx.frontmatter.date} readingTime={calculateReadingTime(data.mdx.body)}>
                {children}
            </Layout>
        </Page>
  )
}

// Gatsby passes the results of this query automatically to the BlogPost component (`data` prop)
export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
      body
    }
  }
`

export const Head = ({ data }) => <PageTitle title={data.mdx.frontmatter.title} />

export default BlogPost