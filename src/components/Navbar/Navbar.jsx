import React, { Component } from 'react';
import classes from './Navbar.module.css';
<<<<<<< HEAD
import { NavLink } from 'react-router-dom';
import Friend from './..//Friends/Friend';



const Navbar = (props) => {
    //  let taskmessageEls = props.sitebar.map(st => <Friends name={st.name} liCounts={st.id} />)
    let tasksitebars = props.sitebar.map(t => <Friend name={t.name} />)
    return (
        <nav className={classes.nav}>

            <div className={classes.item}>
                <NavLink to="/Profile" activeClassName={classes.activeLink}> Profile</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/Dialogs" activeClassName={classes.activeLink}>Message</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/News" activeClassName={classes.activeLink}>News</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/Music" activeClassName={classes.activeLink}>Music</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="Settings" activeClassName={classes.activeLink}>Settings</NavLink>
            </div>

            <div className={classes.item}>
                <NavLink to="Friends" activeClassName={classes.activeLink}>Friends</NavLink>
                <div className={classes.friendbar}>
                {tasksitebars}
                </div>
              </div>

        </nav>
=======


const Navbar = () => {
    return (<nav className={classes.nav}>
        
        <div className={classes.item}>
            <a> Profile</a>
        </div>
        <div className={classes.item}>
            <a>Message</a>
        </div>
        <div className={classes.item}>
            <a>news</a>
        </div>
        <div className={classes.item}>
            <a>Music</a>
        </div>
        <div className={classes.item}>
            <a>Settings</a>
        </div>
    </nav>
>>>>>>> ea8fe3532ddd7b36e8bcee1047a16417e7a155d8


    )

}


export default Navbar;