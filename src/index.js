import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './redux/redux-store';
import {BrowserRouter} from 'react-router-dom';
// import  { Provider } from './StoreContext';
import {Provider} from 'react-redux';


//  let reRender=(state)=>{

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
            {/* <App state={state} dispatch={store.dispatch.bind(store)} store={store}/> */}
        </Provider>
    </BrowserRouter>, document.getElementById('root'));

serviceWorker.unregister();
