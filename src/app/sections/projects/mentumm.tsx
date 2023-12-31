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
  Stack,
} from '@chakra-ui/react';
import React from 'react';
import { motion } from 'framer-motion';

export const Mentumm = () => {
  return (
    <Card
      bgColor="#203959"
      borderRadius="lg"
      ml={[0, 0, -10, -10, -10, -10]}
      as={motion.div}
      initial={{
        opacity: 0,
        x: -50,
        boxShadow: "0px 0px 0px 0px #014e4d"
      }}
      whileInView={{
        opacity: 1,
        boxShadow: "-6px 6px 0px 0px #014e4d",
        x: 0,
        transition: {
          duration: 1
        }
      }}
      w={['90%', 'auto', '90%', '70%', '70%']}
    >
      <CardHeader>
        <Center>
          <VStack
            w={['auto', 'auto', 'auto', '70%', '60%']}
          >
            <Heading
              color="#72b9ff"
              size="lg"
            >
              Mentumm
            </Heading>
            <Heading
              textAlign="center"
              color='#72b9ff'
              size="xs"
            >
              On demand professional coaching
            </Heading>
            <Divider />
          </VStack>
        </Center>
      </CardHeader>
      <CardBody>
        <Stack
          direction={['column', 'column', 'column', 'column', 'row']}
          mb={4}
        >
          <Link
            isExternal
            my="auto"
            href='https://mentumm.com'
          >
            <Image
              as={motion.img}
              initial={{
                boxShadow: "0px 0px 0px 0px #4d647c"
              }}
              whileInView={{
                boxShadow: "6px 6px 0px 0px #4d647c",
                transition: { duration: 1 }
              }}
              borderRadius="10px"
              maxW={['100%', '100%', '100%', '90%', '30em']}
              mx="auto"
              src="https://imagedelivery.net/9H_fe7CeacG3esKoMEwYXg/40f7c921-f424-4cd4-9869-2f6b1db60e00/public"
              alt="Mentumm"
            />
          </Link>
          <Spacer />
          <Box
            my="auto"
          >
            <Text
              ml={['auto', 'auto', 'auto', 'auto', 6]}
              mr="auto"
              mt={['1em', '1em', '1em', '1em', 0]}
              fontSize={['xs', 'sm', 'sm', 'md']}
            >
              A full-fledged webapp, Mentumm is a platform to allow you or a colleague to seek and receive professional coaching for many aspects of business. You&apos;re able to sign up as either a user seeking services, or a coach looking to provide service. Whatever your professional goals are, Mentumm will help connect you with the right coach or client to provide or receive the very best in professional coaching.
            </Text>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  )
}