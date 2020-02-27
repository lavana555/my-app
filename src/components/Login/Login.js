import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControl/FormsControls";
import {required} from "../utils/validators/validators";


const LoginForm = (props) => {
    //  const {handleSubmit}=props
    return (
        <form onSubmit={props.handleSubmit}>
            <div>

                <Field placeholder={"your login"} name={"login"} component={Input} type="text"
                       validate={[required]}
                />
            </div>
            <div>
                <Field placeholder={"your password"} name={"password"} component={Input} type="text"
                       validate={[required]}
                />
            </div>
            <div>
                <Field component={Input} name={"rememberme"} type={"checkbox"}
                       validate={[required]}
                />remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

export const Login = (props) => {

    const onSubmit = (formData) => {
        console.log(formData)
        this.props.onSubmit(formData)

    }

    return (
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}




export default Login;

