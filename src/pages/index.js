import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout/Layout'
import PageTitle from '../components/PageTitle/PageTitle'
import { ThemeProvider } from 'styled-components';
import Themes from "../themes/themes";
import GlobalStyle from "../global";
import styled from "styled-components";


const StyledLink = styled(Link)`
    color: ${props => props.theme.post.textColor};
`;


const BlogPage = ({ data }) => {
  return (
    <ThemeProvider theme={Themes.light}>
      <GlobalStyle />
      <Layout pageTitle="adamantmc">
        {
          data.allMdx.nodes.map(node => (
            <article key={node.id}>
              <h2>
                <StyledLink to={`${node.frontmatter.slug}`}>
                  {node.frontmatter.title}
                </StyledLink>
              </h2>
              <p>Posted: {node.frontmatter.date}</p>
            </article>
          ))
        }
      </Layout>
    </ThemeProvider>
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