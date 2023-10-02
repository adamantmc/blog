import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout/Layout'
import PageTitle from '../components/PageTitle/PageTitle'

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="adamantmc">
      {
        data.allMdx.nodes.map(node => (
          <article key={node.id}>
            <h2>
              <Link to={`${node.frontmatter.slug}`} style={{color: "#434c5e"}}>
                {node.frontmatter.title}
              </Link>
            </h2>
            <p>Posted: {node.frontmatter.date}</p>
          </article>
        ))
      }
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC }}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          slug
        }
        id
      }
    }
  }
`

export const Head = () => <PageTitle title="" />

export default BlogPage;