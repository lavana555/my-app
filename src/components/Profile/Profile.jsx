import React, {Component} from 'react';
import classes from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';



const Profile = (props) => {
//debugger;
    return (<div>
            <div className={classes.contimg}>
                <ProfileInfo profile={props.profile} status={props.status} statusChenged={props.statusChenged}/>
            </div>
            <MyPostsContainer/>
        </div>


    )

}

export default Profile;