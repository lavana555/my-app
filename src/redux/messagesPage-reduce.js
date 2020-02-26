const ADDMESSAGE = 'ADD-MESSAGE'
const NEWMESSAGECHANGE = 'NEW-MESSAGE-CHANGE'

export const actionAddMessage = (newMessagePost) => ({type: ADDMESSAGE,newMessagePost})
export const actionMessageChange = (newChangeMessage) => ({type: NEWMESSAGECHANGE, newMessageChange: newChangeMessage})


let initSate = {
    dialogElements: [
        {name: "niki", id: 1},
        {name: "liza", id: 2},
        {name: "ira", id: 3},
        {name: "viktor", id: 4}
    ],
    messageElements: [
        {message: "HI1", id: 1},
        {message: "HI2", id: 2},
        {message: "HI3", id: 3},
        {message: "HI4", id: 4}
    ],
    newMessageText: "введите ваше сооsasssбщение"

}
export const MessagesPageReduce = (state = initSate, action) => {
    switch (action.type) {
        // case ADDMESSAGE:
        //     let newMessagePost = {
        //         message: state.newMessageText,
        //         id: 5
        //     }
        //     return {
        //         ...state, messageElements: [...state.messageElements, newMessagePost], newMessageText: ''
        //     }

        case ADDMESSAGE:
            let newMessagePost = action.newMessagePost

            return {
                ...state,
                messageElements: [...state.messageElements,{id:5, message:newMessagePost}]
            }


        case NEWMESSAGECHANGE:
            return {
                ...state, newMessageText: action.newMessageChange
            }
        default:
            return state;
    }
}
export default MessagesPageReduce