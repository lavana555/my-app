import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './redux/redux-store';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';


setInterval(()=>{
    store.dispatch({type:"FAKE"})
},1000)




// let h1= document.createElement("h1");
// h1.innerHTML="HELLO"
// document.querySelector("body").appendChild(h1);




ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
            {/* <App state={state} dispatch={store.dispatch.bind(store)} store={store}/> */}
         </Provider>  </BrowserRouter>
, document.getElementById('root'));

serviceWorker.unregister();
