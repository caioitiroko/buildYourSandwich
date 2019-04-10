import { curry, path } from "ramda";

export const getSnacks = curry(path(["snacks", "items"]));

export const isLoading = curry(path(["snacks", "loading"]));

export const getError = curry(path(["snacks", "error"]));
