import {
  Center,
  Container,
  FormControl,
  FormLabel,
  Stack,
  Text,
  Input,
  Button,
  FormErrorMessage,
  Box,
  useToast,
  Icon,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { object, string } from "yup";

import React, { useRef, useState } from "react";
import Card from "../../../Components/Card";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useMutation } from "react-query";
import { sendForgotMail } from "../../../api/query/UserQuery";


const ForgotPassword = () => {

  const ForgotValidationSchema = object({
    email: string().email("Email is invalid").required("Email is required"),
  });

  const [email, setEmail] = useState();
  const toast = useToast();
  const navigate = useNavigate();

  const { mutate, isLoading } = useMutation({
    mutationKey: ["forgot-email"],
    mutationFn: sendForgotMail,

    onSuccess: (data) => {
  console.log(email);      
if(email){
      navigate(`/forgot-success/${email}`);
    }},
    onError: (error) => {
      toast({
        title: "Forgot erroer",
        description: error.message,
        status: "error",
      });
    },
  });

  return (
    <Container bg="white">
      <Center minH="100vh">
        <Card>
          <Link to="/signin">
            <Icon as={AiOutlineArrowLeft} />
          </Link>
          <Text mt={4} fontWeight="medium" textStyle="h1">
            Forgot Password
          </Text>
          <Text textStyle="p2" color="black.60" mt="4">
            Enter your email address for which account you want to reset your
            password.{" "}
          </Text>
          <Formik
            initialValues={{
              email: "",
            }}
            
            onSubmit={(values) => {
              setEmail(values.email);
              mutate({ email: values.email });
            }}
            
            validationSchema={ForgotValidationSchema}
          >
            {() => (
              <Form>
                <Stack mt="8" spacing={6}>
                  <Field name="email">
                    {({ field, meta }) => (
                      <FormControl isInvalid={!!(meta.error && meta.touched)}>
                        <FormLabel htmlFor="email">Email</FormLabel>
                        <Input
                          {...field}
                          name="email"
                          type="email"
                          placeholder="Enter your email...."
                        />{" "}
                        <FormErrorMessage>{meta.error}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>

                  <Box>
                    <Button isLoading={isLoading} w="full" type="submit">
                      Reset Password
                    </Button>
                  </Box>
                </Stack>
              </Form>
            )}
          </Formik>
        </Card>
      </Center>
    </Container>
  );
};

export default ForgotPassword;
