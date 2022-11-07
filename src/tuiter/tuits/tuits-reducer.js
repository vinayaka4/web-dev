import { createSlice } from "@reduxjs/toolkit";
import tuits from './tuits.json';

const currentUser = {
 "userName": "NASA",
 "handle": "@nasa",
 "image": "nasa.jpg",
};

const templateTuit = {
 ...currentUser,
 "topic": "Space",
 "time": "2h",
 "liked": true,
 "replies": 0,
 "retuits": 0,
 "likes": 0,
 "profilepic": "nasa.jpg",
 "comments":0,
}

const tuitsSlice = createSlice({
 name: 'tuits',
 initialState: tuits,
 reducers: {
    deleteTuit(state, action) {
        const index = state
           .findIndex(tuits =>
              tuits._id === action.payload);
        state.splice(index, 1);
      },
   
    
   createTuit(state, action) {
     state.unshift({
       ...action.payload,
       ...templateTuit,
       _id: (new Date()).getTime(),
     })
   }
 }
});

export const {createTuit,deleteTuit} = tuitsSlice.actions;
export default tuitsSlice.reducer;