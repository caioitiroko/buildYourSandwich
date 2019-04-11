import {
  ADD_INGREDIENT,
  GET_INGREDIENTS,
  REMOVE_INGREDIENT,
  SET_SELECTED_SANDWICH,
} from "../constants";
import {
  apiErrorActionType,
  apiRequestActionType,
  apiSuccessActionType,
  findItem,
  updateValueOnItem,
} from "../utils";
import {
  dec,
  inc,
  pathOr,
  when,
} from "ramda";

const initialState = {
  loading: false,
  items: [],
  ingredientsSelected: [],
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
    case SET_SELECTED_SANDWICH: {
      return {
        ...state,
        ingredientsSelected: payload.sandwich.ingredients,
      };
    }
    case ADD_INGREDIENT: {
      const { ingredient } = payload;

      const { id, quantity } = findItem(ingredient.id, state.ingredientsSelected) || {};

      const newSelectedIngredients = id ?
        updateValueOnItem(
          id,
          'quantity',
          inc(quantity),
          state.ingredientsSelected
        ) : [
          ...state.ingredientsSelected,
          {
            ...ingredient,
            quantity: 1,
          }
        ];
      return {
        ...state,
        ingredientsSelected: newSelectedIngredients
      };
    }
    case REMOVE_INGREDIENT: {
      const { ingredient } = payload;

      const { id, quantity } = findItem(ingredient.id, state.ingredientsSelected) || {};

      const newSelectedIngredients = id ?
        updateValueOnItem(
          id,
          'quantity',
          when(a => a > 0, dec)(quantity),
          state.ingredientsSelected
        ) : state.ingredientsSelected;

      return {
        ...state,
        ingredientsSelected: newSelectedIngredients
      };
    }
    default:
      return state;
  }
};
