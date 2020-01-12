// import { reRender } from "../render";
let  reRender=()=> {
  console.log('state')
  
} 
let state = {

  newPostText: "itkamasutra",
  newMessageText: "введите ваше сооsasssбщение",

  profilePage: {


    dialogElements: [
      { name: "niki", id: 1 },
      { name: "liza", id: 2 },
      { name: "ira", id: 3 },
      { name: "viktor", id: 4 }
    ],

    messageElements: [
      { message: "HI1", id: 1 },
      { message: "HI2", id: 2 },
      { message: "HI3", id: 3 },
      { message: "HI4", id: 4 }
    ],
  },

  messagesPage: {
    messageEls: [
      { message: "hi did you want", liCounts: '5', id: 1 },
      { message: "what are you doin now", liCounts: '55', id: 2 }
    ]

  },

  sitebar: [
    { name: "NikiS", id: 1 },
    { name: "LizaS", id: 2 },
    { name: "ViktorS", id: 3 }

  ]

}


export const AddPost = () => {
  let newpost = {
    message: state.newPostText,
    liCounts: 5,
    id: 3
  }
  state.messagesPage.messageEls.push(newpost)
  state.newPostText=''
  reRender(state)
  
}
export const PostChange = (newpostschange) => {
  state.newPostText = newpostschange
  reRender(state);
  //state.newPostText=''
}

export const addMessage=()=> {
 let newMessagePost={
  message:state.newMessageText,
  id: 5
 }
state.profilePage.messageElements.push(newMessagePost)
state.newMessageText=''
reRender(state);
}


export const MessageChange=(newMessageChange)=>{
  state.newMessageText=newMessageChange
  reRender(state);
}

export const subscribe=(observer)=>{
  reRender=observer
}


export default state;