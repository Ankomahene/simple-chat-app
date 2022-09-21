import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const messagesSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {
    addMessages(state, action) {
      state.push(action.payload);
    },
    removeMessages(state, action) {
      state = state.filter((message) => message.id === action.payload);
    },
  },
});

export const { addMessages, removeMessages } = messagesSlice.actions;
export const messagesReducer = messagesSlice.reducer;
