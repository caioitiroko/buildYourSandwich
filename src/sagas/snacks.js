import {
  call, fork, put, takeLatest,
} from "redux-saga/effects";

import {
  GET_SNACKS,
  SNACKS_ENDPOINT,
} from "../constants";
import { apiRequestActionType } from "../utils";
import {
  requestSnacksSuccess,
  requestSnacksError,
} from "../actions";

function* fetchSnacks() {
  yield takeLatest(apiRequestActionType(GET_SNACKS), function* () {
    try {
      const response = yield call(fetch, SNACKS_ENDPOINT);
      const snacks = yield call([response, response.json]);
      yield put(requestSnacksSuccess(snacks));
    } catch (e) {
      yield put(requestSnacksError(e));
    }
  });
}

export default function* featureSaga() {
  yield fork(fetchSnacks);
}
