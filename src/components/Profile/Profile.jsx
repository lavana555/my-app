import React, { Component } from 'react';
import classes from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';


const Profile = (props) => {
debugger;
   return (<div>
        <div className={classes.contimg}>
            <ProfileInfo />
        </div>
        <MyPostsContainer 
       
             store={props.store}
           
            />
    </div>



    )

}


export default Profile;