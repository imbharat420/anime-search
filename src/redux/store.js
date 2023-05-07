import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import RootSaga from "./sagas";

export const saga = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      serializableCheck: false,
    }),
    saga,
  ],
  devTools: true,
});

saga.run(RootSaga);

export default store;
