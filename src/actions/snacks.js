import { GET_SNACKS, SET_CHOOSED_SANDWICH } from "../constants";
import {
  apiErrorActionType,
  apiRequestActionType,
  apiSuccessActionType,
} from "../utils";

export const requestSnacks = () => ({
  type: apiRequestActionType(GET_SNACKS),
});

export const requestSnacksSuccess = snacks => ({
  type: apiSuccessActionType(GET_SNACKS),
  payload: {
    snacks,
  },
});

export const requestSnacksError = error => ({
  type: apiErrorActionType(GET_SNACKS),
  payload: {
    error,
  },
});

export const setChoosedSandwich = sandwich => ({
  type: SET_CHOOSED_SANDWICH,
  payload: {
    sandwich,
  },
});
