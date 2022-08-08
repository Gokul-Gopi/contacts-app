import { Button, Flex, Textarea, useToast } from "@chakra-ui/react";
import { FormControl, FormLabel, FormErrorMessage } from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { BiPaperPlane } from "react-icons/bi";
import { backend } from "../utils/api";
import { generateOtp, getErrorMessage } from "../utils/helpers";
import NextLink from "next/link";

const Compose = ({ otp }) => {
  const toast = useToast();
  const router = useRouter();
  const [isLoading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  //submit handler
  const sendMessageToUser = async (data) => {
    //fetching the user-details from local-storate
    const userDetails = JSON.parse(localStorage.getItem("user"));
    delete userDetails.id;

    try {
      setLoading(true);
      //network call for sending the message
      const response = await axios.post(`${backend}/message`, {
        ...userDetails,
        ...data,
        otp: otp.toString(),
      });
      if (response?.status === 201) {
        toast({
          status: "success",
          description: "Message sent successfully!",
          isClosable: true,
        });
        router.push("/message");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: `${getErrorMessage(error)}`,
        status: "error",
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Flex direction="column" align="center" justify="center" height="100vh">
      <Flex
        px={{ base: "2rem", lg: "3rem" }}
        py="3rem"
        borderRadius="8"
        border="2px"
        borderColor="brand.primary"
        align="center"
        direction="column"
        width={{ base: "90%", lg: "35rem" }}
      >
        <form
          onSubmit={handleSubmit(sendMessageToUser)}
          style={{ width: "100%", textAlign: "center" }}
        >
          <FormControl isInvalid={errors["message"] ? true : false}>
            <FormLabel color="white" fontSize="1.2rem">
              Compose your message
            </FormLabel>
            <Textarea
              defaultValue={`Hey, your OTP is ${
                otp ? otp : "<Failed to generate otp>"
              }`}
              color="white"
              borderColor="brand.primary"
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
          <Button
            type="submit"
            width="100%"
            fontSize="1.1rem"
            mt="2rem"
            isLoading={isLoading}
            leftIcon={<BiPaperPlane />}
            loadingText="sending..."
            bg="brand.primary"
            color="white"
          >
            Send
          </Button>
        </form>
      </Flex>
      <NextLink href="/contact">
        <Button
          mt="1rem"
          border="2px"
          borderColor="brand.primary"
          color="brand.primary"
          bg="brand.bg"
          _hover={{ bg: "brand.bg" }}
        >
          Back to contacts
        </Button>
      </NextLink>
    </Flex>
  );
};

export async function getStaticProps() {
  const otp = generateOtp();
  return {
    props: {
      otp,
    },
  };
}
export default Compose;
