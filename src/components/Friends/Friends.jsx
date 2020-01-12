import React, { Component } from 'react';
//import classes from './Post.module.css'
import { tsPropertySignature } from '@babel/types';
import Friend from './Friend';


const Friends = (props) => {
    let taskfriends = props.friendsElements.map(t => <Friend name={t.name} />)

    return (


        <div >

            {taskfriends}

        </div>
    )
}
    export default Friends;