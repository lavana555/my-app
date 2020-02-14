import React, {Component} from 'react';
import classes from './Users.module.css';
import Userphoto from './../../assets/images/User.png'
import {NavLink} from "react-router-dom";

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
                            <NavLink to={`/profile/${user.id}`} >
                            <img src={user.photos.small != null ? user.photos.small : Userphoto}/>
                            </NavLink>
                        </div>
                        <div>
                            {user.followed
                                ? <button onClick={() => props.unfollow(user.id)}>follow</button>
                                : <button onClick={() => props.follow(user.id)}>unfollow</button>}
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