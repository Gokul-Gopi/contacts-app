import { Button, Flex, Textarea } from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import { generateOtp } from "../utils";

const Compose = () => {
  return (
    <Flex direction="column" align="center" justify="center" height="100vh">
      <Flex
        px={{ base: "2rem", lg: "3rem" }}
        py="3rem"
        borderRadius="7"
        boxShadow="2px 3px 7px 3px rgb(0 0 0 / 20%)"
        align="center"
        direction="column"
        width={{ base: "90%", lg: "35rem" }}
      >
        <form style={{ width: "100%", textAlign: "center" }}>
          <FormControl isRequired>
            <FormLabel fontSize="1.2rem">Compose your message</FormLabel>
            <Textarea
              defaultValue={`Hey, your OTP is ${generateOtp()}`}
              resize="none"
              height="10rem"
            ></Textarea>
          </FormControl>
          <Button width="100%" fontSize="1.1rem" mt="1rem">
            Send
          </Button>
        </form>
      </Flex>
    </Flex>
  );
};

export default Compose;
