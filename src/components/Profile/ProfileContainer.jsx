import React, {Component} from 'react';
import classes from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import * as axios from "axios";
import Profile from "./Profile";
import {connect} from 'react-redux'
import {
    addStatus,
    getStatus,
    GetUserId,
    GetUserStatus,
    setUserProfile,
    SetUserStatus
} from "../../redux/profilePage-reduce";
import {Redirect, withRouter} from "react-router-dom";
import {getUserId} from "../../api/api";
import {WithRedirectComponent} from "../Hoc/WithRedirectComponent";
import {compose} from "redux";


class ProfileContainer extends React.Component {
    componentDidMount() {
        debugger;
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.AutorizId
            if (!userId) {
                this.props.history.push("/login")
            }
        }

        this.props.GetUserId(userId)
        this.props.GetUserStatus(userId)
    }


    statusChenged = (title) => {

        this.props.SetUserStatus(title)

    }

    render = () => {
        return (
            <Profile {...this.props} statusChenged={this.statusChenged}/>
        )
    }
}


let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        isAuth: state.auth.isAuth,
        AutorizId: state.auth.id
    }
}

export default compose(
    connect(mapStateToProps, {
        setUserProfile, GetUserId,
        // getStatus,
        GetUserStatus,
        SetUserStatus
        // addStatus
    }),
    withRouter
    // WithRedirectComponent
)(ProfileContainer)
