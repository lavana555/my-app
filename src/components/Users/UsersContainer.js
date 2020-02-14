import React from 'react';
import {connect} from 'react-redux'
import {
    follow,
    unfollow,
    setusers,
    pageChange,
    setTotalUsersCount,
    setIsToggle
} from '../../redux/UsersPage-reduce';
import * as axios from "axios";
import Users from "./Users";
import Preloader from "../common/preloader/Preloader";


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.setIsToggle(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setIsToggle(false)
            this.props.setusers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }

    onPageChged = (p) => {
        this.props.setIsToggle(true)
        this.props.pageChange(p)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`).then(response => {
            this.props.setIsToggle(false)
            this.props.setusers(response.data.items)
        })
    }
    render = () => {
        return (
            <>
                {this.props.isFetching ?
                    <Preloader/> : null}
                <Users
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    users={this.props.users}
                    currentPage={this.props.currentPage}
                    unfollow={this.props.unfollow}
                    follow={this.props.follow}
                    onPageChged={this.onPageChged}
                    isFetching={this.props.isFetching}
                />
            </>
        )
    }
}

let MapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

export default connect(MapStateToProps, {
    follow,
    unfollow,
    setusers,
    pageChange,
    setTotalUsersCount,
    setIsToggle
})(UsersContainer);

