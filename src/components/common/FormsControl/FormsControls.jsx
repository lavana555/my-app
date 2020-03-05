import React from 'react';
import classes from './FormsControls.module.css'
import {Field} from "redux-form";
import {required} from "../../utils/validators/validators";
import validateComponentProp from "redux-form/lib/util/validateComponentProp";

export const TextArea = ({input, meta, ...props}) => {
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

export const FieldTag=(placeholder,name,component,type,vaidate,props={})=>{
   return (  <Field placeholder={placeholder} name={name} component={component}
           validate={vaidate}
                    {...props}

   />
   )
}