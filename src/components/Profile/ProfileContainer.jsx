import React, {Component} from 'react';
import classes from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import * as axios from "axios";
import Profile from "./Profile";
import {connect} from 'react-redux'
import {setUserProfile} from "../../redux/profilePage-reduce";
import {withRouter} from "react-router-dom";


class ProfileContainer extends React.Component {

    componentDidMount() {
       // debugger;
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 2
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId).then(response => {
            debugger;
            console.log(response)
            this.props.setUserProfile(response.data)
        })
    }

    render = () => {
        return (
            <Profile {...this.props}/>
        )
    }
}
let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    }
}
let WithUrlDataContainerComponent = withRouter(ProfileContainer)
export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent);