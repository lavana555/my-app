import React from 'react';
import {connect} from 'react-redux'
import {
    follow,
    unfollow,
    setusers,
    pageChange,
    setTotalUsersCount,
    setIsToggle, toggleFollowingProgress, getUsersThunk, getUsers
} from '../../redux/UsersPage-reduce';
import * as axios from "axios";
import Users from "./Users";
import Preloader from "../common/preloader/Preloader";
import {UserAPI} from "../../api/api";
import {WithRedirectComponent} from "../Hoc/WithRedirectComponent";
import {
    currentPageSelctor,
    isFetchingSelctor, isFolowwingProgresSelctor,
    pageSizeSelctor,
    totalUsersCountSelctor,
    userSelctor, userSuperSelctor, userSuperSelector
} from "../../redux/users-selector";


class UsersContainer extends React.Component {

    componentDidMount() {
        const {currentPage,pageSize}=this.props
        this.props.getUsers(currentPage,pageSize)
        // this.props.setIsToggle(true)
        // UserAPI.getUsersPage(this.props.currentPage,this.props.pageSize).then(data => {
        //  // debugger
        //   //console.log(data)
        //     this.props.setIsToggle(false)
        //     this.props.setusers(data.items)
        //     this.props.setTotalUsersCount(data.totalCount)
        // })
    }

    onPageChged = (pageNumber) => {


        this.props.getUsers(pageNumber,this.props.pageSize)

        // this.props.setIsToggle(true)
        // this.props.pageChange(pageNumber)
        // UserAPI.getUsersPage2(pageNumber,this.props.pageSize).then(data => {
        //     this.props.setIsToggle(false)
        //     this.props.setusers(data.items)
        // })
    }
    render = () => {
        console.log("render_users")
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
                    isFolowwingProgres={this.props.isFolowwingProgres}
                    toggleFollowingProgress={this.props.toggleFollowingProgress}


                />
            </>
        )
    }
}


let UsersAuthRdirectComponent=WithRedirectComponent(UsersContainer)


// let MapStateToProps = (state) => {
//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         isFolowwingProgres:state.usersPage.isFolowwingProgres
//     }
// }


let MapStateToProps = (state) => {
    console.log("mapstatetoprops_container")
    return {
        users: userSuperSelector(state),
        pageSize: pageSizeSelctor(state),
        totalUsersCount: totalUsersCountSelctor(state),
        currentPage: currentPageSelctor(state),
        isFetching: isFetchingSelctor(state),
        isFolowwingProgres:isFolowwingProgresSelctor(state)
    }
}






export default connect(MapStateToProps, {
    follow,
    unfollow,
     // setusers,
    pageChange,
     // setTotalUsersCount,
    // setIsToggle,
    toggleFollowingProgress,
    getUsers
})(UsersContainer);

