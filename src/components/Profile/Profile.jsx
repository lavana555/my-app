import React, {Component} from 'react';
import classes from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';


// class  ProfileContainer extends React.Component {
// //debugger;
//     render = () => {
//         return  (
//                   <div>
//                     <div className={classes.contimg}>
//                         <ProfileInfo/>
//                     </div>
//                     <MyPostsContainer/>
//                 </div>
//
//             )
//
//     }
// }




const Profile = (props) => {
//debugger;
    return (<div>
            <div className={classes.contimg}>
                <ProfileInfo profile={props.profile}/>
            </div>
            <MyPostsContainer/>
        </div>


    )

}

export default Profile;