import React, {Component} from 'react';
import classes from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {

    let LogOut = () => {
        props.LoginOut()
    }


//debugger;
    return (

        <header className={classes.header}>
            <img src='https://i.pinimg.com/236x/2a/ca/23/2aca2374046eaf3846684ffea5b80fc3.jpg'/>
            <div className={classes.loginBlock}>
                {props.isAuth

                    ?<>
                    <NavLink to={'/login'}>{props.login}</NavLink>
                        <button onClick={LogOut}>Log OUT</button>
                    </>
                    : <NavLink to={'/login'}>LOGIN</NavLink>}
                <img src={props.photo}/>

                {/*<button onClick={LogOut}>Log OUT</button>*/}
            </div>
        </header>
    )
}


export default Header;