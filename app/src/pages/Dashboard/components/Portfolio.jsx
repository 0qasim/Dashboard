import { Button, HStack, Icon, Stack, Tag, Text } from "@chakra-ui/react";
import React from "react";
import {
  AiOutlineArrowDown,
  AiOutlineArrowUp,
  AiOutlineInfoCircle,
} from "react-icons/ai";
const Portfolio = () => {
  return (
    <div>
      <HStack justify="space-between" bg="white" borderRadius="xl" p="6"
      align={{
        base:"flex-start",
        xl:"center",
      }}
      flexDir={
        {base:"column",
        xl:"row",
        }   }
      >

        <HStack spacing="16px">
          <Stack>
            <HStack color="black.80">
              <Text fontSize="14px">Total Portfolio Views</Text>
              <Icon as={AiOutlineInfoCircle} />
            </HStack>
            <Text textStyle="h2">$ 122,433.32</Text>
          </Stack>
          <Stack>
            <HStack color="black.80">
              <Text fontSize="sm">Wallet Balance</Text>
            </HStack>
            <HStack>
              <HStack>
                <Text textStyle="h2">$ 22.4333200</Text>
                <Tag>BTC</Tag>
              </HStack>
              <HStack>
                <Text textStyle="h2">4,895702.00</Text>
                <Tag>PKR</Tag>
              </HStack>
            </HStack>
          </Stack>
        </HStack>

        <HStack>
          <Button leftIcon={<Icon as={AiOutlineArrowDown}></Icon>}>
            Deposit
          </Button>
          <Button leftIcon={<Icon as={AiOutlineArrowUp}></Icon>}>
            Withdraw
          </Button>
        </HStack>
      </HStack>
    </div>
  );
};

export default Portfolio;
