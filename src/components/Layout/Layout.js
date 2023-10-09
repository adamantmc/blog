import * as React from 'react'
import TopBar from "../TopBar/TopBar";
import {
  container,
} from './Layout.module.css'
import Post from '../Post/Post';

const Layout = ({ postTitle, postDate, readingTime, children }) => {
  return (
    <div className={container}>
      <TopBar></TopBar>
      <Post postTitle={postTitle} postDate={postDate} readingTime={readingTime} children={children}></Post>
    </div>
  )
}

export default Layout;