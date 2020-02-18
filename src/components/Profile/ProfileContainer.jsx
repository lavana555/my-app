import React, {Component} from 'react';
import classes from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import * as axios from "axios";
import Profile from "./Profile";
import {connect} from 'react-redux'
import {GetUserId, setUserProfile} from "../../redux/profilePage-reduce";
import {Redirect, withRouter} from "react-router-dom";
import {getUserId} from "../../api/api";


class ProfileContainer extends React.Component {
    componentDidMount() {
        //debugger;
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 2
        }
        this.props.GetUserId(userId)
        // // axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
        // getUserId(userId)
        //     .then(data => {
        //         this.props.setUserProfile(data)
        // })
    }

    render = () => {

        if (this.props.isAuth===false) return <Redirect to={"/Login"} />
        return (
            <Profile {...this.props}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        isAuth:state.auth.isAuth
    }
}
let WithUrlDataContainerComponent = withRouter(ProfileContainer)
export default connect(mapStateToProps, {setUserProfile, GetUserId})(WithUrlDataContainerComponent);