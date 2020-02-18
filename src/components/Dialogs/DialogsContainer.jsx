import React from 'react';
import {actionAddMessage, actionMessageChange} from '../../redux/messagesPage-reduce';
import Dialogs from './Dialogs';
import {connect} from 'react-redux'


let MapDispatchToProps = (dispatch) => {
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
let MapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage,
        isAuth:state.auth.isAuth
    }
}


const DialogsContainer = connect(MapStateToProps, MapDispatchToProps)(Dialogs);

export default DialogsContainer;