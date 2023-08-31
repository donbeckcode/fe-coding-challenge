import { OrderContext } from "@/providers/OrderProvider";
import { BurgerWithSize } from "@/types";
import { handleDecimal } from "@/utils/utils";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React, { useContext } from "react";

function OrderItem({ burger }: { burger: BurgerWithSize }) {
  const context = useContext(OrderContext);
  return (
    <Flex key={burger.id} justifyContent="space-between" alignItems="center">
      <Text color="black">{burger.name}</Text>
      <Flex alignItems="center" gap={2}>
        <Text color="black">{burger.size}</Text>
        <Button
          onClick={() => {
            context?.removeBurger(burger);
          }}
        >
          <Text color="black">REMOVE</Text>
        </Button>
        <Box
          sx={{
            width: "40px",
          }}
        >
          <Text color="red">{handleDecimal(burger.price)}</Text>
        </Box>
      </Flex>
    </Flex>
  );
}

export default OrderItem;
