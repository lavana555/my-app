import React, {Component} from 'react';
import {tsPropertySignature} from '@babel/types';
import classes from './Users.module.css'
import * as axios from 'axios';
import Userphoto from './../../assets/images/User.png'
import Users from './Users';


class UsersAPIComponent extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setusers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }

    onPageChged = (p) => {
        this.props.pageChange(p)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`).then(response => {
            this.props.setusers(response.data.items)
        })
    }

    render = () => {
        return (
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                users={this.props.users}
                currentPage={this.props.currentPage}
                unfollow={this.props.unfollow}
                follow={this.props.follow}
                onPageChged={this.onPageChged}/>
        )

    }
}

export default UsersAPIComponent;