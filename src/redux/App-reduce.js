import {Auth} from "./Auth-reduce";

const SETINITIALIZED='SETINIALIZED'


export const InitializedSucces=()=>({type:SETINITIALIZED})




 export const initializeApp = () =>(dispatch)=> {


     let propmise= dispatch(Auth())
     Promise.all([propmise]).then(()=>{
       //  debugger;
         dispatch(InitializedSucces())})
     // dispatch(somethingElse())
     // dispatch(InitializedSucces())

 }




let initState = {
initialized:false

}

export const AppReduce = (state = initState, action) => {
    switch (action.type) {
        case SETINITIALIZED:
            return {
                ...state,
                initialized:true,

            }

        default:
            return state
    }
}
export default AppReduce