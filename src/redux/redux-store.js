import { createStore, combineReducers } from "redux";
import ProfilePageReduce from "./profilePage-reduce";
import MessagesPageReduce from "./messagesPage-reduce";
import SiteBarReduce from "./sitebar-reduce";
import UsersPageReduce from "./UsersPage-reduce";
import AuthReduce from "./Auth-reduce";


let reducerStore=combineReducers({
    profilePage:ProfilePageReduce,
    messagesPage:MessagesPageReduce,
    sitebarPage:SiteBarReduce,
    usersPage:UsersPageReduce,
    auth:AuthReduce

})


let store=createStore(reducerStore);



export default store;