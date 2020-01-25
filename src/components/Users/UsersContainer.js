import React from 'react';
import {connect} from 'react-redux'
// import Users from './Users';
import { FollowAC, UNFollowAC, setUsersAC } from '../../redux/UsersPage-reduce';
import UsersClass from './UsersClass';






let MapDispatchToProps=(dispatch) => {
    return {
        follow: (userId) => {
           
            dispatch(FollowAC(userId))
        },
        unfollow: (userId) => {
           
            dispatch(UNFollowAC(userId))
        },
        setusers: (users) => {
           
            dispatch(setUsersAC(users))
        },



        

    }
}

let MapStateToProps=(state) => {
    return {
        users:state.usersPage.users
    }
}



// const UsersContainer = connect(MapStateToProps, MapDispatchToProps)(Users);
const UsersContainer = connect(MapStateToProps, MapDispatchToProps)(UsersClass);

export default UsersContainer;