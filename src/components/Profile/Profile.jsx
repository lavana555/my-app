import React, { Component } from 'react';
import classes from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
<<<<<<< HEAD
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

=======

const Profile = () => {
    return (<div className={classes.content}>
        <div className={classes.contimg}>
            <img src='https://www.hakaimagazine.com/wp-content/uploads/header-baltic-sea-radiation.jpg' />
        </div>
        <div>
            ava+description
        </div>
       <MyPosts />
           </div>
    
>>>>>>> ea8fe3532ddd7b36e8bcee1047a16417e7a155d8


    )

}


export default Profile;