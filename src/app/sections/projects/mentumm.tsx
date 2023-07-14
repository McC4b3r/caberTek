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
} from '@chakra-ui/react';
import React from 'react';

export const Mentumm = () => {
  return (
    <Card w="80%">
      <CardHeader>
        <Center>
          <VStack>
            <Heading
              size="lg"
            >
              Mentumm - On demand professional coaching
            </Heading>
            <Divider />
          </VStack>
        </Center>
      </CardHeader>
      <CardBody>
        <Flex
          alignItems="center"
        >
          <Image
            borderRadius="10px"
            boxShadow="-6px 6px 0px 0px #4d647c"
            width="500px"
            src="https://imagedelivery.net/9H_fe7CeacG3esKoMEwYXg/40f7c921-f424-4cd4-9869-2f6b1db60e00/public"
            alt="Mentumm"
          />
          <Spacer />
          <Box
          >
            <Text
              ml={12}
            >
              A full-fledged webapp, Mentumm is a platform to allow you or a colleague to seek and receive professional coaching for many aspects of business. You&apos;re able to sign up as either a user seeking services, or a coach looking to provide service. Whatever your professional goals are, Mentumm will help connect you with the right coach or client to provide or receive the very best in professional coaching.
            </Text>
          </Box>
        </Flex>
      </CardBody>
    </Card>
  )
}