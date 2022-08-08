import {
  Box,
  Flex,
  Heading,
  Icon,
  IconButton,
  Skeleton,
  Stack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { MessageDetailCard } from "../components/MessageDetailCard";
import style from "../styles/Home.module.css";
import { MdOutlineMessage } from "react-icons/md";
import axios from "axios";
import { backend } from "../utils/api";
import { BiUndo } from "react-icons/bi";
import { useRouter } from "next/router";

const Message = () => {
  const [messages, setMessages] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const router = useRouter();

  const getMessage = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${backend}/message`);
      if (response?.status === 200) {
        setMessages(response?.data?.data);
      }
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMessage();
  }, []);

  if (isLoading) {
    return (
      <Stack
        display="flex"
        align="center"
        justify="center"
        spacing={{ base: "2rem", md: "5rem" }}
        height="100vh"
      >
        <Skeleton
          height={{ base: "4rem", md: "5rem" }}
          width={{ base: "80%", lg: "80rem" }}
        />
        <Skeleton
          height={{ base: "4rem", md: "5rem" }}
          width={{ base: "80%", lg: "80rem" }}
        />
      </Stack>
    );
  }

  return (
    <Flex
      height="100vh"
      direction={{ base: "column", md: "row" }}
      align="center"
      justify="space-evenly"
      px={{ base: "0.5rem", md: "4rem" }}
    >
      <Flex
        direction="column"
        borderRadius="8"
        width={{ base: "90%", md: "50%", lg: "30%" }}
        mb={{ base: "2rem", md: "0" }}
        border="2px"
        borderColor="brand.primary"
        p="2rem"
        position="relative"
      >
        <IconButton
          onClick={() => router.back()}
          position="absolute"
          top={{ base: "0.1rem", md: "0.4rem" }}
          right={{ base: "0.2rem", md: "0.5rem" }}
          aria-label="back-button"
          icon={<BiUndo />}
          bg="transparent"
          color="#fb813e"
          size="md"
          fontSize={{ base: "20px", md: "25px" }}
          _hover={{ bg: "transparent" }}
        />
        <Flex color="white" align="center" mb="1rem">
          <Icon
            as={MdOutlineMessage}
            w={{ base: "8", md: "10" }}
            h={{ base: "8", md: "10" }}
            mr="0.6rem"
          />
          <Heading size={{ base: "xl", md: "2xl" }}>Messages</Heading>
        </Flex>
        <Box className={style.scrollContainer} height="25rem" overflowY="auto">
          {messages.map((message, i) => {
            return (
              <MessageDetailCard
                key={`message${i}`}
                name={`${message?.user?.firstname} ${message?.user?.lastname}`}
                time={message.date}
                otp={message.otp}
              />
            );
          })}
        </Box>
      </Flex>
    </Flex>
  );
};

export default Message;
