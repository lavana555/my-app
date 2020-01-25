import React from 'react';
import { actionAddMessage, actionMessageChange } from '../../redux/messagesPage-reduce';
import Dialogs from './Dialogs';
import {connect} from 'react-redux'



// const DialogsContainer = (props) => {

//     return (<StoreContext.Consumer>
//         {(store) => {
//             let state = store.getState();

//             let addMessage = () => {
//                 let action = actionAddMessage()
//                 store.dispatch(action)
//             }

//             let MessageChange = (newChangeMessage) => {

//                 let action = actionMessageChange(newChangeMessage)

//                 store.dispatch(action)
//             }
//             return <Dialogs MessageChange={MessageChange} addMessage={addMessage} messagesPage={state} />
//         }
//         }
//     </StoreContext.Consumer>

//     )
// }


let MapDispatchToProps=(dispatch) => {
    return {
        addMessage: () => {
            let action = actionAddMessage()
            dispatch(action)
        },

        MessageChange: (newChangeMessage) => {

            let action = actionMessageChange(newChangeMessage)

            dispatch(action)
        }

    }
}

let MapStateToProps=(state) => {
    return {
        messagesPage: state.messagesPage
    }
}



const DialogsContainer = connect(MapStateToProps, MapDispatchToProps)(Dialogs);

export default DialogsContainer;