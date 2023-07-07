import React from 'react';
import {
  Box,
  Center,
  Container,
  HStack,
  Heading,
  Spacer,
  Flex,
  Text,
  VStack,
  Image,
  Divider,
  List,
  ListItem,
  ListIcon,
  Link,
} from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';
// import Link from 'next/link';
import { motion, useScroll } from 'framer-motion';

const nameLink = (
  <Link
    color="#fecc89"
    href="https://www.linkedin.com/in/ryan-mccabe-089/"
    isExternal
  >
    Ryan McCabe
  </Link>
)

export const AboutSection = () => {
  const skills = [
    "Building websites",
    "Updating existing websites",
    "App/Webapp development",
    "Web design",
  ];
  const scrollYProgress = useScroll();

  return (
    <Box
      id="about"
      minH="85vh"
      bgGradient="linear(to-b, #121417 0%, #1a202c 70%)"
    >
      <Container
        maxW="85%"
      >
        <Center>
          <Heading
            pb={16}
            size="2xl"
            color="#00a6a2"
          >
            What&apos;s caberTek?
          </Heading>
        </Center>
        <Flex>
          <Container
            maxW="2xl"
          >
            <VStack
              mt={4}
            >
              <Text
                as={motion.div}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, transition: { duration: 1 } }}
                mb={8}
              >
                Some would say caberTek is the leading web development company in the tech space today. That someone is me: {nameLink} - the creater of caberTek. I created this company because I want to help other business owners grow and scale their business without having to worry about a many of the technical requirements of a modern business. A company&apos;s vision should not be hindered by a lack of familiarity with ever-evolving tools and services that are required to thrive in today&apos;s market.
              </Text>
              <Text
                as={motion.div}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, transition: { duration: 1, delay: 0.2 } }}
                mb={8}
              >
                Between registering domains, creating a website, updating that website, linking services or products, setting up email systems, ensuring proper SEO, and providing a great user experience, it can be an overwhelming experience to manage that all yourself while also taking charge of every other aspect of your business. While there are solutions out there to ease that burden, they often have a learning curve that requires time that would be better spent on the bigger picture of the business. That&apos;s where caberTek comes in.
              </Text>
              <Text
                mb={8}
                as={motion.div}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, transition: { duration: 1, delay: 0.4 } }}
              >
                With caberTek, you have a dedicated professional who handles all of that stuff for you. You also get a level of customization and service that pre-built solutions such as SquareSpace and Wordpress alone are unable to offer. With experience from rocket ship startups to fortune 100 companies, and deep familiarity with today&apos;s modern tech-stacks and tools, caberTek is able to offer customized solutions for any business that is looking to offload their technical burden. From simple solutions to entire technical management, caberTek can help.
              </Text>
            </VStack>
          </Container>
          <Spacer />
          <VStack>
            <Heading
              as={motion.div}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { duration: 1 } }}
              size="xl"
              color="#00a6a2"
              mb={4}

            >
              We&apos;ll handle your website
            </Heading>
            <Divider />
            <Box
              maxW="container.sm"
            >
            </Box>
            <HStack>
              {/* <Box
                bg="#223850"
                borderRadius="xl"
                mt={2}
                px={8}
                py={12}
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
              </Box> */}
              <Spacer />
              <VStack>
                <Box
                  as={motion.div}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1, transition: { duration: 1 } }}
                >
                  <Image
                    px={4}
                    my={-8}
                    boxSize="500px"
                    src='me.svg'
                    alt="logo" />
                  <Divider
                    mt={2}
                  />
                  <Heading
                    as={motion.div}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1, transition: { duration: 1 } }}
                    mt={4}
                    color="#539c04"
                    size="lg"
                    textAlign="center"
                  >
                    So you don&apos;t have to.
                  </Heading>
                </Box>
              </VStack>
            </HStack>
          </VStack>
        </Flex>
        <Box
        >
        </Box>
      </Container>
    </Box>
  )
}