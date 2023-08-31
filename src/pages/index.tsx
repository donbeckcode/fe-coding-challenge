import { useContext } from "react";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import NextLink from "next/link";

import { burgersList } from "@/const";
import BurgerComponent from "@/components/Burger/Burger";
import { OrderContext } from "@/providers/OrderProvider";
import Order from "@/components/Order/Order";

function index() {
  const context = useContext(OrderContext);

  return (
    context && (
      <>
        <Flex justifyContent="center">
          <Flex color="white" w="100%">
            <Box p={32} flex="1" bg="tomato">
              <Text fontSize="2xl">ORDER</Text>
              <Box
                sx={{
                  borderRadius: "24px",
                }}
                p={4}
                bg="white"
              >
                {burgersList.map((burger) => (
                  <BurgerComponent
                    key={burger.name}
                    name={burger.name}
                    price={burger.price}
                    fixedPrice={burger.price}
                  />
                ))}
              </Box>
            </Box>
            <Order />
          </Flex>
        </Flex>
        <Flex justifyContent="center" color="white">
          <Box
            sx={{
              pointerEvents: context.totalPrice === 0 ? "none" : "auto",
            }}
            p={32}
          >
            <NextLink href="/checkout" passHref>
              <Button>CHECKOUT</Button>
            </NextLink>
          </Box>
        </Flex>
      </>
    )
  );
}

export default index;
