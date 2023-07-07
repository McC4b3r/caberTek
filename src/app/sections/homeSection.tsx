'use client'

import React from 'react';
import { motion } from 'framer-motion';
import {
  Image,
  Container,
  Heading,
  Box,
  VStack,
  Divider,
  Center,
} from '@chakra-ui/react';


export const HomeSection = () => {

  return (
    <Box
      minH="85vh"
      bgGradient="linear(to-b, #1a202c 0%, #121417 70%)"
    >
      <Container
        maxW="85%"
      >
        <Box
        >
          <Center>
            <VStack
              mt={4}
            >
              <Heading
                as={motion.div}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, transition: { duration: 1 } }}
                pb={4}
                size="3xl"
                color="#00a6a2"

              >
                Need help with your web presence?
              </Heading>
              <Image
                as={motion.img}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, transition: { duration: 1 } }}
                my={-8}
                boxSize="600px"
                src='caberTek_hero.svg'
                alt="logo" />
              <Heading
                as={motion.div}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, transition: { duration: 1 } }}
                color="#539c04"
                size="2xl"
                py={4}
              >
                <Heading size="2xl" as="span" color="#f30002">caberTek</Heading> has you covered.
              </Heading>
              <Divider
                my={8}
              />
            </VStack>
          </Center>
        </Box>
      </Container>
    </Box>
  );
}