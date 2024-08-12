import {
  Box,
  Heading,
  HStack,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { FaBars, FaUserTie } from "react-icons/fa";
import useAuth from "../hooks/useAuth";
const Topnav = ({ title, onOpen }) => {

const{logout}=useAuth();
  return (
    <div>
      <Box px="4" bg="white">
        <HStack maxW="70rem" justify="space-between" h={16} mx="auto">
          <Icon
            as={FaBars}
            onClick={onOpen}
            display={{
              base: "block",
              lg: "none",
            }}
          />
          <Heading fontSize="28px" fontWeight="medium">
            {title}
          </Heading>
          <Menu>
            <MenuButton>
              <Icon fontSize="24px" as={FaUserTie} />
            </MenuButton>
            <MenuList>
              <MenuItem onClick={logout}>LogOut</MenuItem>
              <MenuItem>Support</MenuItem>
            </MenuList>
          </Menu>
        </HStack>
      </Box>
    </div>
  );
};

export default Topnav;
