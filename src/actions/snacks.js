import {
  apiErrorActionType,
  apiRequestActionType,
  apiSuccessActionType,
} from "../utils";

import { GET_SNACKS } from "../constants";

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
