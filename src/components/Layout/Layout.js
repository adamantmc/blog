import * as React from 'react'
import TopBar from "../TopBar/TopBar";
import {
  container,
  heading,
  postBody,
  info
} from './Layout.module.css'

const Layout = ({ postTitle, postDate, readingTime, children }) => {
  let infoText = postDate;
  if(readingTime !== undefined) {
    infoText += ` - ${readingTime} min read`
  }

  return (
    <div className={container}>
      <TopBar></TopBar>
      <main>
        <h1 className={heading}>{postTitle}</h1>
        <p className={info}>{infoText}</p>
        <div className={postBody}>
          {children}
        </div>
      </main>
    </div>
  )
}

export default Layout;