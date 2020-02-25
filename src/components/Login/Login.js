import React from 'react';
import {Field, reduxForm} from "redux-form";


const LoginForm = (props) => {
  //  const {handleSubmit}=props
    return (
        <form onSubmit={props.handleSubmit}>
            <div>

                <Field placeholder={"your login"}  name={"login"} component={"input"} type="text"/>
            </div>
            <div>
                <Field placeholder={"your password"} name={"password"} component={"input"} type="text"/>
            </div>
            <div>
                <Field component={"input"} name={"rememberme"} type={"checkbox"}/>remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form:'login'})(LoginForm)

export const Login = (props) => {

const onSubmit=(formData)=>{
    console.log(formData)
}

    return (
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}


export default Login;