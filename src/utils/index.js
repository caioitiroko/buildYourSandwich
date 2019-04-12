export * from "./array";

export * from "./number";

export const apiRequestActionType = endpoint => `${endpoint}_REQUEST`;

export const apiSuccessActionType = endpoint => `${endpoint}_SUCCESS`;

export const apiErrorActionType = endpoint => `${endpoint}_ERROR`;
