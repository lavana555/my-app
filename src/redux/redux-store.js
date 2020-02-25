import {createStore, combineReducers, applyMiddleware} from "redux";
import ProfilePageReduce from "./profilePage-reduce";
import MessagesPageReduce from "./messagesPage-reduce";
import SiteBarReduce from "./sitebar-reduce";
import UsersPageReduce from "./UsersPage-reduce";
import AuthReduce from "./Auth-reduce";
import thunkMiddleware from "redux-thunk"
import { reducer as formReducer } from 'redux-form'



let reducerStore=combineReducers({
    profilePage:ProfilePageReduce,
    messagesPage:MessagesPageReduce,
    sitebarPage:SiteBarReduce,
    usersPage:UsersPageReduce,
    auth:AuthReduce,
    form:formReducer

})


let store=createStore(reducerStore,applyMiddleware(thunkMiddleware));



export default store;