import React, { Component } from 'react';
import classes from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = (props) => {

   return (<div>
        <div className={classes.contimg}>
            <ProfileInfo />
        </div>
        <MyPosts messageEls={props.messageEls}
            APPstate={props.APPstate}
            
            dispatch={props.dispatch}
            />
    </div>



    )

}


export default Profile;