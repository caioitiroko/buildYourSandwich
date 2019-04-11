import "react-native";
import React from "react";
import { getBill } from "./cart";

describe("Testing discount logic", () => {
  it('Without discount', () => {
    const items = [
      { id: "3", name: "Hambúrguer de carne", price: 3, quantity: 1 },
      { id: "5", name: "Queijo", price: 1.5, quantity: 1 },
    ];
    expect(getBill(items)).toEqual(4.5);
  });

  it('With light discount', () => {
    const items = [
      { id: "1", name: "Alface", price: 0.4, quantity: 5 },
      { id: "3", name: "Hambúrguer de carne", price: 3, quantity: 1 },
      { id: "5", name: "Queijo", price: 1.5, quantity: 1 },
    ];
    expect(getBill(items)).toEqual(5.85);
  });

  it('Without light discount because has a bacon', () => {
    const items = [
      { id: "1", name: "Alface", price: 0.4, quantity: 5 },
      { id: "2", name: "Bacon", price: 2, quantity: 1 },
      { id: "3", name: "Hambúrguer de carne", price: 3, quantity: 1 },
      { id: "5", name: "Queijo", price: 1.5, quantity: 1 },
    ];
    expect(getBill(items)).toEqual(8.5);
  });

  it('With meat quantity discount', () => {
    const itemsA = [
      { id: "3", name: "Hambúrguer de carne", price: 3, quantity: 3 },
      { id: "5", name: "Queijo", price: 1.5, quantity: 1 },
    ];
    const itemsB = [
      { id: "3", name: "Hambúrguer de carne", price: 3, quantity: 6 },
      { id: "5", name: "Queijo", price: 1.5, quantity: 1 },
    ];
    const itemsC = [
      { id: "3", name: "Hambúrguer de carne", price: 3, quantity: 10 },
      { id: "5", name: "Queijo", price: 1.5, quantity: 1 },
    ];
    expect(getBill(itemsA)).toEqual(7.5);
    expect(getBill(itemsB)).toEqual(13.5);
    expect(getBill(itemsC)).toEqual(22.5);
  });

  it('With cheese quantity discount', () => {
    const itemsA = [
      { id: "3", name: "Hambúrguer de carne", price: 3, quantity: 1 },
      { id: "5", name: "Queijo", price: 1.5, quantity: 3 },
    ];
    const itemsB = [
      { id: "3", name: "Hambúrguer de carne", price: 3, quantity: 1 },
      { id: "5", name: "Queijo", price: 1.5, quantity: 6 },
    ];
    const itemsC = [
      { id: "3", name: "Hambúrguer de carne", price: 3, quantity: 1 },
      { id: "5", name: "Queijo", price: 1.5, quantity: 10 },
    ];
    expect(getBill(itemsA)).toEqual(6);
    expect(getBill(itemsB)).toEqual(9);
    expect(getBill(itemsC)).toEqual(13.5);
  });
});
