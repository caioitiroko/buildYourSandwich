import { BASE_URL } from "./simple-snack-api";

export const GET_INGREDIENTS = "GET_INGREDIENTS";

export const INGREDIENTS_ENDPOINT = `${BASE_URL}/v1/ingredients`;

export const ADD_INGREDIENT = "ADD_INGREDIENT";

export const REMOVE_INGREDIENT = "REMOVE_INGREDIENT";

export const COMMON_IDENTIFIERS = {
  BACON: "bacon",
  LETTUCE: "lettuce",
  MEAT_BURGER: "meatBurger",
  EGG: "egg",
  CHEESE: "cheese",
};
