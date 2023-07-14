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

export const CaberTek = () => {
  return (
    <Card
      w="80%">
      <CardHeader>
        <Center>

          <VStack>
            <Heading
              size="lg"
            >
              caberTek - Professional business website
            </Heading>
            <Divider />
          </VStack>
        </Center>
      </CardHeader>
      <CardBody>
        <Flex
          alignItems="center"
        >
          <Box>
            <Text
              mr={12}
            >
              The website you&apos;re on right now! I wanted to create the caberTek website to serve 2 purposes: have a cyber presence where people can find more about the business, and provide an example of the type of work caberTek is capable of delivering. Everything you see on this site is custom made. Not all jobs require such a level of customization but if you do need it, caberTek is capable of handling your needs!
            </Text>
          </Box>
          <Spacer />
          <Image
            borderRadius="10px"
            boxShadow="6px 6px 0px 0px #4d647c"
            width="500px"
            src="https://imagedelivery.net/9H_fe7CeacG3esKoMEwYXg/0754eee1-0206-4cc7-a079-4d6ad74c5000/public"
            alt="caberTek"
          />
        </Flex>
      </CardBody>
    </Card>
  )
}