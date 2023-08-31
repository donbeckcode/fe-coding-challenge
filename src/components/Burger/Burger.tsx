import { Flex, Button, Text, Box } from "@chakra-ui/react";
import { v4 as uuidv4 } from "uuid";
import { useState, useContext } from "react";

import { Burger } from "@/types";
import { OrderContext } from "@/providers/OrderProvider";
import { priceCalculator } from "@/utils/utils";

const sizes = ["small", "medium", "large"];

const BurgerComponent = ({ name, price }: Burger) => {
  const context = useContext(OrderContext);
  const [size, setSize] = useState<string>("medium");

  return (
    <Flex alignItems="center" justifyContent="space-between" key={name}>
      <Text color="black">{name}</Text>
      <Flex alignItems="center" gap={2}>
        <Flex>
          {sizes.map((burgerSize: string) => (
            <Button
              key={burgerSize}
              isActive={size === burgerSize}
              onClick={() => {
                setSize(burgerSize);
              }}
            >
              {burgerSize.toUpperCase().charAt(0)}
            </Button>
          ))}
        </Flex>
        <Flex justifyContent="center" w="56px">
          <Text fontWeight="800" color="red">
            {priceCalculator(price, size)} ,-
          </Text>
        </Flex>
        <Button
          onClick={() => {
            context?.addBurger({
              name,
              fixedPrice: priceCalculator(price, size),
              price: priceCalculator(price, size),
              size,
              id: uuidv4(),
            });
          }}
        >
          <Text color="black">+</Text>
        </Button>
      </Flex>
    </Flex>
  );
};

export default BurgerComponent;
