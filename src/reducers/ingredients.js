import {
  apiErrorActionType,
  apiRequestActionType,
  apiSuccessActionType,
} from "../utils";

import { GET_INGREDIENTS } from "../constants";

const initialState = {
  loading: false,
  items: [],
  error: {},
};

export default (state = initialState, action) => {
  if (!action) return state;

  const { type, payload } = action;

  switch (type) {
    case apiRequestActionType(GET_INGREDIENTS): {
      return {
        ...state,
        loading: true,
      };
    }
    case apiSuccessActionType(GET_INGREDIENTS): {
      return {
        ...state,
        loading: false,
        items: payload.ingredients,
      };
    }
    case apiErrorActionType(GET_INGREDIENTS): {
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
