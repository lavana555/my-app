import React, {Component} from 'react';
import classes from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {

//debugger;
    return (

        <header className={classes.header}>
            <img src='https://i.pinimg.com/236x/2a/ca/23/2aca2374046eaf3846684ffea5b80fc3.jpg'/>
    <div className={classes.loginBlock}>
        {props.isAuth?<NavLink to={'/login'}>{props.login}</NavLink> :<NavLink to={'/login'}>LOGIN</NavLink>  }
        {/*<span>{props.profile.lookingForAJobDescription}</span>*/}
        {/*<img src={props.profile.photos.small} />*/}
    </div>
        </header>
    )
}


export default Header;