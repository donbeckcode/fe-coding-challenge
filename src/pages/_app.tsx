import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { OrderProvider } from "@/providers/OrderProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <OrderProvider>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>{" "}
    </OrderProvider>
  );
}
