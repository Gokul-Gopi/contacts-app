import { Box, Flex, Heading, Icon, IconButton, Text } from "@chakra-ui/react";
import { UserCard } from "../components/UserCard";
import mockUsersData from "../mock-data/users.json";
import style from "../styles/Home.module.css";
import { BsTelephone } from "react-icons/bs";
import { BiUndo } from "react-icons/bi";
import { useRouter } from "next/router";

export default function Contact() {
  const router = useRouter();
  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      align="center"
      justify="space-evenly"
      height="100vh"
      px={{ base: "0.5rem", md: "4rem" }}
    >
      <Flex
        direction="column"
        width={{ base: "90%", md: "50%", lg: "30%" }}
        borderRadius="8"
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
            as={BsTelephone}
            w={{ base: "8", md: "10" }}
            h={{ base: "8", md: "10" }}
            mr="0.6rem"
          />
          <Heading size={{ base: "xl", md: "2xl" }}>Contacts</Heading>
        </Flex>

        <Box
          className={style.scrollContainer}
          height="25rem"
          width={{ base: "100%", md: "auto" }}
          overflowY="auto"
        >
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
        <Text
          textAlign="center"
          fontSize={{ base: "0.8rem", md: "1rem" }}
          color="brand.greyV2"
          mt="1rem"
        >
          Select a contact to send the message
        </Text>
      </Flex>
    </Flex>
  );
}
