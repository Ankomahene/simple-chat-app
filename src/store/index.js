import { configureStore } from "@reduxjs/toolkit";
import { messagesReducer } from "./messagesSlice";
import { usersReducer } from "./usersSlice";

const store = configureStore({
  reducer: {
    users: usersReducer,
    messages: messagesReducer,
  },
});

export default store;
