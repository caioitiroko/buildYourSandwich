import {
  call, fork, put, takeLatest,
} from "redux-saga/effects";

import {
  GET_INGREDIENTS,
  INGREDIENTS_ENDPOINT,
} from "../constants";
import {
  warnUser,
  apiRequestActionType,
  apiErrorActionType,
} from "../utils";
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

function* catchIngredientsErrors() {
  yield takeLatest(apiErrorActionType(GET_INGREDIENTS), () => warnUser("Erro ao consultar ingredientes no servidor"));
}

export default function* featureSaga() {
  yield fork(fetchIngredients);
  yield fork(catchIngredientsErrors);
}
