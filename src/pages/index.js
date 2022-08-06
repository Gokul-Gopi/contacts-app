import { Box, Flex, Heading } from "@chakra-ui/react";
import { UserCard } from "../components/UserCard";
import mockUsersData from "../mock-data/users.json";
import mockMessagesData from "../mock-data/messages.json";
import { MessageDetailCard } from "../components/MessageDetailCard";
import style from "../styles/Home.module.css";

export default function Home() {
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
          {mockMessagesData.messages.map((message, i) => {
            return (
              <MessageDetailCard
                key={`message${i}`}
                name={message.name}
                time={message.time}
                otp={message.otp}
              />
            );
          })}
        </Box>
      </Flex>
    </Flex>
  );
}
