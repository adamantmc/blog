import * as React from 'react'
import {PostTitle, PostInfo, PostDiv} from "./styles";

const Post = ({ postTitle, postDate, readingTime, children }) => {
  let infoText = postDate;
  if(readingTime !== undefined) {
    infoText += ` - ${readingTime} min read`
  }

  return (
    <main>
        <PostTitle>{postTitle}</PostTitle>
        <PostInfo>{infoText}</PostInfo>
        <PostDiv>{children}</PostDiv>
    </main>
  )
}

export default Post;