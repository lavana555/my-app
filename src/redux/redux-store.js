import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import ProfilePageReduce from "./profilePage-reduce";
import MessagesPageReduce from "./messagesPage-reduce";
import SiteBarReduce from "./sitebar-reduce";
import UsersPageReduce from "./UsersPage-reduce";
import AuthReduce from "./Auth-reduce";
import thunkMiddleware from "redux-thunk"
import { reducer as formReducer } from 'redux-form'
import AppReduce from "./App-reduce";



let reducerStore=combineReducers({
    profilePage:ProfilePageReduce,
    messagesPage:MessagesPageReduce,
    sitebarPage:SiteBarReduce,
    usersPage:UsersPageReduce,
    auth:AuthReduce,
    form:formReducer,
    init:AppReduce

})

     const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 const store = createStore(reducerStore,  composeEnhancers(applyMiddleware(thunkMiddleware)))




window.store=store

export default store;