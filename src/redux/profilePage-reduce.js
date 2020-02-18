import {UserAPI} from "../api/api";

const ADDPOST='ADD-POST';
const CHANGEPOST='NEW-POST-CHANGE'
const SETUSERPROFILE='SET_USER'



export const actionPostAdd=()=>({type:ADDPOST })
export const actionPOstChange=(NewText)=>({type: CHANGEPOST, newpostschange:NewText})
export const setUserProfile=(profile)=>({type:SETUSERPROFILE,profile})


export const GetUserId=(userId)=>{
    return (dispatch)=>{

        UserAPI.getUserId(userId).then(data => {
            dispatch(setUserProfile(data))
        })
    }
}


let initState={
  messageEls: [
    { message: "hi did you want", liCounts: '5', id: 1 },
    { message: "what are you doin now", liCounts: '55', id: 2 }
  ],
  newPostText: "it kamasutra",
    profile:null
}

export const ProfilePageReduce=(state=initState,action)=>{
 //debugger;


 switch (action.type) {
  case ADDPOST:
    let newpost = {
            message: state.newPostText,
            liCounts: 5,
            id: 3
          }
    return {
      ...state, messageEls: [...state.messageEls, newpost], newPostText: ''
     
    }
  case CHANGEPOST:
   return {
     ...state, newPostText: action.newpostschange
   }
     case   SETUSERPROFILE:
         return {
             ...state, profile: action.profile
         }
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