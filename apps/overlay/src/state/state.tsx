import { configureStore } from "@reduxjs/toolkit";
import { save, load } from "redux-localstorage-simple";
import chain from "./chain/reducer";
import { updateVersion } from "./global/actions";
import { setupListeners } from "@reduxjs/toolkit/query";

const PERSISTED_KEYS: string[] = ["user", "transactions"];

const store = configureStore({
  reducer: {
    chain,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: true }).concat(
      save({ states: PERSISTED_KEYS, debounce: 1000 })
    ),
  preloadedState: load({ states: PERSISTED_KEYS }),
});

store.dispatch(updateVersion());

setupListeners(store.dispatch);

export default store;

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
