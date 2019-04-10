import { GET_SNACKS, SET_CHOOSED_SANDWICH } from "../constants";
import {
  apiErrorActionType,
  apiRequestActionType,
  apiSuccessActionType,
} from "../utils";

const initialState = {
  choosedSandwich: null,
  error: null,
  items: [],
  loading: false,
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
        items: payload.snacks,
      };
    }
    case apiErrorActionType(GET_SNACKS): {
      return {
        ...state,
        loading: false,
        error: payload.error,
      };
    }
    case SET_CHOOSED_SANDWICH: {
      return {
        ...state,
        choosedSandwich: payload.sandwich,
      };
    }
    default:
      return state;
  }
};
