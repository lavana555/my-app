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

        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 2
        }
        this.props.GetUserId(userId)
    //    this.props.GetUserStatus(userId)
        this.props.GetUserStatus(userId)
       // this._restoreState(userId)
        //statusChenged
    }



// _restoreState=(userId)=>{
//      axios.get(`https://social-network.samuraijs.com/api/1.0//profile/status/`+userId, {
//          withCredentials: true,
//          headers: {"API-KEY": "5f6c2ab3-57e3-4d52-8437-82b984ef36cf"}
//      })
//     .then(res => {
// //debugger
//         //console.log(res.data)
//         this.props.getStatus(res.data)
//
// })
//
//
// }
     statusChenged=(title)=>{

         this.props.SetUserStatus(title)
        //debugger
     //      axios.put(`https://social-network.samuraijs.com/api/1.0//profile/status`,
     //          {status:title},
     //          {
     //              withCredentials: true,
     //              headers: {"API-KEY": "5f6c2ab3-57e3-4d52-8437-82b984ef36cf"}
     //          }).then(res=>{
     //            // debugger;
     //          if (res.data.resultCode===0) {
     //              this.props.addStatus(title)
     //      }
     // })
}

    render = () => {
        return (
            <Profile {...this.props} statusChenged={this.statusChenged}/>
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
        status:state.profilePage.status
    }
}
// let WithUrlDataContainerComponent = withRouter(AutRedirectComponent)
// export default connect(mapStateToProps, {setUserProfile, GetUserId})(WithUrlDataContainerComponent);
    export default  compose(
        connect(mapStateToProps, {setUserProfile, GetUserId,
            // getStatus,
            GetUserStatus,
            SetUserStatus
            // addStatus
        }),
            withRouter
            // WithRedirectComponent
    )(ProfileContainer)
