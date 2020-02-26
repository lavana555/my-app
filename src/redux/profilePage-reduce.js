import {ProfileAPI, UserAPI} from "../api/api";
import {useReduxContext} from "react-redux/lib/hooks/useReduxContext";

const ADDPOST='ADD-POST';
const CHANGEPOST='NEW-POST-CHANGE'
const SETUSERPROFILE='SET_USER'
// const GETSTATUS="GET_STATUS"
const GETSTATUS2="GET_STATUS2"
const SETSTATUS="SET_STATUS"
// const ADDSTATUS="ADD_STATUS"



export const actionPostAdd=(newmessage)=>({type:ADDPOST,newmessage })
export const actionPOstChange=(NewText)=>({type: CHANGEPOST, newpostschange:NewText})
export const setUserProfile=(profile)=>({type:SETUSERPROFILE,profile})
export const GetUserProfile=(status)=>({type:GETSTATUS2,status})
export const SetUserStatusProfile=(status)=>({type:SETSTATUS,status})
// export const getStatus=(status)=>({type:GETSTATUS,status})
// export const addStatus=(status)=>({type:ADDSTATUS,status})


export const GetUserId=(userId)=>{
    return (dispatch)=>{

        UserAPI.getUserId(userId).then(data => {
            dispatch(setUserProfile(data))
        })
    }
}



export const GetUserStatus=(userId)=>{
   // debugger
    return(dispatch)=>{
        ProfileAPI.getStatus(userId).then(responce=>{
            dispatch(GetUserProfile(responce.data))
        })

    }
}

export const SetUserStatus=(status)=>{
   // debugger;
    return (dispatch)=>{
        ProfileAPI.setStatus(status).then(response=>{
            if (response.data.resultCode===0){
                dispatch(SetUserStatusProfile(status))
            }
        })
    }
}




let initState={
  messageEls: [
    { message: "hi did you want", liCounts: '5', id: 1 },
    { message: "what are you doin now", liCounts: '55', id: 2 }
  ],
  newPostText: "it kamasutra",
    profile:null,
    status:""
}

export const ProfilePageReduce=(state=initState,action)=>{
 //debugger;


 switch (action.type) {

     case ADDPOST:

      return {
          ...state, messageEls: [...state.messageEls, {message: action.newmessage, id:5,liCounts:5}],

      }


  case CHANGEPOST:
   return {
     ...state, newPostText: action.newpostschange
   }
     case   SETUSERPROFILE:
         return {
             ...state, profile: action.profile
         }
     // case GETSTATUS:
     //   return {  ...state,status:action.status
     //   }
     case GETSTATUS2:
         return {  ...state,status:action.status
         }

     case SETSTATUS:
       // debugger
         return {  ...state,status:action.status
         }


     // case ADDSTATUS:
     //     return {  ...state,status:action.status
     //     }
  default:
    return state
}
 
    // if (action.type===ADDPOST){
    //     let newpost = {
    //       message: state.newPostText,
    //       liCounts: 5,
    //       id: 3
    //     }
    //     state.newPostText = '';
    //   return  state.messageEls.push(newpost)
    //     // state.newPostText = '';
    //    }else if (action.type=== CHANGEPOST) {
    //      debugger
    //     return state.newPostText = action.newpostschange
    //    }
    //    return state;
}
    
    export default ProfilePageReduce