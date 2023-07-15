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
import { SectionContainerProps } from '../../types';


export const SectionContainer: React.FC<SectionContainerProps> = ({
  id,
  heading,
  gradientDirection,
  children,
}) => {
  const gradientA = "linear(to-b, #1a202c 0%,  #121417 70%)"
  const gradientB = "linear(to-b, #121417 0%, #1a202c 70%)"

  return (
    <Box
      pt={20}
      id={id}
      minH="85vh"
      bgGradient={gradientDirection === 'l2d' ? gradientA : gradientB}
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
                pb={16}
                size="2xl"
                color="#00a6a2"
              >
                {heading}
              </Heading>
            </VStack>
          </Center>
          {children}
        </Box>
      </Container>
    </Box>
  );
}