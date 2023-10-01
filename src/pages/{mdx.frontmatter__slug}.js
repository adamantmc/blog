import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout/Layout'
import PageTitle from '../components/PageTitle/PageTitle'

const BlogPost = ({ data, children }) => {
  return (
    <Layout postTitle={data.mdx.frontmatter.title} postDate={data.mdx.frontmatter.date}>
        {children}
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
    }
  }
`

export const Head = ({ data }) => <PageTitle title={data.mdx.frontmatter.title} />

export default BlogPost