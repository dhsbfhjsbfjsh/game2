import { HStack, Image, space } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import ColorModeSwitch from "./ColorModeSwitch";
import Searchlnput from "./Searchlnput";

interface props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: props) => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px" />
      <Searchlnput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
