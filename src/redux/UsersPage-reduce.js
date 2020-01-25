 const FOLLOW='FOLLOW';
 const UNFOLLOW='UNFOLLOW';
 const SETUSERS='SETUSERS'



 export const FollowAC=(userId)=>({type:FOLLOW,userId })
 export const UNFollowAC=(userId)=>({type:UNFOLLOW,userId })
 export const setUsersAC=(users)=>({type: SETUSERS, users})

let initState={
  users:[
       {fullName: "niki", photo:"https://i.pinimg.com/564x/05/4f/e7/054fe717b6a9fe3907cce07956e4e5d8.jpg", followed:false, id: 1,status: "learn javascript",location:{contry:'usa', city: "florida"} },
       {fullName: "sasha", photo:"https://i.pinimg.com/564x/05/4f/e7/054fe717b6a9fe3907cce07956e4e5d8.jpg", followed:true, id: 2,status: "learn html",location:{contry:'russia', city: "omsk"} },
       {fullName: "viktor", photo:"https://i.pinimg.com/564x/05/4f/e7/054fe717b6a9fe3907cce07956e4e5d8.jpg", followed:false, id: 3,status: "learn css",location:{contry:'poland', city: "warsawa"} },
       {fullName: "leash", photo:"https://i.pinimg.com/564x/05/4f/e7/054fe717b6a9fe3907cce07956e4e5d8.jpg", followed:true, id: 4,status: "learn redux",location:{contry:'ukrain', city: "kiev"} },
      {fullName: "sash",photo:"https://i.pinimg.com/564x/05/4f/e7/054fe717b6a9fe3907cce07956e4e5d8.jpg", followed:false, id: 5,status: "learn angulat",location:{contry:'litva', city: "vilnus"} },
     
  ]
}

export const UsersPageReduce=(state=initState,action)=>{
 //debugger;
 

 switch (action.type) {
  case FOLLOW: 
   return{
      ...state,
    users:state.users.map(user=>{
        if (user.id===action.userId) {
            return {...user,followed:true}
        }

        return user
    })
}
    
    case UNFOLLOW: 
    return { 
        ...state,
    users:state.users.map(user=>{
        if (user.id===action.userId) {
            return {...user,followed:false}
        }

        return user
    })

    }
 
case SETUSERS: 
return {
    ...state,users:[...state.users,...action.users]
}

  default:
    return state
}
 
}
    
    export default UsersPageReduce