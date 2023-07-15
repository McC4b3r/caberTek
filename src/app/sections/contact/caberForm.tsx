import React from 'react';
import { useForm } from '@formspree/react';
import {
  Box,
  Button,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Center,
  Textarea,
  VStack,
  Text,
  Grid,
  Card,
} from '@chakra-ui/react';
import { Formik, Form } from 'formik';
import { validationSchema } from './validationSchema';
import { SuccessfulSubmit } from './successfulSubmit';
import { motion } from 'framer-motion';

export const CaberForm = () => {
  const [state, handleSubmit] = useForm("xgejejor");

  if (state.succeeded) {
    return <SuccessfulSubmit />
  }

  return (
    <Card
      as={motion.div}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { duration: 1 } }}
      my={10}
      px={4}
      py={8}
      maxW="xl"
      borderRadius="lg"
    >
      <Formik
        initialValues={
          {
            firstName: "",
            lastName: "",
            email: "",
            message: ""
          }
        }
        validationSchema={validationSchema}
        onSubmit={async (values, actions) => {
          await handleSubmit(values);
          actions.setSubmitting(false)
        }}
        validateOnChange
      >
        {({ errors, touched, values, handleChange, isSubmitting }) => (
          <Form>
            <Grid
              templateColumns="1fr 1fr"
              gap={6}
              pb={8}>
              <FormControl
                isInvalid={errors.firstName && touched.firstName}>
                <Center>
                  <FormLabel
                    color="#72b9ff"
                    htmlFor="firstName">
                    First Name
                  </FormLabel>
                </Center>
                <Input
                  bgColor='#09101846'
                  id="firstName"
                  name="firstName"
                  value={values.firstName}
                  onChange={handleChange}
                  placeholder="First Name" />
                <FormErrorMessage>
                  {errors.firstName}
                </FormErrorMessage>
              </FormControl>
              <FormControl
                isInvalid={errors.lastName && touched.lastName}>
                <Center>
                  <FormLabel
                    color="#72b9ff"
                    htmlFor="lastName">
                    Last Name
                  </FormLabel>
                </Center>
                <Input
                  bgColor='#09101846'
                  id="lastName"
                  name="lastName"
                  value={values.lastName}
                  onChange={handleChange}
                  placeholder="Last Name" />
                <FormErrorMessage>
                  {errors.lastName}
                </FormErrorMessage>
              </FormControl>
            </Grid>
            <VStack spacing={8}>
              <FormControl
                isInvalid={errors.email && touched.email}>
                <Center>
                  <FormLabel
                    color="#72b9ff"
                    pl={2}
                    htmlFor="email">
                    Email
                  </FormLabel>
                </Center>
                <Input
                  bgColor='#09101846'
                  id="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  placeholder="Email Address" />
                <FormErrorMessage>
                  {errors.email}
                </FormErrorMessage>
              </FormControl>
              <FormControl
                isInvalid={errors.message && touched.message}>
                <Center>
                  <FormLabel
                    color="#72b9ff"
                    pl={2}
                    htmlFor="message">
                    Message
                  </FormLabel>
                </Center>
                <Textarea
                  bgColor='#09101846'
                  id="message"
                  name="message"
                  value={values.message}
                  onChange={handleChange}
                  placeholder="How can caberTek help?" />
                <FormErrorMessage>
                  {errors.message}
                </FormErrorMessage>
              </FormControl>
              <Button
                mt={4}
                bgColor='#2f66a478'
                boxShadow='0px 4px 5px #05030382'
                color="#72b9ff"
                _hover={{ color: '#91ca20' }}
                w="80%"
                isLoading={isSubmitting}
                type="submit"
              >
                Submit
              </Button>
            </VStack>
          </Form>
        )}
      </Formik>
    </Card>
  )
}
