import { Burger } from "@/types";
import { handleDecimal } from "@/utils/utils";
import React, { useState } from "react";

interface Order {
  burgersOrdered: Burger[];
  discount?: number;
  totalPrice?: number;
  discountedPrice?: number;
  fixedPrice?: number;
}

interface OrderContextProps extends Order {
  addBurger: (burger: Burger) => void;
  removeBurger: (burger: Burger) => void;
  addDiscount: (code: number) => void;
  addPromotion: (code: number) => void;
}

type Burger = {
  name: string;
  size: string;
  price: number;
  fixedPrice: number;
  id: string;
};

export const OrderContext = React.createContext<OrderContextProps | null>(null);

export const dscountCodeArray = [123];
export const promotionCodeArray = [789];

export const OrderProvider = ({ children }: { children: React.ReactNode }) => {
  const [order, setOrder] = useState<Order>({
    burgersOrdered: [],
    discount: 0,
  });

  const addBurger = (burger: Burger) => {
    setOrder((prev) => {
      const newState = {
        ...prev,
        burgersOrdered: [...prev.burgersOrdered, burger],
      };

      return newState;
    });
  };

  const removeBurger = (burger: Burger) => {
    setOrder((prev) => {
      const newState = {
        ...prev,
        burgersOrdered: prev.burgersOrdered.filter((b) => b.id !== burger.id),
      };

      return newState;
    });
  };

  const addDiscount = (code: number) => {
    if (dscountCodeArray.includes(code)) {
      setOrder((prev) => {
        const newState = {
          ...prev,
          discount: 0.1,
        };

        return newState;
      });
    }
  };

  const addPromotion = (code: number) => {
    if (promotionCodeArray.includes(code)) {
      setOrder((prev) => {
        const itemMap = {};
        for (const item of prev.burgersOrdered) {
          const itemKey = `${item.name}-${item.size}`;
          if (itemMap[itemKey]) {
            prev.burgersOrdered[itemMap[itemKey]].price = 0;
            delete itemMap[itemKey];
          } else {
            itemMap[itemKey] = prev.burgersOrdered.indexOf(item);
          }
        }

        const newState = {
          ...prev,
        };

        return newState;
      });
    }
  };

  const totalPrices = order?.burgersOrdered?.map((burger) => burger.price);
  const totalPrice = handleDecimal(totalPrices?.reduce((a, b) => a + b, 0));
  const discount = order?.discount;
  const fixedPrice = order?.burgersOrdered
    ?.map((burger) => burger.fixedPrice)
    .reduce((a, b) => a + b, 0);
  const discountedPrice =
    totalPrice && totalPrice - (discount ? totalPrice * discount : 0);

  const contextValue: OrderContextProps = {
    addDiscount,
    addPromotion,
    addBurger,
    removeBurger,
    burgersOrdered: order?.burgersOrdered,
    discount,
    fixedPrice,
    totalPrice,
    discountedPrice,
  };

  return (
    <OrderContext.Provider value={contextValue}>
      {children}
    </OrderContext.Provider>
  );
};
