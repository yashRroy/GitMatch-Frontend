import { createSlice } from "@reduxjs/toolkit";

const feedSlice = createSlice({
  name: "feed",
  initialState: [],
  reducers: {
    addFeed: (state, action) => {
      return action.payload; // Expects full array of users
    },
    removeUserFromFeed: (state, action) => {
      // Removes user by _id (passed in action.payload)
      return state.filter((user) => user._id !== action.payload);
    },
    clearFeed: () => {
      return []; // Clears entire feed
    },
  },
});

export const { addFeed, removeUserFromFeed, clearFeed } = feedSlice.actions;
export default feedSlice.reducer;
