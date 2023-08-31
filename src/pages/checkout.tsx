import { Flex, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import { Button } from "@chakra-ui/react";

function checkout() {
  return (
    <Flex
      width="100%"
      height="100vh"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Flex flexDirection="column" justifyContent="center" alignItems="center">
        <Text fontSize="3xl">Nice one :)</Text>
        <Text>Your order was successful</Text>
        <Text>You'll receive your order soon</Text>
        <NextLink href="/ " passHref>
          <Button>Go back</Button>
        </NextLink>
      </Flex>
    </Flex>
  );
}

export default checkout;
