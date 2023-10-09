import * as React from 'react'
import TopBar from "../TopBar/TopBar";
import {Container} from "./styles";
import Post from '../Post/Post';

const Layout = ({ postTitle, postDate, readingTime, children }) => {
  return (
    <Container>
      <TopBar></TopBar>
      <Post postTitle={postTitle} postDate={postDate} readingTime={readingTime} children={children}></Post>
    </Container>
  )
}

export default Layout;