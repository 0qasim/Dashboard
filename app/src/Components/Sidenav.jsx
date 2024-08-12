import {
  Box,
  HStack,
  Icon,
  Stack,
  Text,
  Heading,
  list,
} from "@chakra-ui/react";
import { RxDashboard } from "react-icons/rx";
import { BsArrowDownUp } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";

const Sidenav = () => {
  const navLinks = [
    { icon: RxDashboard, text: "Dashboard", link: "/" },

    { icon: BsArrowDownUp, text: "Transactions", link: "/transaction" },
  ];

  const location = useLocation();
  console.log("location", location);

  const isActiveLink = (link) => {
   return location.pathname === link;
  };
  return (
    <Stack
      bg="white"
      justify="space-between"
      w={{
        base: "full",
        lg: "16rem",
      }}
      h="100vh"
      boxShadow={{
        base: "none",
        lg: "lg",
      }}
    >
      <Box>
        <Heading as="h1" fontSize="20px" textAlign="center" pt="3.5rem">
          @qaziqasim07
        </Heading>
        <Box mt="6" mx="3">
          {navLinks.map((nav) => (
            <Link to={nav.link} key={nav.text}>
              <HStack
               bg={isActiveLink(nav.link) ? "#f3f3f7" : "transparent"}
               color={isActiveLink(nav.link) ? "#171717" : "#797e82"}
                borderRadius="10px"
                py="3"
                px="4"
                _hover={{
                  color: "#171717",
                  bg: "#f3f3f7",
                }}
               >
                <Icon as={nav.icon} />
                <Text fontSize="14px" fontWeight="medium">
                  {nav.text}
                </Text>
                {console.log(nav)}{" "}
              </HStack>
            </Link>
          ))}
        </Box>
      </Box>

      <Box mt="6" mx="3" mb="6">
        <Link to="/support">
          
          <HStack
            bg={isActiveLink("/support") ? "#f3f3f7" : "transparent"}
            color={isActiveLink("/support") ? "#171717" : "#797e82"}
            py="3"
            px="4"
          borderRadius="10px"
            _hover={{
              color: "#171717",
              bg: "#f3f3f7",
            }}
           
          >
            <Icon as={BiSupport} />
            <Text fontSize="14px" fontWeight="medium">
              Support
            </Text>
          </HStack>
        </Link>
      </Box>
    </Stack>
  );
};

export default Sidenav;
