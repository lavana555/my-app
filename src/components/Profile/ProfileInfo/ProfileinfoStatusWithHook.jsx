import React, { useState,useEffect } from 'react';




const ProfileinfoStatusWithHook =(props)=> {
//debugger
    let [editMode,setEditMode]=useState(false)
    let[status,setTitle]=useState(props.status)


    useEffect(()=>{
      // debugger
        setTitle(props.status)
    },[props.status])


   const  onTitleChanged = (e) => {
       let status = e.currentTarget.value;
       setTitle(status)
   }



  const  activateEditMode=()=>{
        setEditMode(true)

}

const deactivateEditMode=()=>{
        setEditMode(false)
    props.statusChenged(status)
}

        return (
            <div>

                {editMode
                    ? <input   onBlur={deactivateEditMode} onChange={onTitleChanged} value={status} autoFocus={true}
                             />
                    : <span onClick={activateEditMode}>{props.status || "------"}</span>
                }

            </div>
        )

}

export default ProfileinfoStatusWithHook;