import {
  apiErrorActionType,
  apiRequestActionType,
  apiSuccessActionType,
} from "../utils";

import { ADD_INGREDIENT, GET_INGREDIENTS, REMOVE_INGREDIENT } from "../constants";

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

export const addIngredient = ingredient => ({
  type: ADD_INGREDIENT,
  payload: {
    ingredient,
  },
});
export const removeIngredient = ingredient => ({
  type: REMOVE_INGREDIENT,
  payload: {
    ingredient,
  },
});
