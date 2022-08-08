import { Button, Flex, Icon, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { BiPaperPlane, BiUserCircle } from "react-icons/bi";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineMessage } from "react-icons/md";
import usersMockData from "../../mock-data/users.json";

const Contact = () => {
  const [user, setUser] = useState(null);

  //get the contact id
  const router = useRouter();
  const contactId = router.query?.contactId;

  useEffect(() => {
    //query the user
    if (contactId) {
      const user = getUser();
      setUser(user);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const getUser = () => {
    const user = usersMockData.users.find((user) => user.id === +contactId);
    return user;
  };

  return (
    <Flex direction="column" align="center" justify="center" height="100vh">
      <Flex
        px={{ base: "2rem", md: "3rem" }}
        pt="2rem"
        pb="1rem"
        borderRadius="7"
        // boxShadow="2px 3px 7px 3px rgb(0 0 0 / 20%)"
        border="2px"
        borderColor="brand.primary"
        align="center"
        direction="column"
        width={{ base: "90%", lg: "35rem" }}
      >
        <Icon as={BiUserCircle} mb="1rem" w="20" h="20" color="brand.primary" />
        <Text fontSize="1.1rem" color="white">
          {user?.firstname} {user?.lastname}
        </Text>
        <Text fontSize="1.1rem" color="white">
          {user?.mobile}
        </Text>
        <Button
          onClick={() => {
            //setiting the selected user in local-storage
            const userDetails = JSON.stringify(user);
            localStorage.setItem("user", userDetails);
            router.push(`/compose`);
          }}
          mt="2rem"
          bg="brand.primary"
          color="white"
          leftIcon={<BiPaperPlane />}
          width={{ base: "100%", md: "20rem" }}
        >
          Send Message
        </Button>
      </Flex>
      <Flex
        mt="2rem"
        direction={{ base: "column", md: "row" }}
        borderColor="white"
        justify="space-evenly"
        width={{ base: "80%", md: "20rem" }}
      >
        <Button
          bg="brand.primary"
          color="white"
          border="2px"
          borderColor="brand.primary"
          mb="1rem"
          leftIcon={<BsTelephone />}
          _hover={{ bg: "brand.primary" }}
          onClick={() => router.push("/contact")}
        >
          Contacts
        </Button>
        <Button
          bg="brand.bg"
          color="brand.primary"
          border="2px"
          borderColor="brand.primary"
          leftIcon={<MdOutlineMessage />}
          _hover={{ bg: "brand.bg" }}
          onClick={() => router.push("/message")}
        >
          Messages
        </Button>
      </Flex>
    </Flex>
  );
};

Contact.getInitialProps = ({ query }) => {
  return { query };
};

export default Contact;
