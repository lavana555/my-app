import {createStore, combineReducers, applyMiddleware} from "redux";
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


let store=createStore(reducerStore,applyMiddleware(thunkMiddleware));



export default store;