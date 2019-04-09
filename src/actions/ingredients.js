import {
  apiErrorActionType,
  apiRequestActionType,
  apiSuccessActionType,
} from "../utils";

import { GET_INGREDIENTS } from "../constants";

export const requestIngredients = () => ({
  type: apiRequestActionType(GET_INGREDIENTS),
});

export const requestIngredientsSuccess = ingredients => ({
  type: apiSuccessActionType(GET_INGREDIENTS),
  payload: {
    ingredients,
  },
});

export const requestIngredientsError = error => ({
  type: apiErrorActionType(GET_INGREDIENTS),
  payload: {
    error,
  },
});
