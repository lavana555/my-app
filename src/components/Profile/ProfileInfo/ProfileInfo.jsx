import React, {Component} from 'react';
import classes from './ProfeleInfo.module.css'
import Userphoto from "../../../assets/images/User.png";
import Preloader from "../../common/preloader/Preloader";
import ProfileinfoStatus from "./ProfileinfoStatus";
import ProfileinfoStatusWithHook from "./ProfileinfoStatusWithHook";


const ProfileInfo = (props) => {
   // debugger
    console.log(props)
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
                <div>
                <b>about me</b>:   {props.aboutMe}
                </div>
                <div>
                    <b>contact</b>:

                    {/*<span>facebook</span>:{props.contacts.facebook}*/}
                    {/*<span>googlePlus</span>:{props.contacts.googlePlus}*/}
                    {/*<span>icq</span>:{props.contacts.icq}*/}
                    {/*<span>instagrma</span>:{props.contacts.instagram}*/}
                    {/*<span>twitter</span>:{props.contacts.twitter}*/}
                    {/*<span>vk</span>:{props.contacts.vk}*/}
                </div>
                {props.lookingForAJob
                    ?<div>{props.lookingForAJobDescription}</div>
                    :''
                }
                <div>{props.fullName}</div>
                {/*ava+description*/}
                <span>{props.profile.lookingForAJobDescription}</span>
            </div>
        </div>
    )
}
export default ProfileInfo;