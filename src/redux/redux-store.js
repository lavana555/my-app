import {createStore, combineReducers, applyMiddleware} from "redux";
import ProfilePageReduce from "./profilePage-reduce";
import MessagesPageReduce from "./messagesPage-reduce";
import SiteBarReduce from "./sitebar-reduce";
import UsersPageReduce from "./UsersPage-reduce";
import AuthReduce from "./Auth-reduce";
import thunkMiddleware from "redux-thunk"


let reducerStore=combineReducers({
    profilePage:ProfilePageReduce,
    messagesPage:MessagesPageReduce,
    sitebarPage:SiteBarReduce,
    usersPage:UsersPageReduce,
    auth:AuthReduce

})


let store=createStore(reducerStore,applyMiddleware(thunkMiddleware));



export default store;