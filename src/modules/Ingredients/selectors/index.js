import { curry, path } from "ramda";

export const getIngredients = curry(path(["ingredients", "items"]));

export const isLoading = curry(path(["ingredients", "loading"]));

export const getError = curry(path(["ingredients", "error"]));

export const getIngredientsSelected = curry(path(["ingredients", "ingredientsSelected"]));
