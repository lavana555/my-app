import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
<<<<<<< HEAD
import Dialogs from './components/Dialogs/Dialogs';
import Friends from './components/Friends/Friends';
import { Route, BrowserRouter } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
// import classes from '*.module.css';






const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar sitebar={props.APPstate.sitebar} />


        <div className='app-wrapper-content'>
          {/* <Route  path="/Dialogs" component={Dialogs} /> */}
          <Route path="/Profile" render={() => <Profile 
            APPstate={props.APPstate}
            messageEls={props.APPstate.messagesPage.messageEls}
            dispatch={props.dispatch}
          />} />

          <Route path="/Dialogs" render={() => < Dialogs
            dialogElements={props.APPstate.profilePage.dialogElements}
            messageElements={props.APPstate.profilePage.messageElements}
            APPstate={props.APPstate}
            dispatch={props.dispatch}
          />} />

          <Route path="/Friends" render={() => < Friends
            friendsElements={props.APPstate.sitebar} />} />

          {/* <Route   path="/News" component={News}/>
        <Route   path="/Music" component={Music}/>
        <Route   path="/Settings" component={Settings}/> */}
          {/* <Route   path="/Friends" render={()=>Friends}/> */}



        </div>
      </div>
    </BrowserRouter>
=======



const App = () => {
  return (
    <div className='app-wrapper'>
     <Header />
      <Navbar />    
      <Profile />
    </div>
>>>>>>> ea8fe3532ddd7b36e8bcee1047a16417e7a155d8
  );
}



<<<<<<< HEAD
=======

>>>>>>> ea8fe3532ddd7b36e8bcee1047a16417e7a155d8
export default App;


