import * as React from 'react'
import {
  postBody,
  heading,
  info
} from './Post.module.css'

const Post = ({ postTitle, postDate, readingTime, children }) => {
  let infoText = postDate;
  if(readingTime !== undefined) {
    infoText += ` - ${readingTime} min read`
  }

  return (
    <main>
        <h1 className={heading}>{postTitle}</h1>
        <p className={info}>{infoText}</p>
        <div className={postBody}>
            {children}
        </div>
    </main>
  )
}

export default Post;