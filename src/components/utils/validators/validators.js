

export const required=(value)=>{
    if (value) return undefined;
    return  "field is required"
}


export const  maxLength15=(maxlength)=>{
    if (maxlength.length>15) {
        return "max length is 15"
    }
    return undefined
}


export const MaxLengthCreator=(maxLength)=>(value)=>{
    if (value.length>maxLength) return `max length ${maxLength}`
    return undefined
}


export const  minLength2=(minlength)=>{
    if (minlength.length<2) {
        return "min length is 2"
    }
    return undefined
}