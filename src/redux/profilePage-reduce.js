import {ProfileAPI, UserAPI} from "../api/api";
import {useReduxContext} from "react-redux/lib/hooks/useReduxContext";

const ADDPOST = 'ADD-POST';
const DELETEPOST = 'DELETE-POST';
const CHANGEPOST = 'NEW-POST-CHANGE'
const SETUSERPROFILE = 'SET_USER'

const GETSTATUS2 = "GET_STATUS2"
const SETSTATUS = "SET_STATUS"
// const ADDSTATUS="ADD_STATUS"


export const actionPostAdd = (newmessage) => ({type: ADDPOST, newmessage})
export const actionPostDelete = (id) => ({type: DELETEPOST, id})
export const actionPOstChange = (NewText) => ({type: CHANGEPOST, newpostschange: NewText})
export const setUserProfile = (profile) => ({type: SETUSERPROFILE, profile})
export const GetUserProfile = (status) => ({type: GETSTATUS2, status})
export const SetUserStatusProfile = (status) => ({type: SETSTATUS, status})


export const GetUserId = (userId) => async (dispatch)=>{
    // return (dispatch) => {
let data=await UserAPI.getUserId(userId)
        // UserAPI.getUserId(userId).then(data => {
            dispatch(setUserProfile(data))
        // })
    // }
}

// export const GetUserId = (userId) =>{
//     return (dispatch) => {
//    // let data= UserAPI.getUserId(userId)
//     UserAPI.getUserId(userId).then(data => {
//     dispatch(setUserProfile(data))
//      })
//      }
// }


export const GetUserStatus = (userId) => async (dispatch)=>{
    // debugger
    // return (dispatch) => {
    let responce=await  ProfileAPI.getStatus(userId)
        // ProfileAPI.getStatus(userId).then(responce => {
            dispatch(GetUserProfile(responce.data))
        // })

    // }
}

export const SetUserStatus = (status) => async (dispatch)=>{
    // debugger;
    // return (dispatch) => {
    let response=ProfileAPI.setStatus(status)
        // ProfileAPI.setStatus(status).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(SetUserStatusProfile(status))
            }
        // })
    // }
}


let initState = {
    messageEls: [
        {message: "hi did you want", liCounts: '5', id: 1},
        {message: "what are you doin now", liCounts: '55', id: 2}
    ],
    newPostText: "it kamasutra",
    profile: null,
    status: ""
}

 const ProfilePageReduce = (state = initState, action) => {

    switch (action.type) {

        case ADDPOST:
            return {
                ...state, messageEls: [...state.messageEls, {message: action.newmessage, id: 5, liCounts: 5}],
            }
        case DELETEPOST:
            return {
                ...state,
                messageEls: state.messageEls.filter(m=>m.id !=action.id)
            }

        case CHANGEPOST:
            return {
                ...state, newPostText: action.newpostschange
            }
        case   SETUSERPROFILE:
            return {
                ...state, profile: action.profile
            }
        case GETSTATUS2:
            return {
                ...state, status: action.status
            }

        case SETSTATUS:

            return {
                ...state, status: action.status
            }


        default:
            return state
    }


}

export default ProfilePageReduce