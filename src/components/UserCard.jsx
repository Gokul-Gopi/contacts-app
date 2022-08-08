import { Flex, Icon, Text } from "@chakra-ui/react";
import { BiUserCircle } from "react-icons/bi";
import NextLink from "next/link";

export const UserCard = ({ firstname, lastname, id }) => {
  return (
    <NextLink href={`/contact/${id}`}>
      <Flex
        align="center"
        borderBottom="1px"
        borderColor="brand.primary"
        py="0.7rem"
        _hover={{ bg: "brand.primary", cursor: "pointer", color: "white" }}
        px="0.4rem"
      >
        <Icon mr="0.3rem" as={BiUserCircle} w="6" h="6" color="brand.greyV2" />
        <Flex fontSize={{ base: "1rem", md: "1.1rem" }} color="white">
          <Text mr="0.3rem">{firstname}</Text>
          <Text>{lastname}</Text>
        </Flex>
      </Flex>
    </NextLink>
  );
};
