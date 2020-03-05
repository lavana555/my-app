import React from 'react';
import ProfilePageReduce, {actionPostAdd, actionPostDelete} from "./profilePage-reduce";


let state = {
    messageEls: [
        {message: "hi did you want", liCounts: '5', id: 1},
        {message: "what are you doin now", liCounts: '55', id: 2}
    ],



}


it('added new posts', () => {
    let action = actionPostAdd("new test")
    let newstate = ProfilePageReduce(state, action)
    expect(newstate.messageEls.length).toBe(3)

});


it('succesfully name', () => {
    let action = actionPostAdd("new test")
    let newstate = ProfilePageReduce(state, action)
    expect(newstate.messageEls[2].message).toBe("new testtttt")
});

it("succsesfully delete post",()=>{
    let action=actionPostDelete(1)
    let newstate=ProfilePageReduce(state,action)
    expect(newstate.messageEls.length).toBe(1)
})