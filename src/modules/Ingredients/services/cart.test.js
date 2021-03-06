import "react-native";

import { getBill, getDiscounts } from "./cart";

import { COMMON_IDENTIFIERS, DISCOUNTS } from "../../../constants";

describe("Testing discount logic", () => {
  it("Without discount", () => {
    const items = [
      {
        id: "3", name: "Hambúrguer de carne", commonIdentifier: COMMON_IDENTIFIERS.MEAT_BURGER, price: 3, quantity: 1,
      },
      {
        id: "5", name: "Queijo", commonIdentifier: COMMON_IDENTIFIERS.CHEESE, price: 1.5, quantity: 1,
      },
    ];
    expect(getBill(items)).toEqual(4.5);
  });

  it("With light discount", () => {
    const items = [
      {
        id: "1", name: "Alface", price: 0.4, commonIdentifier: COMMON_IDENTIFIERS.LETTUCE, quantity: 5,
      },
      {
        id: "3", name: "Hambúrguer de carne", commonIdentifier: COMMON_IDENTIFIERS.MEAT_BURGER, price: 3, quantity: 1,
      },
      {
        id: "5", name: "Queijo", commonIdentifier: COMMON_IDENTIFIERS.CHEESE, price: 1.5, quantity: 1,
      },
    ];
    expect(getBill(items)).toEqual(5.85);
  });

  it("Without light discount because has a bacon", () => {
    const items = [
      {
        id: "1", name: "Alface", commonIdentifier: COMMON_IDENTIFIERS.LETTUCE, price: 0.4, quantity: 5,
      },
      {
        id: "2", name: "Bacon", commonIdentifier: COMMON_IDENTIFIERS.BACON, price: 2, quantity: 1,
      },
      {
        id: "3", name: "Hambúrguer de carne", commonIdentifier: COMMON_IDENTIFIERS.MEAT_BURGER, price: 3, quantity: 1,
      },
      {
        id: "5", name: "Queijo", commonIdentifier: COMMON_IDENTIFIERS.CHEESE, price: 1.5, quantity: 1,
      },
    ];
    expect(getBill(items)).toEqual(8.5);
  });

  it("With meat quantity discount", () => {
    const itemA = [
      {
        id: "3", name: "Hambúrguer de carne", commonIdentifier: COMMON_IDENTIFIERS.MEAT_BURGER, price: 3, quantity: 3,
      },
      {
        id: "5", name: "Queijo", commonIdentifier: COMMON_IDENTIFIERS.CHEESE, price: 1.5, quantity: 1,
      },
    ];
    const itemB = [
      {
        id: "3", name: "Hambúrguer de carne", commonIdentifier: COMMON_IDENTIFIERS.MEAT_BURGER, price: 3, quantity: 6,
      },
      {
        id: "5", name: "Queijo", commonIdentifier: COMMON_IDENTIFIERS.CHEESE, price: 1.5, quantity: 1,
      },
    ];
    const itemC = [
      {
        id: "3", name: "Hambúrguer de carne", commonIdentifier: COMMON_IDENTIFIERS.MEAT_BURGER, price: 3, quantity: 10,
      },
      {
        id: "5", name: "Queijo", commonIdentifier: COMMON_IDENTIFIERS.CHEESE, price: 1.5, quantity: 1,
      },
    ];
    expect(getBill(itemA)).toEqual(7.5);
    expect(getBill(itemB)).toEqual(13.5);
    expect(getBill(itemC)).toEqual(22.5);
  });

  it("With cheese quantity discount", () => {
    const itemA = [
      {
        id: "3", name: "Hambúrguer de carne", commonIdentifier: COMMON_IDENTIFIERS.MEAT_BURGER, price: 3, quantity: 1,
      },
      {
        id: "5", name: "Queijo", commonIdentifier: COMMON_IDENTIFIERS.CHEESE, price: 1.5, quantity: 3,
      },
    ];
    const itemB = [
      {
        id: "3", name: "Hambúrguer de carne", commonIdentifier: COMMON_IDENTIFIERS.MEAT_BURGER, price: 3, quantity: 1,
      },
      {
        id: "5", name: "Queijo", commonIdentifier: COMMON_IDENTIFIERS.CHEESE, price: 1.5, quantity: 6,
      },
    ];
    const itemC = [
      {
        id: "3", name: "Hambúrguer de carne", commonIdentifier: COMMON_IDENTIFIERS.MEAT_BURGER, price: 3, quantity: 1,
      },
      {
        id: "5", name: "Queijo", commonIdentifier: COMMON_IDENTIFIERS.CHEESE, price: 1.5, quantity: 10,
      },
    ];
    expect(getBill(itemA)).toEqual(6);
    expect(getBill(itemB)).toEqual(9);
    expect(getBill(itemC)).toEqual(13.5);
  });

  it("Get discounts", () => {
    const items = [
      {
        id: "1", name: "Alface", commonIdentifier: COMMON_IDENTIFIERS.LETTUCE, price: 0.4, quantity: 1,
      },
      {
        id: "2", name: "Bacon", commonIdentifier: COMMON_IDENTIFIERS.BACON, price: 2, quantity: 0,
      },
      {
        id: "3", name: "Hambúrguer de carne", commonIdentifier: COMMON_IDENTIFIERS.MEAT_BURGER, price: 3, quantity: 3,
      },
      {
        id: "5", name: "Queijo", commonIdentifier: COMMON_IDENTIFIERS.CHEESE, price: 1.5, quantity: 2,
      },
    ];

    expect(getDiscounts(items)).toEqual([
      { name: DISCOUNTS.LIGHT, quantity: null, active: true },
      { name: DISCOUNTS.EXTRA_MEAT, quantity: 1, active: true },
      { name: DISCOUNTS.EXTRA_CHEESE, quantity: 0, active: false },
    ]);
  });
});
