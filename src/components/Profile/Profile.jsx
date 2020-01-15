import React, { Component } from 'react';
import classes from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = (props) => {
//debugger;
   return (<div>
        <div className={classes.contimg}>
            <ProfileInfo />
        </div>
        <MyPosts messageEls={props.messageEls}
            state={props.state}
            
            dispatch={props.dispatch}
            />
    </div>



    )

}


export default Profile;