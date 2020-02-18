import React, {Component} from 'react';
import classes from './Users.module.css';
import Userphoto from './../../assets/images/User.png'
import {NavLink} from "react-router-dom";
import * as axios from "axios";
import {FollowUsers, UnFollowUsers, UserAPI} from "../../api/api";
import {Follow} from "../../redux/UsersPage-reduce";

const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            {pages.map(p => {
                return <span onClick={() => props.onPageChged(p)}
                             className={props.currentPage === p && classes.selectedPage}>{p}</span>
            })}

            {
                props.users.map(user => <div key={user.id}>
                    <span>
                        <div className={classes.photo}>
                            <NavLink to={`/profile/${user.id}`}>
                            <img src={user.photos.small != null ? user.photos.small : Userphoto}/>
                            </NavLink>
                        </div>
                        <div>
                            {user.followed
                                ?
                                <button disabled={props.isFolowwingProgres.some(u => (u === user.id))} onClick={() => {
                                    props.unfollow(user.id)
                                    // props.toggleFollowingProgress(true, user.id);
                                    // // axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,
                                    // //     {withCredentials:true,
                                    // //     headers:{"API-KEY":"dbd5d851-df27-4a9f-a973-84ef71e7a1dc"
                                    // //     }
                                    // //     })
                                    // // props.toggleFollowingProgress(true,user.id),
                                    // UserAPI.UnFollowUsers(user.id)
                                    //     .then(responce => {
                                    //         if (responce.data.resultCode === 0) {
                                    //             props.unfollow(user.id)
                                    //         }
                                    //         props.toggleFollowingProgress(false, user.id)
                                    //     })
                                }}>unfollow</button>
                                :
                                <button disabled={props.isFolowwingProgres.some(u => (u === user.id))} onClick={() => {
                                    props.follow(user.id)
                                    // props.toggleFollowingProgress(true, user.id);
                                    // // axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {},
                                    // //     {
                                    // //         withCredentials: true,
                                    // //         headers: {"API-KEY": "5f6c2ab3-57e3-4d52-8437-82b984ef36cf"}
                                    // //     })
                                    // //props.toggleFollowingProgress(true, user.id),
                                    // UserAPI.FollowUsers(user.id)
                                    //     .then(responce => {
                                    //         if (responce.data.resultCode === 0) {
                                    //             props.follow(user.id)
                                    //
                                    //         }
                                    //         props.toggleFollowingProgress(false, user.id)
                                    //     })
                                }}>follow</button>}
                        </div>
                    </span>
                    <span>
                        {/* <div>{user.fullName}</div> */}
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </span>
                    <span>
                        <div>{'user.location.contry'}</div>
                        <div>{'user.location.city'}</div>
                    </span>
                </div>)
            }
        </div>
    )
}

export default Users;