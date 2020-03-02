import React, {Component} from 'react';
import classes from './ProfeleInfo.module.css'
import Userphoto from "../../../assets/images/User.png";
import Preloader from "../../common/preloader/Preloader";
import ProfileinfoStatus from "./ProfileinfoStatus";
import ProfileinfoStatusWithHook from "./ProfileinfoStatusWithHook";


const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div>
                {/*<img src='https://www.hakaimagazine.com/wp-content/uploads/header-baltic-sea-radiation.jpg' />*/}

                <ProfileinfoStatusWithHook status={props.status} statusChenged={props.statusChenged} />
                {/*<ProfileinfoStatus status={props.status} statusChenged={props.statusChenged}/>*/}
            </div>
            <div className={classes.description}>
                <img src={props.profile.photos.large}/>

                {/*ava+description*/}
                <span>{props.profile.lookingForAJobDescription}</span>
            </div>
        </div>
    )
}
export default ProfileInfo;