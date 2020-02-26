import React from 'react';
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import mapStateToProps from "react-redux/lib/connect/mapStateToProps";
import mapDispatchToProps from "react-redux/lib/connect/mapDispatchToProps";
import {UserAPI} from "../../api/api";
import {pageChange, setIsToggle, setTotalUsersCount, setusers} from "../../redux/UsersPage-reduce";


const LoginForm = (props) => {
    //  const {handleSubmit}=props
    return (
        <form onSubmit={props.handleSubmit}>
            <div>

                <Field placeholder={"your login"} name={"login"} component={"input"} type="text"/>
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


// const LoginThunk=(formData)=>{
//     return (dispatch)=> {
//
//         UserAPI.Loginfunc(formData).then(data => {
//             // dispatch(setTotalUsersCount(data.totalCount))
//         })
//     }
//
// }

export default Login;

// export default connect(mapStateToProps,mapDispatchToProps)(Login);