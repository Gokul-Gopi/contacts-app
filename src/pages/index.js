import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineMessage } from "react-icons/md";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <Flex height="100vh" align="center" justify="center">
      <Box textAlign="center">
        <Heading color="brand.primary" size="xl">
          Welcome to
        </Heading>
        <Heading size={{ base: "3xl", md: "4xl" }} color="white" mb="3rem">
          Contacts-app
        </Heading>
        <Flex
          direction={{ base: "column", md: "row" }}
          borderColor="white"
          justify="space-evenly"
          flexWrap="wrap"
          width={{ base: "80%", md: "23rem" }}
          m="auto"
        >
          <Button
            onClick={() => router.push("/contact")}
            _hover={{ transform: "scale(1.1)" }}
            leftIcon={<BsTelephone />}
            bg="brand.primary"
            color="white"
            size="lg"
            mb="1rem"
          >
            Contacts
          </Button>
          <Button
            onClick={() => router.push("/message")}
            _hover={{ transform: "scale(1.1)" }}
            leftIcon={<MdOutlineMessage />}
            size="lg"
          >
            Messages
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
}
