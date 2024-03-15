import { HStack, Image, space } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import ColorModeSwitch from "./ColorModeSwitch";
import Searchlnput from "./Searchlnput";

const NavBar = () => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px" />
      <Searchlnput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
