import React, {Component} from 'react';
import classes from './Users.module.css';
import Userphoto from './../../assets/images/User.png'
import {NavLink} from "react-router-dom";
import UsersPaginator from "../common/Paginator/UsersPaginator";

const User = ({follow,unfollow, isFolowwingProgres,user}) => {
    return (

        <div>
                    <span>
                        <div className={classes.photo}>
                            <NavLink to={`/profile/${user.id}`}>
                            <img src={user.photos.small != null ? user.photos.small : Userphoto}/>
                            </NavLink>
                        </div>
                        <div>
                            {user.followed
                                ?
                                <button disabled={isFolowwingProgres.some(u => (u === user.id))} onClick={() => {
                                    unfollow(user.id)

                                }}>unfollow</button>
                                :
                                <button disabled={isFolowwingProgres.some(u => (u === user.id))} onClick={() => {
                                    follow(user.id)
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


export default User;