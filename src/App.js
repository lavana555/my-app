import React, {Component} from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Friends from './components/Friends/Friends';
import {Route, BrowserRouter, withRouter} from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login"
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/App-reduce";
import Preloader from "./components/common/preloader/Preloader";


class App extends Component {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.init) {
            return <Preloader/>
        }
        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                {/* <Navbar sitebar={props.state.sitebarPage.sitebar} /> */}
                {/* <Navbar store={props.store} /> */}
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
                    <Route path="/Users" render={() => <UsersContainer/>}/>
                    <Route path="/Dialogs" render={() => < DialogsContainer/>}/>
                    <Route path="/Login" render={() => <Login/>}/>
                    <Route path="/Friends"
                           render={() => < Friends friendsElements={this.props.state.sitebarPage.sitebar}/>}/>
                </div>
            </div>

        );

    }
}

//
let mapStateToProps = (state) => {
    return {
        init: state.init.initialized
    }

}

export default compose(withRouter,
    connect(mapStateToProps, {initializeApp}))
(App)



