import React from 'react';
import {actionAddMessage, actionMessageChange} from '../../redux/messagesPage-reduce';
import Dialogs from './Dialogs';
import {connect} from 'react-redux'
import {Redirect} from "react-router-dom";
import {WithRedirectComponent} from "../Hoc/WithRedirectComponent";
import {compose} from "redux";


let MapDispatchToProps = (dispatch) => {
    return {
        addMessage: (newMessagePost) => {
            let action = actionAddMessage(newMessagePost)
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
    }
}

export default compose(
    connect(MapStateToProps, MapDispatchToProps),
    WithRedirectComponent)(Dialogs)

