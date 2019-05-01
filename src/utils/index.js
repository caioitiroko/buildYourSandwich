import { complement, isEmpty, isNil } from "ramda";

export * from "./array";
export * from "./error";
export * from "./number";

export const isNotNil = complement(isNil);

export const isNotEmpty = complement(isEmpty);

export const apiRequestActionType = endpoint => `${endpoint}_REQUEST`;

export const apiSuccessActionType = endpoint => `${endpoint}_SUCCESS`;

export const apiErrorActionType = endpoint => `${endpoint}_ERROR`;
