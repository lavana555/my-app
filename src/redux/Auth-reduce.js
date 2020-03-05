import {UserAPI} from "../api/api";
import {stopSubmit} from 'redux-form'

const SET_USER_DATA = 'SET_USER_DATA';
const UNFOLLOW = 'UNFOLLOW';
const SETUSERPROFILE = 'SETUSERPROFILE'
const LOGINUSER = 'LOGINUSER'

export const setAuthUserData = (id, email, login, isAuth) => ({
    type: SET_USER_DATA,
    payload: {id, email, login, isAuth}
})
export const setUserProfileHeader = (photo) => ({type: SETUSERPROFILE, photo})
export const LoginUserAC = (email, password, rememberMe) => ({type: LOGINUSER, data: {email, password, rememberMe}})
//export const unfollow = (userId) => ({type: UNFOLLOW, userId})
//export const setusers = (users) => ({type: SETUSERS, users})
//export const pageChange = (p) => ({type: PageChange, p})
//export const setTotalUsersCount = (totalCount) => ({type: TotalUsersCount, totalCount})
//export const setIsToggle = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})


export const Auth = () => async (dispatch) => {
    let data = await UserAPI.Authfunc()
    // return  UserAPI.Authfunc().then(data => {
    if (data.resultCode === 0) {
        let {id, email, login} = data.data
        dispatch(setAuthUserData(id, email, login, true))
    }
    //})
}


export const LoginThunk = (email, password, rememberMe) => async (dispatch) => {

    // return (dispatch) => {
let res=await  UserAPI.LoginUsers(email, password, rememberMe)

            if (res.data.resultCode === 0) {
                dispatch(Auth())
            } else {
                debugger;
                console.log(res)
                let message = res.data.messages.length > 0 ? res.data.messages[0] : 'some error'
                dispatch(stopSubmit('login', {_error: message}))
            }

}


export const LogOutThnuk = () =>async (dispatch)=>{


    let res=await UserAPI.LogOut()

            if (res.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
}


let initState = {

    id: null,
    email: null,
    login: null,
    isAuth: false,
    photo: null
}

export const AuthReduce = (state = initState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            //  debugger;
            return {
                ...state,
                ...action.payload,
                // isAuth: true
            }
        case   SETUSERPROFILE:
            //debugger;
            return {
                ...state, photo: action.photo
            }
        default:
            return state
    }
}
export default AuthReduce