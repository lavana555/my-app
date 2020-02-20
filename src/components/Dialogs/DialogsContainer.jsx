import React from 'react';
import {actionAddMessage, actionMessageChange} from '../../redux/messagesPage-reduce';
import Dialogs from './Dialogs';
import {connect} from 'react-redux'
import {Redirect} from "react-router-dom";
import {WithRedirectComponent} from "../Hoc/WithRedirectComponent";


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

let AutRedirectComponent = WithRedirectComponent(Dialogs)

// let MapStatePropsForRedirect=(state)=>{
//     return{
//         isAuth: state.auth.isAuth
//     }
// }
//
// AutRedirectComponent=connect(MapStatePropsForRedirect)(AutRedirectComponent)


let MapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage,

    }
}




const DialogsContainer = connect(MapStateToProps, MapDispatchToProps)(AutRedirectComponent);

export default DialogsContainer;