const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SETUSERS = 'SETUSERS';
const PageChange = 'PageChange';
const TotalUsersCount = 'setTotalUsersCount';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLOWWING_PROGRESS='TOGGLE_IS_FOLOWWING_PROGRESS'

export const follow = (userId) => ({type: FOLLOW, userId})
export const unfollow = (userId) => ({type: UNFOLLOW, userId})
export const setusers = (users) => ({type: SETUSERS, users})
export const pageChange = (p) => ({type: PageChange, p})
export const setTotalUsersCount = (totalCount) => ({type: TotalUsersCount, totalCount})
export const setIsToggle = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleFollowingProgress=(isFetching,userId)=>({type:TOGGLE_IS_FOLOWWING_PROGRESS,isFetching,userId})

let initState = {
    users: [],
    pageSize: 15,
    totalUsersCount: 0,
    currentPage: 2,
    isFetching: true,
    isFolowwingProgres:[]

}

export const UsersPageReduce = (state = initState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: true}
                    }

                    return user
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: false}
                    }

                    return user
                })

            }

        case SETUSERS:
            return {...state, users: action.users}
        case PageChange:
            return {...state, currentPage: action.p}
        case TotalUsersCount:
            return {...state, totalUsersCount: action.totalCount}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        case TOGGLE_IS_FOLOWWING_PROGRESS:
            return {...state, isFolowwingProgres:action.isFetching
                    ?[...state.isFolowwingProgres,action.userId]
                    :[...state.isFolowwingProgres.filter(id=>id !=action.userId)]}
        default:
            return state
    }

}
export default UsersPageReduce