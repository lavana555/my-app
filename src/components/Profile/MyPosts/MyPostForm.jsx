import React from 'react';
import {Field, reduxForm} from "redux-form";


const PostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"your mesage"} name={"newPostBody"} component={"textarea"} type={"text"} />
            </div>
            <div>
                <button>Add</button>
            </div>
        </form>
    )


}
const MyPostReduxFormReduxForm=reduxForm({form:'mypost'})(PostForm)
export const MyPostForm = (props) => {
    const onSubmit=(formData)=>{
        console.log(formData)
        this.props.onSubmit(formData)
    }

    return (
        <div>
            <h1>MyPost </h1>
            <MyPostReduxFormReduxForm onSubmit={onSubmit}/>
        </div>
    )

}
