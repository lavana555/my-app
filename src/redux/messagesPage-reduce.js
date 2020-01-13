const ADDMESSAGE='ADD-MESSAGE'
const NEWMESSAGECHANGE='NEW-MESSAGE-CHANGE'

export const actionAddMessage=()=>({type:ADDMESSAGE})
export const actionMessageChange=(newChangeMessage)=>({type:NEWMESSAGECHANGE,newMessageChange:newChangeMessage})

export const MessagesPageReduce=(state,action)=>{
    if (action.type===ADDMESSAGE) {
        let newMessagePost = {
          message: state.newMessageText,
          id: 5
        }
        state.newMessageText = ''
      return  state.messageElements.push(newMessagePost)
        
       
  
      }else if (action.type===NEWMESSAGECHANGE){
    return    state.newMessageText =action.newMessageChange
    
  
      }
return state;
}
export default MessagesPageReduce