import { fork } from "redux-saga/effects";

import ingredientsSaga from "./ingredients";
import snacksSaga from "./snacks";

export default function* rootSaga() {
  yield fork(ingredientsSaga);
  yield fork(snacksSaga);
}
