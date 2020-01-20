import React, { Component } from 'react';
import classes from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import Friend from './..//Friends/Friend';



const Navbar = (props) => {
    //  let taskmessageEls = props.sitebar.map(st => <Friends name={st.name} liCounts={st.id} />)
    //debugger;

    /// подключил сторе контекст и отключил передачу ъльентов в навбар
  //  let state=props.store.getState().sitebarPage
 //   let tasksitebars = state.sitebar.map(t => <Friend name={t.name} />)
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
                {/* {tasksitebars} */}
                </div>
              </div>

        </nav>


    )

}


export default Navbar;