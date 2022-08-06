import { Flex, Icon, Text } from "@chakra-ui/react";
import { MdMessage } from "react-icons/md";

export const MessageDetailCard = ({ name, otp, time }) => {
  return (
    <Flex
      direction="column"
      borderBottom="1px"
      borderColor="brand.grey"
      position="relative"
      width="100%"
      p="0.8rem"
      // bg="#f0ece2"
    >
      <Icon
        as={MdMessage}
        position="absolute"
        top="0.5rem"
        right="0.7rem"
        color="#dbd8e3"
        w="5"
        h="5"
      />
      <Text fontWeight="bold" fontSize="1.1rem">
        {name}
      </Text>
      <Flex justify="space-between" mt="0.2rem">
        <Text textDecor="underline">{otp}</Text>
        <Text color="#b7b7b7">{time}</Text>
      </Flex>
    </Flex>
  );
};
