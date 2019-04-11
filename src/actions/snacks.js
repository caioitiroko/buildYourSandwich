import { GET_SNACKS, SET_SELECTED_SANDWICH } from "../constants";
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

export const setSelectedSandwich = sandwich => ({
  type: SET_SELECTED_SANDWICH,
  payload: {
    sandwich,
  },
});
