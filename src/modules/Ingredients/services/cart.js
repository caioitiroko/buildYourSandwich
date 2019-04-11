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

const hasLightDiscount = items => {
  const lettuce = find(propEq('name', 'Alface'), items) || {};
  const bacon = find(propEq('name', 'Bacon'), items) || {};

  const hasLettuce = (lettuce.quantity || 0) > 0;
  const hasBacon = (bacon.quantity || 0) > 0;

  return hasLettuce && !hasBacon;
}

const isMeat = propEq('name', 'Hambúrguer de carne');

const isCheese = propEq('name', 'Queijo');

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

  return hasLightDiscount(items) ? total * 0.9 : total;
}
