import * as React from 'react'
import {PostTitle, PostInfo, PostDiv} from "./styles";
import hljs from 'highlight.js/lib/core';
import python from 'highlight.js/lib/languages/python';
import 'highlight.js/styles/atom-one-dark.css';


hljs.registerLanguage('python', python);


const Post = ({ postTitle, postDate, readingTime, children }) => {
  React.useEffect(() => {
    hljs.highlightAll();
  },
  [])

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