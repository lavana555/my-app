import React, { Component } from 'react';
import { tsPropertySignature } from '@babel/types';
import classes from './Users.module.css'
import * as axios from 'axios';
import Userphoto from './../../assets/images/User.png'


class UsersClass extends React.Component {
        constructor(props){
            super(props);
            alert("new")
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                this.props.setusers(response.data.items)
            })
        }


    
    render = () => {
        return (
            <div >
               
                {
                    this.props.users.map(user => <div key={user.id}>
                        <span>
                            <div className={classes.photo}>
                                <img src={user.photos.small != null ? user.photos.smal : Userphoto} />
                            </div>
                            <div>
                                {user.followed
                                    ? <button onClick={() => this.props.unfollow(user.id)}>follow</button>
                                    : <button onClick={() => this.props.follow(user.id)}>unfollow</button>}
                            </div>
                        </span>
                        <span>
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
}
export default UsersClass;