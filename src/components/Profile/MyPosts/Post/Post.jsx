import React, { Component } from 'react';
import classes from './Post.module.css'
import { tsPropertySignature } from '@babel/types';

const Post = (props) => {
    return (


        <div className={classes.item}>
            <img src="https://i.pinimg.com/236x/61/7c/08/617c08db66249363967838302881b351.jpg" alt="" />
    {props.message}
                    <div>
    <span>{props.liCounts}</span>
            </div>
        </div>





    )

}


export default Post;