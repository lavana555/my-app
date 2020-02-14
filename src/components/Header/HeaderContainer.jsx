import React, {Component} from 'react';
import classes from './Header.module.css'
import {NavLink} from "react-router-dom";
import {connect} from 'react-redux'
import Header from "./Header";
import * as axios from "axios";
import {setAuthUserData, setUserProfileHeader} from "../../redux/Auth-reduce";
import {setUserProfile} from "../../redux/profilePage-reduce";

class HeaderContainer extends React.Component {


    componentDidMount() {
        // debugger;
        // let userId=this.props.match.params.userId
        // if (!userId) {
        //     userId=2
        // }
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,{withCredentials:true}).then(response => {
         //   debugger;
            if(response.data.resultCode===0) {
                let {id,email,login}=response.data.data
                this.props.setAuthUserData(id,email,login)
                 axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+ 5182).then(response => {
                    // debugger;
                     this.props.setUserProfileHeader(response.data)
                 })
            }
        })
    }


    render = () => {
        return (
            <Header {...this.props}  profile={this.props. profile} />
            // <header className={classes.header}>
            //     <img src='https://i.pinimg.com/236x/2a/ca/23/2aca2374046eaf3846684ffea5b80fc3.jpg'/>
            //     <div className={classes.loginBlock}>
            //         <NavLink to={'/login'}>Login</NavLink>
            //     </div>
            // </header>
        )
    }
}
 let mapStateToProps=(state)=>{
    //debugger;
    return{
isAuth: state.auth.isAuth,
        login:state.auth.login,
         profile: state.profilePage.profile
    }
 }
//     return{
//         id:state.auth.id,
//         login:state.auth.login,
//         mail:state.auth.mail
//     }
// }
//export default HeaderContainer
 export default connect(mapStateToProps,{setAuthUserData,
     setUserProfileHeader
 })(HeaderContainer);