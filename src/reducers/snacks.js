import {
  apiErrorActionType,
  apiRequestActionType,
  apiSuccessActionType,
} from "../utils";

import { GET_SNACKS } from "../constants";

const initialState = {
  loading: false,
  snacks: [],
  error: {},
};

export default (state = initialState, action) => {
  if (!action) return state;

  const { type, payload } = action;

  switch (type) {
    case apiRequestActionType(GET_SNACKS): {
      return {
        ...state,
        loading: true,
      };
    }
    case apiSuccessActionType(GET_SNACKS): {
      return {
        ...state,
        loading: false,
        snacks: payload.snacks,
      };
    }
    case apiErrorActionType(GET_SNACKS): {
      return {
        ...state,
        loading: false,
        error: payload.error,
      };
    }
    default:
      return state;
  }
};
