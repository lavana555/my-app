import React, { Component } from 'react';
import classes from './MyPosts.module.css'
import Post from './Post/Post';
import { actionPostAdd, actionPOstChange } from '../../../redux/profilePage-reduce';

const MyPosts = (props) => {
  
  
  let NewApddPost = React.createRef()
  let taskmessageEls = props.messageEls.map(messageEl => <Post message={messageEl.message} liCounts={messageEl.liCounts} />)
  let onaddPost = () => {

    props.addPost();

  }

    let onPostChange = () => {
    let NewText = NewApddPost.current.value
    props.PostChange(NewText)

  }
  return (
    <div className={classes.postsBlock}>
      <h3> my posts</h3>
      <div >
        <div>
          <textarea ref={NewApddPost} onChange={onPostChange} value={props.newPostText}></textarea>
        </div>
        <div>
          <button onClick={onaddPost}>Add post</button>
        </div>
      </div>
      <div className={classes.posts}>
        {taskmessageEls}
      </div>
    </div>

  )
}
export default MyPosts;