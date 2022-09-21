import { configureStore } from "@reduxjs/toolkit";
import { messagesReducer } from "./messagesSlice";
import { usersReducer } from "./usersSlice";
import {
  createStateSyncMiddleware,
  initMessageListener,
} from "redux-state-sync";

const store = configureStore({
  reducer: {
    users: usersReducer,
    messages: messagesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(createStateSyncMiddleware()),
});

initMessageListener(store);

export default store;
