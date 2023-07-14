import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Image,
  Spacer,
  Text,
  Heading,
  Center,
  Divider,
  VStack,
  Link,
} from '@chakra-ui/react';
import React from 'react';
import { motion } from 'framer-motion';

export const CaberTek = () => {
  return (
    <Card
      bgColor="#203959"
      as={motion.div}
      mr={-10}
      initial={{
        opacity: 0,
        x: 50,
        boxShadow: "0px 0px 0px 0px #014e4d"
      }}
      whileInView={{
        opacity: 1,
        boxShadow: "6px 6px 0px 0px #014e4d",
        x: 0, transition: {
          duration: 1
        }
      }}
      w="70%">
      <CardHeader>
        <Center>

          <VStack
            w="50%"
          >
            <Heading
              color='#72b9ff'
              size="lg"
            >
              caberTek.com
            </Heading>
            <Heading
              color='#72b9ff'
              size="xs"
            >
              A professional business website
            </Heading>
            <Divider />
          </VStack>
        </Center>
      </CardHeader>
      <CardBody>
        <Flex
          alignItems="center"
          mb={4}
        >
          <Box>
            <Text
              mr={12}
            >
              The website you&apos;re on right now! I wanted to create the caberTek website to serve 2 purposes: have a cyber presence where people can find more about the business, and provide an example of the type of work caberTek is capable of delivering. Everything you see on this site is custom made. Not all jobs require such a level of customization but if you do need it, caberTek is capable of handling your needs!
            </Text>
          </Box>
          <Spacer />
          <Link
            isExternal
            href="https://cabertek.com"
          >
            <Image
              as={motion.img}
              initial={{
                boxShadow: "0px 0px 0px 0px #4d647c"
              }}
              whileInView={{
                boxShadow: "-6px 6px 0px 0px #4d647c",
                transition: { duration: 1 }
              }}
              borderRadius="10px"
              maxW="500px"
              src="https://imagedelivery.net/9H_fe7CeacG3esKoMEwYXg/0754eee1-0206-4cc7-a079-4d6ad74c5000/public"
              alt="caberTek"
            />
          </Link>
        </Flex>
      </CardBody>
    </Card>
  )
}