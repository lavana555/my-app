import React, {Component} from 'react';
// import classes from './ProfeleInfoStatus.module.css'
import Preloader from "../../common/preloader/Preloader";


class ProfileInfoStatus extends React.Component {


    onTitleChanged=(e)=>{
     let   title=e.currentTarget.value
        this.setState({
            title:title
        })

    }
    activateEditMode=()=>{

        this.setState({
            editMode:true
        })
}

    deactivateEditMode=()=>{
        this.setState({
            editMode:false
        })
      //  debugger
       this.props.statusChenged(this.state.title)
    }

    state={
        editMode:false,
        title:this.props.status
    }



    render = () => {
       // let tile= this.state.title?"":"not status text"
        return (
            <div>

                {this.state.editMode
                ?<input onBlur={this.deactivateEditMode} onChange={this.onTitleChanged} autoFocus={true} value={this.state.title} />
                    : <span onClick={this.activateEditMode}>{this.props.status}</span>
                }

            </div>
        )
    }
}

export default ProfileInfoStatus;