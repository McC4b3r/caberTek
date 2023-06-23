'use client'

import React from 'react';
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
  return (
    <Container
      id="home"
      maxW="85%"
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
            >
              Need help with web presence?
            </Heading>
            <Heading
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
              <Box>
                <Heading
                  mb={2}
                >
                  For help with:
                </Heading>
                <List>
                  <ListItem>
                    <ListIcon
                      color="green.500"
                      as={CheckCircleIcon}
                    />
                    Building websites
                  </ListItem>
                  <ListItem>
                    <ListIcon
                      color="green.500"
                      as={CheckCircleIcon}
                    />
                    Updating existing websites
                  </ListItem>
                  <ListItem>
                    <ListIcon
                      color="green.500"
                      as={CheckCircleIcon}
                    />
                    App/Webapp development
                  </ListItem>
                  <ListItem>
                    <ListIcon
                      color="green.500"
                      as={CheckCircleIcon}
                    />
                    Web design
                  </ListItem>
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
  );
}