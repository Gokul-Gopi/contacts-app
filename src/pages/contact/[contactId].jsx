import { Button, Flex, Icon, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { BiUserCircle } from "react-icons/bi";
import usersMockData from "../../mock-data/users.json";

const Contact = () => {
  const [user, setUser] = useState(null);

  //get the contact id
  const router = useRouter();
  const contactId = router.query?.contactId;

  useEffect(() => {
    if (contactId) {
      const user = getUser();
      setUser(user);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  //query the user
  const getUser = () => {
    const user = usersMockData.users.find((user) => user.id === +contactId);
    return user;
  };

  return (
    <Flex direction="column" align="center" justify="center" height="100vh">
      <Flex
        px="3rem"
        pt="2rem"
        pb="1rem"
        borderRadius="7"
        boxShadow="2px 3px 7px 3px rgb(0 0 0 / 20%)"
        align="center"
        direction="column"
        width={{ base: "90%", lg: "35rem" }}
      >
        <Icon as={BiUserCircle} mb="1rem" w="20" h="20" />
        <Text fontSize="1.1rem">
          {user?.firstname} {user?.lastname}
        </Text>
        <Text fontSize="1.1rem">{user?.mobile}</Text>
        <Button onClick={() => router.push("/compose")} mt="2rem">
          Send Message
        </Button>
      </Flex>
    </Flex>
  );
};

export default Contact;
