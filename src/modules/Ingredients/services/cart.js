import {
  find,
  propEq,
  sum,
} from "ramda";

import { COMMON_IDENTIFIERS, DISCOUNTS } from "../../../constants";

import { roundToTwo } from "../../../utils";

const hasLightDiscount = (items) => {
  const lettuce = find(propEq("commonIdentifier", COMMON_IDENTIFIERS.LETTUCE), items) || {};
  const bacon = find(propEq("commonIdentifier", COMMON_IDENTIFIERS.BACON), items) || {};

  const hasLettuce = (lettuce.quantity || 0) > 0;
  const hasBacon = (bacon.quantity || 0) > 0;

  return hasLettuce && !hasBacon;
};

const isMeat = propEq("commonIdentifier", COMMON_IDENTIFIERS.MEAT_BURGER);

const isCheese = propEq("commonIdentifier", COMMON_IDENTIFIERS.CHEESE);

const freeItems = item => parseInt(item.quantity / 3, 10);

export const getDiscounts = items => {
  const getMeat = find(isMeat, items);
  const getCheese = find(isCheese, items);

  const getMeatDiscount = freeItems(getMeat);
  const getCheeseDiscount = freeItems(getCheese);

  const hasQuantityDiscount = quantity => quantity > 0;

  return([
    { name: DISCOUNTS.LIGHT, quantity: null, active: hasLightDiscount(items) },
    { name: DISCOUNTS.EXTRA_MEAT, quantity: getMeatDiscount, active: hasQuantityDiscount(getMeatDiscount) },
    { name: DISCOUNTS.EXTRA_CHEESE, quantity: getCheeseDiscount, active: hasQuantityDiscount(getCheeseDiscount) }
  ]);
}

const applyQuantityDiscount = item => ((isMeat(item) || isCheese(item))
  ? item.quantity - freeItems(item)
  : item.quantity);

export const getBill = (items) => {
  const total = sum(items.map(item => applyQuantityDiscount(item) * item.price));

  return hasLightDiscount(items) ? roundToTwo(total * 0.9) : total;
};
