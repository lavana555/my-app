// import React from 'react';
// import {Field, reduxForm} from "redux-form";
// import * as PropTypes from "prop-types";
//
//
// class NewComponent extends React.Component {
//     render() {
//         return <form onSubmit={this.props.onSubmit}>
//             <div>
//                 <Field placeholder={"your message"} name={"newMessagePost"} component={"textarea"} type={"text"}/>
//             </div>
//             <div>
//                 <button>Add</button>
//             </div>
//         </form>;
//     }
// }
//
// NewComponent.propTypes = {onSubmit: PropTypes.any};
// const DialogForm = (props) => {
//     return (
//         <NewComponent onSubmit={props.handleSubmit}/>
//     )
//
//
// }
// const DialogReduxForm=reduxForm({form:'dialog'})(DialogForm)
// export const Dialog = () => {
//     const onSubmit=(formData)=>{
//         console.log(formData)
//         this.props.onSubmit(formData)
//     }
//
//     return (
//         <div>
//             <h1>Dialog </h1>
//             <DialogReduxForm onSubmit={onSubmit}/>
//         </div>
//     )
//
// }
