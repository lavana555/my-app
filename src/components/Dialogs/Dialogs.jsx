import React from 'react';
import classes from './Dialogs.module.css'
import {NavLink, Redirect} from 'react-router-dom';
import DialogItem from './DialogItem';
import Message from './Message';
import {actionAddMessage, actionMessageChange} from '../../redux/messagesPage-reduce';
import {Dialog} from "./Dialog";
import {Field, reduxForm} from "redux-form";
import {TextArea} from "../common/FormsControl/FormsControls";
import {MaxLengthCreator, required} from "../utils/validators/validators";



const    maxLength=MaxLengthCreator(5)

const Dialogs = (props) => {

    let taskdialogElements = props.messagesPage.dialogElements.map(dialogElement => <DialogItem
        name={dialogElement.name} id={dialogElement.id}/>)
    let taskmessageElements = props.messagesPage.messageElements.map(messageElement => <Message
        message={messageElement.message}/>)

    let addNewMessage = (values) => {
        //alert('yo')
        props.addMessage(values.newMessagePost)
    }


    if (props.isAuth === false) return <Redirect to={"/Login"}/>

    return (
        <div className={classes.Dialogs}>
            <div className={classes.Dialog + ' ' + classes.active}>
                {taskdialogElements}
            </div>
            <div className={classes.Messages}>
                {taskmessageElements}
            </div>
            <DialogReduxForm onSubmit={addNewMessage}/>
        </div>


    )

}


const DialogForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"your ghhgmessage"} name={"newMessagePost"} component={TextArea} type={"text"}
                       validate={[required, maxLength]}
                />
            </div>
            <div>
                <button>Add</button>
            </div>
        </form>
    )
 }
const DialogReduxForm = reduxForm({form: 'dialog'})(DialogForm)


export default Dialogs;