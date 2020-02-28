import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControl/FormsControls";
import {required} from "../utils/validators/validators";
import {connect} from "react-redux";
import {LoginThunk} from "../../redux/Auth-reduce";
import {Redirect} from "react-router-dom";



const LoginForm = (props) => {
    //  const {handleSubmit}=props
    return (
        <form onSubmit={props.handleSubmit}>
            <div>

                <Field placeholder={"your login"} name={"email"} component={Input} type="text"
                       validate={[required]}
                />
            </div>
            <div>
                <Field placeholder={"your password"} name={"password"} component={Input} type="text"
                       validate={[required]}
                />
            </div>
            <div>
                <Field component={Input} name={"rememberMe"} type={"checkbox"}
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
        // console.log(formData)

         //props.onSubmit(formData)

        props.LoginThunk(formData.email, formData.password,formData.rememberMe )
    }
if (props.isAuth) return    <Redirect to={"/Profile"}/>
    return (
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

let mapStateToProps=(state)=>{
    return {
        isAuth: state.auth.isAuth
    }
}



export default connect(mapStateToProps, {LoginThunk})(Login);

