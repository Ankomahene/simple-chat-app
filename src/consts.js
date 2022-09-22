import storage from "redux-persist/lib/storage";

export const excludedActions = ["persist/PERSIST", "persist/REHYDRATE"];

export const persistConfig = {
  key: "root",
  storage,
};
