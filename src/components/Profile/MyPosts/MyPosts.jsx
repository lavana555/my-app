import React, { Component } from 'react';
import classes from './MyPosts.module.css'
import Post from './Post/Post';
<<<<<<< HEAD
import { actionPostAdd, actionPOstChange } from '../../../redux/profilePage-reduce';



const MyPosts = (props) => {
  let NewApddPost = React.createRef()
  let taskmessageEls = props.messageEls.map(messageEl => <Post message={messageEl.message} liCounts={messageEl.liCounts} />)
  let addPost = () => {

  
    props.dispatch(actionPostAdd());
 
  }


  let onPostChange = () => {
 let  NewText=NewApddPost.current.value

 props.dispatch(actionPOstChange(NewText))
 
  }
  return (
    <div className={classes.postsBlock}>
      <h3> my posts</h3>
      <div >
        <div>
          <textarea ref={NewApddPost} onChange={onPostChange} value={props.APPstate.messagesPage.newPostText}></textarea>
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={classes.posts}>
        {taskmessageEls}
      </div>
    </div>

  )
}
=======

const MyPosts = () => {
    return (
        <div>
            my posts
        <div >
                <textarea></textarea>
                <button>Add post</button>
        </div>
        <div className={classes.posts}>
          <Post />
          <Post />
          <Post />
        </div>
           </div> 



    )

}


>>>>>>> ea8fe3532ddd7b36e8bcee1047a16417e7a155d8
export default MyPosts;