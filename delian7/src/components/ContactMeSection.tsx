import React, {useEffect} from "react";
import { Formik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  Spinner,
  VStack,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import {useAlertContext} from "../context/alertContext";

const LandingSection = () => {
  const {isLoading, response, submit} = useSubmit();
  const { onOpen } = useAlertContext();

  useEffect(() => {
    if (response) {
      onOpen(response.type, response.message)
    }
  }, [onOpen, response])

  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#512DA8"
      py={16}
      spacing={8}
    >
      <VStack w="1024px" p={32} alignItems="flex-start">
        <Heading as="h1" id="contactme-section">
          Contact me
        </Heading>
        <Box p={6} rounded="md" w="100%">
          <Formik
            initialValues={{ firstName: '', email: '', type: '', comment: '' }}
            onSubmit={(values, { resetForm }) => {
              submit('https://example.com', values)
              resetForm()
            }}
            validationSchema={Yup.object({
              firstName: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
              email: Yup.string().email('Invalid email address').required('Required'),
              comment: Yup.string().required('Required')
            })}
          >
            {formik => (
              <form onSubmit={formik.handleSubmit}>
                <VStack spacing={4}>
                  <FormControl isInvalid={formik.touched.firstName && !!formik.errors.firstName}>
                    <FormLabel htmlFor="firstName">Name</FormLabel>
                    <Input
                      id="firstName"
                      {...formik.getFieldProps('firstName')}
                    />
                    <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
                  </FormControl>
                  <FormControl isInvalid={formik.touched.email && !!formik.errors.email}>
                    <FormLabel htmlFor="email">Email Address</FormLabel>
                    <Input
                      id="email"
                      type="email"
                      {...formik.getFieldProps('email')}
                    />
                    <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                  </FormControl>
                  <FormControl>
                    <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                    <Select
                      id="type"
                      {...formik.getFieldProps('type')}
                    >
                      <option value="hireMe">Freelance project proposal</option>
                      <option value="openSource">
                        Open source consultancy session
                      </option>
                      <option value="other">Other</option>
                    </Select>
                  </FormControl>
                  <FormControl isInvalid={formik.touched.comment && !!formik.errors.comment}>
                    <FormLabel htmlFor="comment">Your message</FormLabel>
                    <Textarea
                      id="comment"
                      height={250}
                      {...formik.getFieldProps('comment')}
                    />
                    <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
                  </FormControl>
                  <Button type="submit" isDisabled={isLoading} colorScheme="purple" width="full">
                    {isLoading ? <Spinner /> : 'Submit'}
                  </Button>
                </VStack>
              </form>
            )}
          </Formik>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;
