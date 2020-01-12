import React, { Component } from 'react';
import classes from './Dialogs.module.css';


const Message = (props) => {
    return (
        <div className={classes.Message}>{props.message}</div>
    )
}



export default Message