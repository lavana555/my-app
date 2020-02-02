import React from 'react';
import {connect} from 'react-redux'
// import Users from './Users';
import { FollowAC, UNFollowAC, setUsersAC, setPageChangeAC, setTotalUsersCountAC } from '../../redux/UsersPage-reduce';
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
        pageChange:(p)=>{
            dispatch(setPageChangeAC(p))
        },
        setTotalUsersCount:(totalCount)=>{
            dispatch(setTotalUsersCountAC(totalCount))
        }


        

    }
}

let MapStateToProps=(state) => {
    return {
        users:state.usersPage.users,
        pageSize:state.usersPage.pageSize,
        totalUsersCount:state.usersPage.totalUsersCount,
        currentPage:state.usersPage.currentPage
    }
}



// const UsersContainer = connect(MapStateToProps, MapDispatchToProps)(Users);
const UsersContainer = connect(MapStateToProps, MapDispatchToProps)(UsersClass);

export default UsersContainer;