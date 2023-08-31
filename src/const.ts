import { Burger } from "./types";

export const burgersList: Burger[] = [
  { name: "HAMBURGER", price: 5, fixedPrice: 5 },
  { name: "CHEESEBURGER", price: 6, fixedPrice: 6 },
  { name: "CHILLI CHEESEBURGER", price: 8, fixedPrice: 8 },
];

export const sizeMultiplicatior: Record<string, number> = {
  small: 0.7,
  medium: 1,
  large: 1.3,
};
