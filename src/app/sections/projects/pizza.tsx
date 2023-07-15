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

export const Pizza = () => {
  return (
    <Card
      bgColor="#203959"
      as={motion.div}
      ml={[0, 0, -10, -10, -10, -10]}
      initial={{
        opacity: 0,
        x: -50,
        boxShadow: "0px 0px 0px 0px #014e4d"
      }}
      whileInView={{
        opacity: 1,
        boxShadow: "-6px 6px 0px 0px #014e4d",
        x: 0, transition: {
          duration: 1
        }
      }}
      w={['90%', 'auto', '90%', '70%', '70%']}
    >
      <CardHeader>
        <Center>
          <VStack
            w={['auto', 'auto', 'auto', '70%', '50%']}
          >
            <Heading
              color='#72b9ff'
              size="lg"
            >
              caberTek Pizza
            </Heading>
            <Heading
              color='#72b9ff'
              size="xs"
            >
              Full-stack webapp
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
            href='https://ryan-mccabe-pizza-party.vercel.app/'
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
              src="https://imagedelivery.net/9H_fe7CeacG3esKoMEwYXg/0093e64d-d1dc-45a2-ae1f-bb22282f2500/public"
              alt="Pizza"
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
              A small webapp created as an exercise in full-stack CRUD actions. CRUD stands for Create, Read, Update, and Delete, which are all necessary actions for users to manipulate data in an app. This app lets you create, update, and delete pizza toppings that you type in, and then allows you to create, update, and delete pizzas utilizing the toppings you&apos;ve added. Everything is text based. This app showcases just a glimpse of what is possible through caberTek.
            </Text>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  )
}