import React, { Component } from 'react';
import classes from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div>
            my posts
        <div >
                <textarea></textarea>
                <button>Add post</button>
        </div>
        <div className={classes.posts}>
          <Post  name="dima" liCounts='5' />
          <Post  name="nikita" liCounts='55' />
          <Post  name="liza" liCounts='555'/>
        </div>
           </div> 



    )

}


export default MyPosts;