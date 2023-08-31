import { sizeMultiplicatior } from "@/const";

export const handleDecimal = (num: number) => {
  return Math.round(num * 100) / 100;
};

export const priceCalculator = (price: number, size: string) => {
  return handleDecimal(
    price * sizeMultiplicatior[size as keyof typeof sizeMultiplicatior]
  );
};
