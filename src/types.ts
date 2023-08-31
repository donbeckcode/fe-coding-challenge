export interface Burger {
  name: string;
  price: number;
  fixedPrice: number;
}

export interface BurgerSize {
  size: string;
}

export interface BurgerWithSize extends Burger {
  size: string;
  id: string;
}
