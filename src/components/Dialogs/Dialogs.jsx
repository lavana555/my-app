import React from 'react';
import classes from './Dialogs.module.css'
import { NavLink } from 'react-router-dom';
 import DialogItem from './DialogItem';
 import Message from './Message';


const Dialogs = (props) => {
    let taskdialogElements = props.dialogElements.map(dialogElement => <DialogItem name={dialogElement.name} id={dialogElement.id} />)
    let taskmessageElements =props.messageElements.map(messageElement => <Message message={messageElement.message} />)
    let NewMessage=React.createRef();
   let onaddMessage=()=>{
     //let  newAddMessage=NewMessage.current.value
        //props.addMessage(newAddMessage)
        props.addMessage()
    }

let onMessageChange=()=>{
    let  newChangeMessage=NewMessage.current.value
    props.MessageChange(newChangeMessage)
}

    return (
        <div className={classes.Dialogs}>
            <div className={classes.Dialog + ' ' + classes.active}>

                {taskdialogElements}
            </div>
            <div className={classes.Messages}>
                {taskmessageElements}
            </div>
            <textarea ref={NewMessage}  
            value={props.APPstate.newMessageText}
            onChange={onMessageChange}
            >
            </textarea>
            <button onClick={onaddMessage}>Add</button>
        </div>


    )

}
export default Dialogs;