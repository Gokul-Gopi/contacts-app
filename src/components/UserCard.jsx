import { Flex, Icon, Text } from "@chakra-ui/react";
import { BiUserCircle } from "react-icons/bi";

export const UserCard = ({ firstname, lastname }) => {
  return (
    <Flex
      align="center"
      borderBottom="1px"
      borderColor="brand.primary"
      py="0.7rem"
      _hover={{ bg: "brand.primary", cursor: "pointer" }}
      px="0.4rem"
    >
      <Icon mr="0.3rem" as={BiUserCircle} w="6" h="6" />
      <Flex fontSize="1.1rem">
        <Text mr="0.3rem">{firstname}</Text>
        <Text>{lastname}</Text>
      </Flex>
    </Flex>
  );
};
