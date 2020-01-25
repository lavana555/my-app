const ADDMESSAGE='ADD-MESSAGE'
const NEWMESSAGECHANGE='NEW-MESSAGE-CHANGE'

export const actionAddMessage=()=>({type:ADDMESSAGE})
export const actionMessageChange=(newChangeMessage)=>({type:NEWMESSAGECHANGE,newMessageChange:newChangeMessage})


let initSate={
  dialogElements: [
    { name: "niki", id: 1 },
    { name: "liza", id: 2 },
    { name: "ira", id: 3 },
    { name: "viktor", id: 4 }
  ],
  messageElements: [
    { message: "HI1", id: 1 },
    { message: "HI2", id: 2 },
    { message: "HI3", id: 3 },
    { message: "HI4", id: 4 }
  ],
  newMessageText: "введите ваше сооsasssбщение"

}

export const MessagesPageReduce=(state=initSate,action)=>{
 // debugger;
  // let copyState={...state};
  //  copyState.messageElements=[...state.messageElements];
  //  copyState.
   
//  let copyState={
//     ...state,
//     messageElements:[...state.messageElements]

//  }
   switch (action.type) {
     case ADDMESSAGE:
    let newMessagePost ={
      message:state.newMessageText,
      id: 5
    }
    return {
       ...state,messageElements:[...state.messageElements,newMessagePost],newMessageText:''
    }
    case NEWMESSAGECHANGE:
      return {
        ...state, newMessageText :action.newMessageChange
      }
      default:
        return state;
    }
  //   case ADDMESSAGE:
  //     let newpost = {
  //             message: state.newPostText,
  //             liCounts: 5,
  //             id: 3
  //           }
  //     return {
  //       ...state, messageEls: [...state.messageEls, newpost], newPostText: ''
       
  //     }
  //   case CHANGEPOST:
  //    return {
  //      ...state, newPostText: action.newpostschange
  //    }
  //   default:
  //     return state
  // }




 // debugger;
//     if (action.type===ADDMESSAGE) {
//         let newMessagePost ={
//           message:state.newMessageText,
//           id: 5
//         }
//         state.newMessageText = ''
//       return  state.messageElements.push(newMessagePost)
        
       
  
//       }else if (action.type===NEWMESSAGECHANGE){
//     return    state.newMessageText =action.newMessageChange
    
  
//       }
// return state;
}
export default MessagesPageReduce