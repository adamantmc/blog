import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import {
  topbar,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle,
} from './TopBar.module.css'

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
    <div className={topbar}>
        {/* <header className={siteTitle}>{data.site.siteMetadata.title}</header> */}
        <nav>
            <ul className={navLinks}>
            <li className={navLinkItem}>
                <Link to="/" className={navLinkText}>
                    Home
                </Link>
            </li>
            <li className={navLinkItem}>
                <Link to="/about" className={navLinkText}>
                    About
                </Link>
            </li>
            </ul>
        </nav>
    </div>
  )
}

export default TopBar;