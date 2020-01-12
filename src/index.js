import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import state, { subscribe } from './redux/state';
import {AddPost, PostChange, addMessage, MessageChange} from './redux/state';
//import { reRender } from './render';

 let reRender=(state)=>{

    ReactDOM.render(<App APPstate={state}  AddPost={AddPost}  
         PostChange={PostChange} 
         addMessage={addMessage}
         MessageChange={MessageChange}
         />, document.getElementById('root'));
    }
     reRender(state)
     subscribe(reRender)
serviceWorker.unregister();
