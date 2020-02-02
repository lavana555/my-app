import React, { Component } from 'react';
import { tsPropertySignature } from '@babel/types';
import classes from './Users.module.css'
import * as axios from 'axios';
import Userphoto from './../../assets/images/User.png'


class UsersClass extends React.Component {
        
componentDidMount(){


    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
        this.props.setusers(response.data.items)
        this.props.setTotalUsersCount(response.data.totalCount)
    })
}
 
onPageChged=(p)=>{
    this.props.pageChange(p)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`).then(response => {
        this.props.setusers(response.data.items)
    })
}
    
    render = () => {

        let pagesCount=Math.ceil(this.props.totalUsersCount/this.props.pageSize);
        let pages=[];
        for(let i=1;i<=pagesCount;i++){
            pages.push(i);
        }

        return (
            <div >
                {pages.map(p=>{
                return<span onClick={()=>this.onPageChged(p)} className={this.props.currentPage===p && classes.selectedPage}>{p}</span>   
                })}
               
                
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