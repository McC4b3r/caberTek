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

export const Pizza = () => {
  return (
    <Card w="80%">
      <CardHeader>
        <Center>
          <VStack>
            <Heading
              size="lg"
            >
              caberTek Pizza - A full-stack webapp
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
            src="https://imagedelivery.net/9H_fe7CeacG3esKoMEwYXg/0093e64d-d1dc-45a2-ae1f-bb22282f2500/public"
            alt="Pizza"
          />
          <Spacer />
          <Box
          >
            <Text
              ml={12}
            >
              A small webapp created as an exercise in full-stack CRUD actions. CRUD stands for Create, Read, Update, and Delete, which are all necessary actions for users to manipulate data in an app. This app lets you create, update, and delete pizza toppings that you type in, and then allows you to create, update, and delete pizzas utilizing the toppings you&apos;ve added. Everything is text based. This app showcases just a glimpse of what is possible through caberTek.
            </Text>
          </Box>
        </Flex>
      </CardBody>
    </Card>
  )
}