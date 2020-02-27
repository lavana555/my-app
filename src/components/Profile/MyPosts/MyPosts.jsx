import React, { Component } from 'react';
import classes from './MyPosts.module.css'
import Post from './Post/Post';
import { actionPostAdd, actionPOstChange } from '../../../redux/profilePage-reduce';
import {MyPostForm} from "./MyPostForm";
import {Field, reduxForm} from "redux-form";
import {maxLength15, MaxLengthCreator, minLength2, required} from "../../utils/validators/validators";
import {TextArea} from "../../common/FormsControl/FormsControls";


const    maxLength=MaxLengthCreator(10)

const MyPosts = (props) => {



  let taskmessageEls = props.profilePage.messageEls.map(messageEl => <Post message={messageEl.message} liCounts={messageEl.liCounts} />)


  let addNewPost=(values)=>{
     // alert('yo')
      props.addPost(values.newmessage)

  }

  return (
    <div className={classes.postsBlock}>
      <h3> my posts</h3>
      <div >
      </div>
      <div className={classes.posts}>
        {taskmessageEls}
      </div>
        <MyPostReduxForm onSubmit={addNewPost}/>
    </div>

  )
}

const MyPostsForm=(props)=>{

    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"your message"} component={TextArea} name={"newmessage"} type={"text"}
                       validate={[required, maxLength]}
                />
            </div>
                <div>
                    <button>add</button>
                </div>
        </form>
    )
}
const MyPostReduxForm=reduxForm({form:'myPost'})(MyPostsForm)


export default MyPosts;