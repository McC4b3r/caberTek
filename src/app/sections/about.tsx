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
  Link,
  Stack,
} from '@chakra-ui/react';
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

  return (
    <Box
      pt={20}
      id="about"
      minH="85vh"
      bgGradient="linear(to-b, #121417 0%, #1a202c 70%)"
    >
      <Container
        id="the one"
        maxW={['100%', '100%', '85%', '85%', '85%']}
      >
        <Center>
          <Heading
            as={motion.div}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 1 } }}
            pb={16}
            size={['xl', 'xl', '2xl', '2xl', '2xl']}
            textAlign="center"
            color="#00a6a2"
          >
            What&apos;s caberTek?
          </Heading>
        </Center>
        <Stack
          direction={['column', 'column', 'column', 'column', 'row']}
        >
          <Container
            my='auto'
            maxW={['auto', 'auto', 'auto', 'auto', "2xl"]}
          >
            <VStack
              mt={4}
              w={['100%', 'auto']}
            >
              <Text
                as={motion.div}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, transition: { duration: 1 } }}
                mb={12}
                textAlign={['center', 'center', 'left', 'left', 'left']}
                fontSize='md'
              >
                caberTek, led by founder {nameLink}, is your go-to web development partner, offering tailored solutions to help businesses thrive without the tech hassle. We take care of the daunting tasks from website creation and updates, domain registration, SEO, and UX design, to managing linking services and email systems.
              </Text>
              <Text
                as={motion.div}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, transition: { duration: 1.2 } }}
                mb={8}
                textAlign={['center', 'center', 'left', 'left', 'left']}
                fontSize='md'
              >
                Our aim is to let business owners focus on their core vision without being overwhelmed by the evolving tech demands. With experience across a wide range of businesses, we provide a personalized service that generic platforms like SquareSpace and WordPress alone can&apos;t match, effectively alleviating your technical stress. Whether you need straightforward fixes or comprehensive technical management, caberTek is ready to assist.
              </Text>
            </VStack>
          </Container>
          <Spacer />
          <VStack
          >
            <Heading
              as={motion.div}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { duration: 1 } }}
              size="xl"
              color="#00a6a2"
              textAlign="center"
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
                    boxSize="32em"
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
        </Stack>
        <Box
        >
        </Box>
      </Container>
    </Box>
  )
}