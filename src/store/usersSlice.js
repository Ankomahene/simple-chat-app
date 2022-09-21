import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser(state, action) {
      state.push(action.payload);
    },
    removeUser(state, action) {
      return state.filter((user) => user.id !== action.payload);
    },
  },
});

export const { addUser, removeUser } = usersSlice.actions;
export const usersReducer = usersSlice.reducer;
