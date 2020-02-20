import React from 'react';
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";


let mapStateToPropsForRedirect = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export const WithRedirectComponent = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if (this.props.isAuth === false) return <Redirect to={"/Login"}/>
            return <Component {...this.props} />
        }


    }


     let WithAutRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)



return WithAutRedirectComponent
}



