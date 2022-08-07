import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import { UserCard } from "../components/UserCard";
import mockUsersData from "../mock-data/users.json";
import { MessageDetailCard } from "../components/MessageDetailCard";
import style from "../styles/Home.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { backend } from "../utils/api";
import { Skeleton, SkeletonCircle, SkeletonText } from "@chakra-ui/react";

export default function Home() {
  const [messages, setMessages] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    getMessage();
  }, []);

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
      direction={{ base: "column", md: "row" }}
      align="center"
      justify="space-evenly"
      height={{ base: "auto", lg: "100vh" }}
      px={{ base: "2rem", md: "4rem" }}
      my={{ base: "4rem", lg: "0" }}
    >
      <Flex
        direction="column"
        width={{ base: "90%", md: "30%" }}
        borderRadius="8"
        mb={{ base: "2rem", md: "0" }}
      >
        <Heading size="lg" color="brand.primary" mb="1rem">
          Contacts
        </Heading>
        <Box className={style.scrollContainer} height="25rem" overflowY="auto">
          {mockUsersData.users.map((user, i) => {
            return (
              <UserCard
                key={`user${i}`}
                id={user.id}
                firstname={user.firstname}
                lastname={user.lastname}
              />
            );
          })}
        </Box>
      </Flex>

      <Flex
        direction="column"
        borderRadius="8"
        width={{ base: "90%", md: "20rem" }}
      >
        <Heading size="lg" color="brand.primary" mb="1rem">
          Recent messages
        </Heading>
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
}
