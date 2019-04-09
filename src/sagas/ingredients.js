import {
  call, fork, put, takeLatest,
} from "redux-saga/effects";

import {
  GET_INGREDIENTS,
  INGREDIENTS_ENDPOINT,
} from "../constants";
import { apiRequestActionType } from "../utils";
import {
  requestIngredientsSuccess,
  requestIngredientsError,
} from "../actions";

function* fetchIngredients() {
  yield takeLatest(apiRequestActionType(GET_INGREDIENTS), function* () {
    try {
      const response = yield call(fetch, INGREDIENTS_ENDPOINT);
      const ingredients = yield call([response, response.json]);
      yield put(requestIngredientsSuccess(ingredients));
    } catch (e) {
      yield put(requestIngredientsError(e));
    }
  });
}

export default function* featureSaga() {
  yield fork(fetchIngredients);
}
