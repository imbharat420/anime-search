import { fork } from "redux-saga/effects";
import { watchAnimeSaga } from "./anime/handlers/anime";

export default function* RootSaga() {
  yield fork(watchAnimeSaga);
}
