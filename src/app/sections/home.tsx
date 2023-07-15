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
  Wrap,
} from '@chakra-ui/react';


export const HomeSection = () => {
  return (
    <Box
      minH="75vh"
      bgGradient="linear(to-b, #1a202c 0%, #121417 70%)"
    >
      <Container
        maxW="90%"
      >
        <Box
        >
          <Center>
            <VStack
              mt={4}
            >
              <Heading
                as={motion.div}
                textAlign={['left', 'left', 'center', 'center', 'center']}
                initial={{ opacity: 0, }}
                whileInView={{ opacity: 1, transition: { duration: 1 } }}
                pb={4}
                size={['xl', 'xl', '2xl', '2xl']}
                color="#00a6a2"

              >
                Need help with your web presence?
              </Heading>
              <Image
                as={motion.img}
                initial={{ opacity: 0, filter: "blur(5px)" }}
                whileInView={{ opacity: 1, filter: "blur(0px)", transition: { duration: 0.5 } }}
                src='caberTek_hero.svg'
                my='1em'
                alt="logo" />
              <Box
              >
                <Heading
                  as={motion.div}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1, transition: { duration: 1 } }}
                  color="#539c04"
                  size={['xl', 'xl', '2xl', '2xl', '2xl']}
                  textAlign={['right', 'right', 'center', 'center', 'center']}
                  py={[10, 8, 8, 8, 8]}
                >
                  <Heading
                    as="span"
                    color="#f30002">caberTek</Heading> has you covered.
                </Heading>
              </Box>
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