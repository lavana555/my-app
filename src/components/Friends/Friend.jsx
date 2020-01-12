import React, { Component } from 'react';
//import classes from './Post.module.css'
import { tsPropertySignature } from '@babel/types';
import classes from './../Dialogs/DialogItem.module.css';

const Friend = (props) => {

    return (
        <div  className={classes.Dialog}>
            <div className={classes.item}> 
            <img src="https://i.pinimg.com/236x/61/7c/08/617c08db66249363967838302881b351.jpg" alt="" />
            </div>
                    <div>
                <span>{props.name}</span>

            </div>
        </div>
    )
}

export default Friend;