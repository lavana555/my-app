const ADDPOST='ADD-POST';
const CHANGEPOST='NEW-POST-CHANGE'



export const actionPostAdd=()=>({type:ADDPOST })
export const actionPOstChange=(NewText)=>({type: CHANGEPOST, newpostschange:NewText})



export const ProfilePageReduce=(state,action)=>{
    if (action.type===ADDPOST){
        let newpost = {
          message: state.newPostText,
          liCounts: 5,
          id: 3
        }
        state.newPostText = '';
      return  state.messageEls.push(newpost)
        // state.newPostText = '';
       }else if (action.type=== CHANGEPOST) {
        return state.newPostText = action.newpostschange
       }
       return state;
    }
    export default ProfilePageReduce