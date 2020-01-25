import React, { Component } from 'react';

import { actionPostAdd, actionPOstChange } from '../../../redux/profilePage-reduce';
import MyPosts from './MyPosts';
import StoreContext from '../../../StoreContext';
import {connect} from 'react-redux';



// const MyPostsContainer = () => {
 
//   return <StoreContext.Consumer>
//        {store=>{
//         let state = store.getState().profilePage; 
//         let addPost = () => {
//           let action = actionPostAdd();
//           store.dispatch(action);
//         }
      
      
//         let PostChange = (NewText) => {
//           let action = actionPOstChange(NewText)
//           store.dispatch(action)
      
//         }      
//      return  <MyPosts addPost={addPost} PostChange={PostChange}
//         messageEls={state.messageEls}
//         newPostText={state.newPostText} />
// }
// } 
// </StoreContext.Consumer>
  
// }


 let MapStateToProps=(state)=>{
return {
  profilePage:state.profilePage
}
};

let MapDispatchToProps=(dispatch)=>{
return {
   addPost : () => {
    let action = actionPostAdd();
    dispatch(action);
  },


   PostChange : (NewText) => {
    let action = actionPOstChange(NewText)
    dispatch(action)

  }   

}
}



const MyPostsContainer=connect(MapStateToProps,MapDispatchToProps)(MyPosts)


export default MyPostsContainer;