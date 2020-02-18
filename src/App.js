import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';

import Dialogs from './components/Dialogs/Dialogs';
import Friends from './components/Friends/Friends';
import { Route, BrowserRouter } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login"




const App = (props) => {
    return (
         <div className='app-wrapper'>
        <HeaderContainer />
        {/* <Navbar sitebar={props.state.sitebarPage.sitebar} /> */}
        {/* <Navbar store={props.store} /> */}
        <Navbar  />
       <div className='app-wrapper-content'>
          {/* <Route path="/Profile" render={() => <Profile  store={props.store}/>} />
          <Route path="/Dialogs" render={() => < DialogsContainer store={props.store} />} /> */}
           <Route path="/profile/:userId?" render={() => <ProfileContainer  />} />
           <Route path="/Users" render={() =><UsersContainer/>} />
          <Route path="/Dialogs" render={() => < DialogsContainer  />} />
           <Route path="/Login" render={() => <Login />} />
          <Route path="/Friends" render={() => < Friends friendsElements={props.state.sitebarPage.sitebar} />} />
          
          </div>
      </div>
  
  );
}



export default App;


