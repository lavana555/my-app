import React from "react";
import classes from "../../Users/Users.module.css";
import PrelaoderSVG from '../../../assets/images/Gear-0.2s-57px.svg'

let Preloader = (props) => {
    return <div className={classes.preloader}>
        <img src={PrelaoderSVG}/>
    </div>
}
export default Preloader