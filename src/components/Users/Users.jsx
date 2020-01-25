import React, { Component } from 'react';
// import classes from './Users.module.css'
import { tsPropertySignature } from '@babel/types';
import classes from './Users.module.css'

const Users = (props) => {

    if (props.users.length===0){

props.setusers([
        {fullName: "niki", photo:"https://i.pinimg.com/564x/05/4f/e7/054fe717b6a9fe3907cce07956e4e5d8.jpg", followed:false, id: 1,status: "learn javascript",location:{contry:'usa', city: "florida"} },
        {fullName: "sasha", photo:"https://i.pinimg.com/564x/05/4f/e7/054fe717b6a9fe3907cce07956e4e5d8.jpg", followed:true, id: 2,status: "learn html",location:{contry:'russia', city: "omsk"} },
        {fullName: "viktor", photo:"https://i.pinimg.com/564x/05/4f/e7/054fe717b6a9fe3907cce07956e4e5d8.jpg", followed:false, id: 3,status: "learn css",location:{contry:'poland', city: "warsawa"} },
        {fullName: "leash", photo:"https://i.pinimg.com/564x/05/4f/e7/054fe717b6a9fe3907cce07956e4e5d8.jpg", followed:true, id: 4,status: "learn redux",location:{contry:'ukrain', city: "kiev"} },
       {fullName: "sash",photo:"https://i.pinimg.com/564x/05/4f/e7/054fe717b6a9fe3907cce07956e4e5d8.jpg", followed:false, id: 5,status: "learn angulat",location:{contry:'litva', city: "vilnus"} },
      
   ]
)
    }
    
    
    return (
        <div >
            
            {
                props.users.map(user => <div key={user.id}>
                    <span>
                        <div className={classes.photo}>
                            <img src={user.photo} />
                        </div>
                        <div>
                            {user.followed
                            ?<button onClick={()=>props.unfollow(user.id)}>follow</button>
                             :<button onClick={()=>props.follow(user.id)}>unfollow</button>}


                                

                        </div>
                    </span>
                    <span>
                        <div>{user.fullName}</div>
                        <div>{user.status}</div>
                    </span>
                    <span>
                        <div>{user.location.contry}</div>
                        <div>{user.location.city}</div>
                    </span>
                </div>)
            }
        </div>
    )
}

export default Users;