import {
  assoc,
  curry,
  find,
  map,
  propEq,
  when,
} from "ramda";

export const findItem = curry((id, items) => find(propEq("id", id), items));

export const updateValueOnItem = curry((id, field, newValue, items) => map(
  when(propEq("id", id), assoc(field, newValue)),
  items
));
