import {UserAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';
const UNFOLLOW = 'UNFOLLOW';
const SETUSERPROFILE='SETUSERPROFILE'

 export const setAuthUserData = (id,email,login) => ({type: SET_USER_DATA, data:{id,email,login}})
export const setUserProfileHeader=(photo)=>({type:SETUSERPROFILE,photo})
//export const unfollow = (userId) => ({type: UNFOLLOW, userId})
//export const setusers = (users) => ({type: SETUSERS, users})
//export const pageChange = (p) => ({type: PageChange, p})
//export const setTotalUsersCount = (totalCount) => ({type: TotalUsersCount, totalCount})
//export const setIsToggle = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})




export const Auth=()=>{
    return (dispatch)=>{
        UserAPI.Authfunc().then(data => {
            if (data.resultCode === 0) {
                let {id, email, login} = data.data
                dispatch(setAuthUserData(id, email, login))
                // axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + 5348).then(res => {
                //     debugger;
                //     console.log(res)
                //     let photo = res.data.photos.small
                //     this.props.setUserProfileHeader(photo)
                // })
            }
        })

    }
}



let initState = {

    id: null,
    email: null,
    login: null,
    isAuth: false,
     photo:null

}

export const AuthReduce = (state = initState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
         //  debugger;
             return {
                 ...state,
                 ...action.data,
                 isAuth: true
        //         users: state.users.map(user => {
        //             if (user.id === action.userId) {
        //                 return {...user, followed: true}
        //             }
        //
        //             return user
        //         })
            }
         case   SETUSERPROFILE:
             //debugger;
             return {
                 ...state, photo: action.photo
             }
        // case UNFOLLOW:
        //     return {
        //         ...state,
        //         users: state.users.map(user => {
        //             if (user.id === action.userId) {
        //                 return {...user, followed: false}
        //             }
        //
        //             return user
        //         })
        //
        //     }

        default:
            return state
    }

}
export default AuthReduce