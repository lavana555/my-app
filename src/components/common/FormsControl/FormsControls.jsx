import React from 'react';
import classes from './FormsControls.module.css'

export const TextArea = ({input, meta, ...props}) => {
    debugger;

  let  HasError=meta.touched && meta.error
    return (
        <div className={classes.formcontrol+" "+(HasError?classes.show:"")}>

            <div>
                { HasError && <span>{meta.error}</span> }
                <textarea    {...input} {...props} />

            </div>
        </div>
    )
}



export const Input = ({input, meta, ...props}) => {
    debugger;

    let  HasError=meta.touched && meta.error
    return (
        <div className={classes.formcontrol+" "+(HasError?classes.show:"")}>

            <div>
                { HasError && <span>{meta.error}</span> }
                <input    {...input} {...props} />

            </div>
        </div>
    )
}