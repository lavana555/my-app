import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import state from './redux/store';
import store, {AddPost, PostChange, addMessage, MessageChange} from './redux/store';


 let reRender=(state)=>{

    ReactDOM.render(<App APPstate={store.getState()} 
          
          dispatch={store.dispatch.bind(store)}
         
         />, document.getElementById('root'));
    }
     reRender(store.getState())
     store.subscribe(reRender)
serviceWorker.unregister();
