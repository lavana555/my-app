import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Friends from './components/Friends/Friends';
import { Route, BrowserRouter } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';




const App = (props) => {
    return (
         <div className='app-wrapper'>
        <Header />
        {/* <Navbar sitebar={props.state.sitebarPage.sitebar} /> */}
        {/* <Navbar store={props.store} /> */}
        <Navbar  />
       <div className='app-wrapper-content'>
          {/* <Route path="/Profile" render={() => <Profile  store={props.store}/>} />
          <Route path="/Dialogs" render={() => < DialogsContainer store={props.store} />} /> */}
           <Route path="/Profile" render={() => <Profile  />} />
          <Route path="/Dialogs" render={() => < DialogsContainer  />} />
          <Route path="/Friends" render={() => < Friends friendsElements={props.state.sitebarPage.sitebar} />} />
          
          </div>
      </div>
  
  );
}



export default App;


