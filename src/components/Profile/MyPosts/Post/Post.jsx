import React, { Component } from 'react';
import classes from './Post.module.css'
<<<<<<< HEAD
import { tsPropertySignature } from '@babel/types';

const Post = (props) => {
=======

const Post = () => {
>>>>>>> ea8fe3532ddd7b36e8bcee1047a16417e7a155d8
    return (


        <div className={classes.item}>
            <img src="https://i.pinimg.com/236x/61/7c/08/617c08db66249363967838302881b351.jpg" alt="" />
            Post1
                    <div>
<<<<<<< HEAD
    <span>like {props.liCounts}</span>
     <span>{props.message}</span>
=======
                <span>like</span>
>>>>>>> ea8fe3532ddd7b36e8bcee1047a16417e7a155d8
            </div>
        </div>





    )

}


export default Post;