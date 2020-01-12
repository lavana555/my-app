import React, { Component } from 'react';
import classes from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';


// let messageEls = [ 
//     { message: "hi did you want", liCounts: '5', id: 1 },
//     { message: "what are you doin now", liCounts: '55', id: 2 }
//   ]


const Profile = (props) => {




    return (<div>
        <div className={classes.contimg}>
            <ProfileInfo />
        </div>
        <MyPosts messageEls={props.messageEls}
            APPstate={props.APPstate}
            PostChange={props.PostChange}
            AddPost={props.AddPost} />
    </div>



    )

}


export default Profile;