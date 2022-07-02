//@ts-check
import { Center, extendTheme, NativeBaseProvider, VStack } from "native-base";
import React from "react";
import { ExampleModal } from "./components/example-modal";

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

// extend the theme
export const theme = extendTheme({ config });

export default function App() {
  return (
    <NativeBaseProvider>
      <Center
        _dark={{ bg: "blueGray.900" }}
        _light={{ bg: "blueGray.50" }}
        px={4}
        flex={1}
      >
        <VStack space={5} alignItems="center">
          <ExampleModal />
        </VStack>
      </Center>
    </NativeBaseProvider>
  );
}
