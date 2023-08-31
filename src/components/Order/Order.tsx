import { OrderContext } from "@/providers/OrderProvider";
import { Flex, Button, Box, Text, Input, Stack } from "@chakra-ui/react";
import React, { useContext } from "react";
import { handleDecimal } from "../../utils/utils";
import { BurgerWithSize } from "@/types";
import OrderItem from "./OrderItem";

function Order() {
  const context = useContext(OrderContext);
  const [discount, setDiscount] = React.useState<number>();
  const [promotion, setPromotion] = React.useState<number>();
  return (
    context && (
      <Box p={32} flex="1" bg="blue">
        <Text fontSize="2xl">ORDER SUMMARY</Text>
        {context && context.burgersOrdered && (
          <Flex
            p={4}
            mb={6}
            bg="white"
            flexDir="column"
            sx={{
              borderRadius: "24px",
            }}
          >
            {context.burgersOrdered.map((burger: BurgerWithSize) => (
              <OrderItem key={burger.id} burger={burger} />
            ))}
            <Flex justifyContent="end" gap="36px">
              <Text color="black" fontWeight="800">
                TOTAL:
              </Text>
              <Text color="red" fontWeight="800">
                {context.discountedPrice},-
              </Text>
            </Flex>
            {context?.fixedPrice && context?.discountedPrice ? (
              <Flex justifyContent="end" gap="36px">
                <Text color="black" fontWeight="800">
                  SAVINGS:
                </Text>
                <Text color="red" fontWeight="800">
                  {handleDecimal(
                    context?.fixedPrice - context?.discountedPrice
                  )}
                </Text>
              </Flex>
            ) : null}
          </Flex>
        )}
        {context?.totalPrice ? (
          <>
            <Stack>
              <Flex gap={4} justifyContent="end" alignItems="center">
                <Text>Got promotion code? (789)</Text>
                <Input
                  onChange={(e) => {
                    setPromotion(parseInt(e.target.value));
                  }}
                  placeholder="type it here"
                  w="150px"
                />
                <Button
                  onClick={() => {
                    promotion && context.addPromotion(promotion);
                  }}
                >
                  Submit
                </Button>
              </Flex>
              <Flex gap={4} justifyContent="end" alignItems="center">
                <Text>Got discount code? (123)</Text>
                <Input
                  onChange={(e) => {
                    setDiscount(parseInt(e.target.value));
                  }}
                  placeholder="type it here"
                  w="150px"
                />
                <Button
                  onClick={() => {
                    discount && context.addDiscount(discount);
                  }}
                >
                  Submit
                </Button>
              </Flex>
            </Stack>
          </>
        ) : (
          <Text>Please choose your burger(s)</Text>
        )}
      </Box>
    )
  );
}

export default Order;
