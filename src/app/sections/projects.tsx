import React from 'react';
import {
  Box,
  Container,
  Center,
  Heading,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

export const Projects = () => {
  return (
    <Box
      pt={20}
      id="projects"
      minH="85vh"
      bgGradient="linear(to-b, #121417 0%, #1a202c 70%)"
    >
      <Container
        maxW="85%"
      >
        <Center>
          <Heading
            as={motion.div}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 1 } }}
            pb={16}
            size="2xl"
            color="#00a6a2"
          >
            Projects and Demos
          </Heading>
        </Center>
      </Container>
    </Box>
  )
}