import { Flex, Icon, Text } from "@chakra-ui/react";
import { MdMessage } from "react-icons/md";
import dayjs from "dayjs";
import LocalizedFormat from "dayjs/plugin/localizedFormat";
//import day js to show date-time in localised format in the message card
dayjs.extend(LocalizedFormat);

export const MessageDetailCard = ({ name, otp, time }) => {
  return (
    <Flex
      direction="column"
      borderBottom="1px"
      borderColor="brand.grey"
      position="relative"
      width="100%"
      p="0.8rem"
      color="white"
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
      <Text fontWeight="bold" fontSize={{ base: "1rem", md: "1.1rem" }}>
        {name}
      </Text>
      <Flex justify="space-between" mt="0.5rem">
        <Text textDecor="underline" fontSize={{ base: "0.9rem", md: "1rem" }} s>
          {otp}
        </Text>
        <Text
          ml="1rem"
          fontSize={{ base: "0.8rem", md: "1rem" }}
          color="#b7b7b7"
          width={{ base: "6rem", md: "auto" }}
        >
          {dayjs(time).format("LLL")}
        </Text>
      </Flex>
    </Flex>
  );
};
