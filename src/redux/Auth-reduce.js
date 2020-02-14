const SET_USER_DATA = 'SET_USER_DATA';
const UNFOLLOW = 'UNFOLLOW';
const SETUSERPROFILE='SETUSERPROFILE'

 export const setAuthUserData = (id,email,login) => ({type: SET_USER_DATA, data:{id,email,login}})
export const setUserProfileHeader=(profile)=>({type:SETUSERPROFILE,profile})
//export const unfollow = (userId) => ({type: UNFOLLOW, userId})
//export const setusers = (users) => ({type: SETUSERS, users})
//export const pageChange = (p) => ({type: PageChange, p})
//export const setTotalUsersCount = (totalCount) => ({type: TotalUsersCount, totalCount})
//export const setIsToggle = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})

let initState = {

    id: null,
    email: null,
    login: null,
    isAuth: false,
     profile:null

}

export const AuthReduce = (state = initState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
           debugger;
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
                 ...state, profile: action.profile
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