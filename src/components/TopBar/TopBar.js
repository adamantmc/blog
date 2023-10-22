import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { SiteTitle, SiteTopBar, NavLinksList, NavLink } from './styles';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';


const TopBar = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <SiteTopBar>
        <SiteTitle>{data.site.siteMetadata.title}</SiteTitle>
        <nav>
            <NavLinksList>
            <NavLink>
                <Link to="/">
                    Home
                </Link>
            </NavLink>
            <NavLink>
                <Link to="/about">
                    About
                </Link>
            </NavLink>
            </NavLinksList>
        </nav>
        <ThemeSwitcher />
    </SiteTopBar>
  )
}

export default TopBar;