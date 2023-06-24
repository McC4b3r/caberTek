'use client'

import React from 'react';
import { motion } from 'framer-motion';
import {
  Image,
  Container,
  Heading,
  Spacer,
  Flex,
  Box,
  VStack,
  Divider,
  List,
  ListItem,
  ListIcon,
  HStack,
} from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';

export const HomeSection = () => {
  const skills = [
    "Building websites",
    "Updating existing websites",
    "App/Webapp development",
    "Web design",
  ];

  return (
    <Box
      minH="85vh"
      bgGradient="linear(to-b, #1a202c 0%, #121417 70%)"
    >
      <Container
        maxW="90%"
      >
        <Flex>
          <Box
          >
            <Image
              px={4}
              my={-4}
              boxSize="600px"
              src='caberTek_hero.svg'
              alt="logo" />
          </Box>
          <Spacer />
          <Box
          >
            <VStack mt={4}>
              <Heading
                pt={8}
                size="2xl"
                color="#00a6a2"

              >
                Need help with web presence?
              </Heading>
              <Heading
                color="#5fb600"
                size="lg"
              >
                caberTek has you covered.
              </Heading>
              <Divider />
              <Box
                maxW="container.sm"
              >
              </Box>
              <HStack>
                <Box
                  bg="#223850"
                  borderRadius="xl"
                  mt={2}
                  p={8}
                >
                  <Heading
                    color="#fecc89"
                    mb={4}
                  >
                    For help with:
                  </Heading>
                  <List>
                    {skills.map((skill: string, i: number) => (
                      <ListItem
                        key={i}
                      >
                        <ListIcon
                          color="#5fb600"
                          as={CheckCircleIcon}
                        />
                        {skill}
                      </ListItem>
                    ))}
                  </List>
                  <Box>
                    ...and more!
                  </Box>
                </Box>
                <Spacer />
                <Box>
                  <Image
                    px={4}
                    my={-4}
                    boxSize="400px"
                    src='me.svg'
                    alt="logo" />
                </Box>
              </HStack>
              {/* <Container
              px={12}
              mb={2}
            >
              Building a business is a lot of work. Let caberTek take some of that off your plate.
            </Container> */}
            </VStack>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}