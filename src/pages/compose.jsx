import { Button, Flex, Textarea } from "@chakra-ui/react";
import { FormControl, FormLabel, FormErrorMessage } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { generateOtp } from "../utils";

const Compose = () => {
  const [otp, setOtp] = useState();

  useEffect(() => {
    const otpGenerated = generateOtp();
    setOtp(otpGenerated);
  }, [otp]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const sendMessageToUser = (data) => {
    console.log(...data, otp);
  };

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
        <form
          onSubmit={handleSubmit(sendMessageToUser)}
          style={{ width: "100%", textAlign: "center" }}
        >
          <FormControl isInvalid={errors["message"] ? true : false}>
            <FormLabel fontSize="1.2rem">Compose your message</FormLabel>
            <Textarea
              defaultValue={`Hey, your OTP is ${
                otp ? otp : "<Failed to generate otp>"
              }`}
              resize="none"
              height="10rem"
              {...register("message", {
                required: {
                  value: true,
                  message: "Message is required",
                },
                maxLength: {
                  value: 100,
                  message: "Message length cannot exceed 100 characters",
                },
                minLength: {
                  value: 6,
                  message: "Message should be atleast 6 charaters long",
                },
              })}
            ></Textarea>
            <FormErrorMessage textAlign="left">
              {errors["message"]?.message}
            </FormErrorMessage>
          </FormControl>
          <Button type="submit" width="100%" fontSize="1.1rem" mt="2rem">
            Send
          </Button>
        </form>
      </Flex>
    </Flex>
  );
};

export default Compose;
