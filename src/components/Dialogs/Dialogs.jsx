import React from 'react';
import classes from './Dialogs.module.css'
import { NavLink } from 'react-router-dom';
 import DialogItem from './DialogItem';
 import Message from './Message';
import { actionAddMessage, actionMessageChange } from '../../redux/messagesPage-reduce';



const Dialogs = (props) => {
    let taskdialogElements = props.dialogElements.map(dialogElement => <DialogItem name={dialogElement.name} id={dialogElement.id} />)
    let taskmessageElements =props.messageElements.map(messageElement => <Message message={messageElement.message} />)
    let NewMessage=React.createRef();
   let onaddMessage=()=>{
        props.dispatch(actionAddMessage())
    }

let onMessageChange=()=>{
    let  newChangeMessage=NewMessage.current.value
    props.dispatch(actionMessageChange(newChangeMessage))
}

    return (
        <div className={classes.Dialogs}>
            <div className={classes.Dialog + ' ' + classes.active}>

                {taskdialogElements}
            </div>
            <div className={classes.Messages}>
                {taskmessageElements}
                <textarea ref={NewMessage}  
            value={props.APPstate.profilePage.newMessageText}
            onChange={onMessageChange}
            >
            </textarea>
            <button onClick={onaddMessage}>Add</button>
            </div>
           
        </div>


    )

}
export default Dialogs;