import {
  allPass,
  any,
  complement,
  cond,
  find,
  prop,
  propEq,
  sum,
} from "ramda"

import { COMMON_IDENTIFIERS } from "../../../constants";

import { roundToTwo } from "../../../utils";

const hasLightDiscount = items => {
  const lettuce = find(propEq('commonIdentifier', COMMON_IDENTIFIERS.LETTUCE), items) || {};
  const bacon = find(propEq('commonIdentifier', COMMON_IDENTIFIERS.BACON), items) || {};

  const hasLettuce = (lettuce.quantity || 0) > 0;
  const hasBacon = (bacon.quantity || 0) > 0;

  return hasLettuce && !hasBacon;
}

const isMeat = propEq('commonIdentifier', COMMON_IDENTIFIERS.MEAT_BURGER);

const isCheese = propEq('commonIdentifier', COMMON_IDENTIFIERS.CHEESE);

const getMeatQuantityWithDiscount = meat => {
  const { quantity } = meat;
  return quantity - parseInt(quantity / 3, 10);
}

const getCheeseQuantityWithDiscount = cheese => {
  const { quantity } = cheese;
  return quantity - parseInt(quantity / 3, 10);
}

const applyQuantityDiscount = item =>
  isCheese(item) ? getCheeseQuantityWithDiscount(item) :
  isMeat(item) ? getMeatQuantityWithDiscount(item) :
  item.quantity;

export const getBill = items => {
  const total = sum(items.map(item => applyQuantityDiscount(item) * item.price));

  return hasLightDiscount(items) ? roundToTwo(total * 0.9) : total;
}
