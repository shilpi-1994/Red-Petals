import React from "react";
import { Menu, Button, VStack, Select, CheckIcon, Center, NativeBaseProvider } from "native-base";

const MenuDrawer = () => {
  const [shouldOverlapWithTrigger] = React.useState(false);
  const [position, setPosition] = React.useState("auto");
  return <VStack space={6} alignSelf="flex-start" w="100%" position="relative" bottom="400px" right="500px">
      <Menu w="160" shouldOverlapWithTrigger={shouldOverlapWithTrigger} // @ts-ignore
    placement={position == "auto" ? undefined : position} trigger={triggerProps => {
      return <Button alignSelf="center" variant="solid" {...triggerProps}>
              Menu
            </Button>;
    }}>
        <Menu.Item>Donate blood</Menu.Item>
        <Menu.Item>Ask for blood</Menu.Item>
        <Menu.Item>My history</Menu.Item>
      </Menu>
    </VStack>;
}

export default MenuDrawer;