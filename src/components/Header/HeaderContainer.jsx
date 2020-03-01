import React, {Component} from 'react';
import classes from './Header.module.css'
import {NavLink} from "react-router-dom";
import {connect} from 'react-redux'
import Header from "./Header";
import * as axios from "axios";
import {Auth, LogOutThnuk, setAuthUserData, setUserProfileHeader} from "../../redux/Auth-reduce";


class HeaderContainer extends React.Component {


    // componentDidMount() {
    //     this.props.Auth()
    // }

    onLoginOut = () => {
        this.props.LogOutThnuk()
    }


    render = () => {
        return (
            <Header {...this.props} profile={this.props.profile} LoginOut={this.onLoginOut}/>
        )
    }
}

let mapStateToProps = (state) => {
    //debugger;
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        photo: state.auth.photo
    }
}

export default connect(mapStateToProps, {
    setAuthUserData,
    setUserProfileHeader,
    // Auth,
    LogOutThnuk
})(HeaderContainer);