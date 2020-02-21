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
import {WithRedirectComponent} from "../Hoc/WithRedirectComponent";
import {compose} from "redux";


class ProfileContainer extends React.Component {
    componentDidMount() {

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

    // statusChenched=()=>{
    //       axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + 5741)
    //      getUserId(userId)
    //          .then(data => {
    //              this.props.setUserProfile(data)
    //      })
    // }
    statusChenged

    render = () => {
        return (
            <Profile {...this.props}/>
        )
    }
}

// compose(
//     connect(mapStateToProps, {setUserProfile, GetUserId},
//     withRouter,
//     WithRedirectComponent)(ProfileContainer)
//
//
// let AutRedirectComponent = WithRedirectComponent(ProfileContainer)

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
    }
}
// let WithUrlDataContainerComponent = withRouter(AutRedirectComponent)
// export default connect(mapStateToProps, {setUserProfile, GetUserId})(WithUrlDataContainerComponent);
    export default  compose(
        connect(mapStateToProps, {setUserProfile, GetUserId}),
            withRouter,
            WithRedirectComponent)(ProfileContainer)
