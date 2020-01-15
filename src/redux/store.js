import ProfilePageReduce from "./profilePage-reduce";
import MessagesPageReduce from "./messagesPage-reduce";
import SiteBarReduce from "./sitebar-reduce";



let store = {
  _state: {
    messagesPage: {
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
      newMessageText: "введите ваше сооsasssбщение"
    },
    profilePage: {
      messageEls: [
        { message: "hi did you want", liCounts: '5', id: 1 },
        { message: "what are you doin now", liCounts: '55', id: 2 }
      ],
      newPostText: "itkamasutra"

    },
    sitebarPage:{
    sitebar: [
      { name: "NikiS", id: 1 },
      { name: "LizaS", id: 2 },
      { name: "ViktorS", id: 3 }
    ]
  }
  },
  _callSubscribber() {
    console.log('state')

  },


  getState() {
    return this._state
  },
  subscribe(observer) {
    this._callSubscribber = observer
  },


  dispatch(action) {
   // debugger;
   this._state.profilePage=ProfilePageReduce(this._state.profilePage, action)
    this._state.messagesPage=MessagesPageReduce(this._state.messagesPage, action)
    this._state.sitebarPage=SiteBarReduce(this._state.sitebarPage, action)
    this._callSubscribber(this._state);

  }

}

export default store;


























