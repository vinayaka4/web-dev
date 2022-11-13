import { createSlice } from "@reduxjs/toolkit";
import {findTuitsThunk}
  from "../../services/tuits-thunks";
import {deleteTuitThunk}
  from "../../services/tuits-thunks";
import {createTuitThunk}
  from "../../services/tuits-thunks";
  import {updateTuitThunk} from "../../services/tuits-thunks";
const currentUser = {
 "username": "NASA",
 "handle": "@nasa",
 "profilepic": "space.jpg"
};
const initialState = {
  tuits: [],
  loading: false
}

const templateTuit = {
 ...currentUser,
 "topic": "Space",
 "time": "2h",
 "liked": true,
 "replies": 0,
 "retuits": 0,
 "likes": 0,
 "profilepic":"nasa.jpg",
 "comments":0,
}

const tuitsSlice = createSlice({
 name: 'tuits',
 initialState: initialState,
 extraReducers: {
   [findTuitsThunk.pending]:
      (state) => {
         state.loading = true
         state.tuits = []
   },
   [findTuitsThunk.fulfilled]:
      (state, { payload }) => {
         state.loading = false
         state.tuits = payload
   },
   [findTuitsThunk.rejected]:
      (state) => {
         state.loading = false
   },

   [deleteTuitThunk.fulfilled] :
      (state, { payload }) => {
      state.loading = false
      state.tuits = state.tuits
        .filter(t => t._id !== payload)
    },

    [createTuitThunk.fulfilled]:
    (state, { payload }) => {
      state.loading = false
      state.tuits.push(payload)
  },
  [updateTuitThunk.fulfilled]:
  (state, { payload }) => {
      state.loading = false
      const tuitNdx = state.tuits
          .findIndex((t) => t._id === payload._id)
      state.tuits[tuitNdx] = {
          ...state.tuits[tuitNdx],
          ...payload
      }
  }


 },

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