import React, { Component } from 'react';
import classes from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';

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
    


    )

}


export default Profile;