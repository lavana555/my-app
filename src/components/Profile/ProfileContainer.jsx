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

        // if (this.props.isAuth === false) return <Redirect to={"/Login"}/>

        return (
            <Profile {...this.props}/>
        )
    }
}

let AutRedirectComponent = WithRedirectComponent(ProfileContainer)

//
// let mapStateToPropsForRedirect = (state) => {
//     return {
//         isAuth: state.auth.isAuth
//     }
// }
//     AutRedirectComponent = connect(mapStateToPropsForRedirect)(AutRedirectComponent)

    let mapStateToProps = (state) => {
        return {
            profile: state.profilePage.profile,
        }
    }
    let WithUrlDataContainerComponent = withRouter(AutRedirectComponent)
    export default connect(mapStateToProps, {setUserProfile, GetUserId})(WithUrlDataContainerComponent);