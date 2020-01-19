import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './redux/redux-store';
import { BrowserRouter } from 'react-router-dom';


 let reRender=(state)=>{

    ReactDOM.render(
<BrowserRouter>
         <App state={state} dispatch={store.dispatch.bind(store)} store={store}/>
         
         </BrowserRouter>, document.getElementById('root'));
    }
     reRender(store.getState())
     store.subscribe(()=>{
         
          let state=store.getState()
            reRender(state)
     })
serviceWorker.unregister();
