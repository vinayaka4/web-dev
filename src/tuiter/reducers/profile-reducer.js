import { createSlice } from "@reduxjs/toolkit";

const profile =   {
    userName: "vinayak",
    handle: "@Vin",
    profilePicture: "../images/space.jpg",
    coverPicture: "../images/mars.jpg",
    bio: "Public poicy, current affairs ,Front end enthusiats",
    location: "Boston, MA",
    dob: "10/08",
    dateJoined: "9/2009",
    followers: "100",
    following: "200",
    website:"github.com"
  }


const profileSlice = createSlice({
    name: "profile",
    initialState: profile,
    reducers: {
        updateProfile(state, action) {
            return action.payload;
       },
    }
});

export const {updateProfile} = profileSlice.actions;
export default profileSlice.reducer;