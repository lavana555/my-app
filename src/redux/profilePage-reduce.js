const ADDPOST='ADD-POST';
const CHANGEPOST='NEW-POST-CHANGE'



export const actionPostAdd=()=>({type:ADDPOST })
export const actionPOstChange=(NewText)=>({type: CHANGEPOST, newpostschange:NewText})

let initState={
  messageEls: [
    { message: "hi did you want", liCounts: '5', id: 1 },
    { message: "what are you doin now", liCounts: '55', id: 2 }
  ],
  newPostText: ""
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