import { createSelector } from 'reselect'
import {getUsers} from "./UsersPage-reduce";





export const userSelctor=(state)=>{
    return state.usersPage.users
}


export const userSuperSelector=createSelector(userSelctor,(users)=>{
   // debugger;
    return users.filter(u=>true)
})

export const pageSizeSelctor=(state)=>{
    return state.usersPage.pageSize
}

export const totalUsersCountSelctor=(state)=>{
    return state.usersPage.totalUsersCount
}

export const currentPageSelctor=(state)=>{
    return state.usersPage.currentPage
}

export const isFetchingSelctor=(state)=>{
    return state.usersPage.isFetching
}

export const isFolowwingProgresSelctor=(state)=>{
    return state.usersPage.isFolowwingProgres
}


