import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
<<<<<<< HEAD
import state from './redux/store';
import store, {AddPost, PostChange, addMessage, MessageChange} from './redux/store';


 let reRender=(state)=>{

    ReactDOM.render(<App APPstate={store.getState()} 
          
          dispatch={store.dispatch.bind(store)}
         
         />, document.getElementById('root'));
    }
     reRender(store.getState())
     store.subscribe(reRender)
=======

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
>>>>>>> ea8fe3532ddd7b36e8bcee1047a16417e7a155d8
serviceWorker.unregister();
