import { combineReducers } from "redux";

import ingredients from "./ingredients";
import snacks from "./snacks";

export default combineReducers({
  ingredients,
  snacks,
});
