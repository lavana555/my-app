 import React, { Component } from 'react';
 import classes from './DialogItem.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    let pathDialoItem = "/DialogItem/" + props.id
    return (
        <div className={classes.Dialog}>
        
            <NavLink to={pathDialoItem}>{props.name}</NavLink>
            <div className={classes.item}> 
            <img src="https://i.pinimg.com/236x/61/7c/08/617c08db66249363967838302881b351.jpg" alt="" />
            </div>
             </div>
    )
}


export default DialogItem