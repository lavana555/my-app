import {Authfunc, UserAPI} from "../api/api";
import * as axios from "axios";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SETUSERS = 'SETUSERS';
const PageChange = 'PageChange';
const TotalUsersCount = 'setTotalUsersCount';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLOWWING_PROGRESS='TOGGLE_IS_FOLOWWING_PROGRESS'

export const followsSucess = (userId) => ({type: FOLLOW, userId})
export const unfollowSucess = (userId) => ({type: UNFOLLOW, userId})
export const setusers = (users) => ({type: SETUSERS, users})
export const pageChange = (p) => ({type: PageChange, p})
export const setTotalUsersCount = (totalCount) => ({type: TotalUsersCount, totalCount})
export const setIsToggle = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleFollowingProgress=(isFetching,userId)=>({type:TOGGLE_IS_FOLOWWING_PROGRESS,isFetching,userId})


export const getUsers=(currentPage,pageSize)=>{
   return (dispatch)=> {
        dispatch(setIsToggle(true))
       dispatch(pageChange(currentPage))
        UserAPI.getUsersPage(currentPage, pageSize).then(data => {
            dispatch(setIsToggle(false))
            dispatch(setusers(data.items))
            dispatch(setTotalUsersCount(data.totalCount))
        })
    }

}

 const followUnfollow=async (dispatch,userid,apiMethod,acCreator)=>{

    dispatch(toggleFollowingProgress(true, userid))
    let responce=await apiMethod(userid)
    if (responce.data.resultCode === 0) {
        dispatch(acCreator(userid))
    }
    dispatch(toggleFollowingProgress(false, userid))



}


// export const follow=(userid)=>async (dispatch)=>{
//     let apiMethod= UserAPI.FollowUsers.bind(UserAPI)
//     let acCreator=followsSucess
//         dispatch(toggleFollowingProgress(true, userid))
//    let responce=await apiMethod(userid)
//             if (responce.data.resultCode === 0) {
//                 dispatch(acCreator(userid))
//             }
//             dispatch(toggleFollowingProgress(false, userid))
// }

export const follow=(userid)=> (dispatch)=>{
    let apiMethod=  UserAPI.FollowUsers.bind(UserAPI)
    let acCreator=followsSucess
    followUnfollow(dispatch,userid,apiMethod,acCreator)
}

export const unfollow=(userid)=> (dispatch)=>{
    let apiMethod=  UserAPI.UnFollowUsers.bind(UserAPI)
    let acCreator=unfollowSucess
    followUnfollow(dispatch,userid,apiMethod,acCreator)
}


// export const unfollow=(userid)=>async(dispatch)=>{
//
//     let apiMethod=UserAPI.UnFollowUsers.bind(UserAPI)
//     let acCreator=unfollowSucess
//         dispatch(toggleFollowingProgress(true, userid))
//       let responce=await apiMethod(userid)
//
//             if (responce.data.resultCode === 0) {
//                 dispatch(acCreator(userid))
//             }
//             dispatch(toggleFollowingProgress(false, userid))
// }


let initState = {
    users: [],
    pageSize: 15,
    totalUsersCount: 0,
    currentPage: 2,
    isFetching: true,
    isFolowwingProgres: [],
    fake:10

}


let caseFollowUnfollow=(state,action,bool)=> {
    return{
        ...state,
        users: state.users.map(user => {
            if (user.id === action.userId) {
                return {...user, followed: bool}
            }

            return user
        })
    }
}


export const UsersPageReduce = (state = initState, action) => {
    switch (action.type) {

        case "FAKE":
            return {
                ...state,
                fake:state.fake+1
            }

        // case FOLLOW:
        //     return {
        //         ...state,
        //         users: state.users.map(user => {
        //             if (user.id === action.userId) {
        //                 return {...user, followed: true}
        //             }
        //
        //             return user
        //         })
        //     }
        case FOLLOW:
            return  caseFollowUnfollow(state,action,true)

        case UNFOLLOW:
            return  caseFollowUnfollow(state,action,false)

        // case UNFOLLOW:
        //     return {
        //         ...state,
        //         users: state.users.map(user => {
        //             if (user.id === action.userId) {
        //                 return {...user, followed: false}
        //             }
        //
        //             return user
        //         })
        //
        //     }

        case SETUSERS:
            return {...state, users: action.users}
        case PageChange:
            return {...state, currentPage: action.p}
        case TotalUsersCount:
            return {...state, totalUsersCount: action.totalCount}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        case TOGGLE_IS_FOLOWWING_PROGRESS:
            return {
                ...state, isFolowwingProgres: action.isFetching
                    ? [...state.isFolowwingProgres, action.userId]
                    : state.isFolowwingProgres.filter(id => id != action.userId)
            }
        default:
            return state
    }

}
export default UsersPageReduce