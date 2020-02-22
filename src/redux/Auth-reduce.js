import {UserAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';
const UNFOLLOW = 'UNFOLLOW';
const SETUSERPROFILE = 'SETUSERPROFILE'

export const setAuthUserData = (id, email, login) => ({type: SET_USER_DATA, data: {id, email, login}})
export const setUserProfileHeader = (photo) => ({type: SETUSERPROFILE, photo})
//export const unfollow = (userId) => ({type: UNFOLLOW, userId})
//export const setusers = (users) => ({type: SETUSERS, users})
//export const pageChange = (p) => ({type: PageChange, p})
//export const setTotalUsersCount = (totalCount) => ({type: TotalUsersCount, totalCount})
//export const setIsToggle = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})


export const Auth = () => {
    return (dispatch) => {
        UserAPI.Authfunc().then(data => {
            if (data.resultCode === 0) {
                let {id, email, login} = data.data
                dispatch(setAuthUserData(id, email, login))

            }
        })

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
                ...action.data,
                isAuth: true
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