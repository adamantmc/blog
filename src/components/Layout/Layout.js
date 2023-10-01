import * as React from 'react'
import TopBar from "../TopBar/TopBar";
import {
  container,
  heading,
  postBody
} from './Layout.module.css'

const Layout = ({ postTitle, postDate, children }) => {
  return (
    <div className={container}>
      <TopBar></TopBar>
      <main>
        <h1 className={heading}>{postTitle}</h1>
        <p>{postDate}</p>
        <div className={postBody}>
          {children}
        </div>
      </main>
    </div>
  )
}

export default Layout;