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
  CardFooter,
  Link,
} from '@chakra-ui/react';
import React from 'react';
import { motion } from 'framer-motion';

export const MckeeVineyard = () => {
  return (
    <Card
      as={motion.div}
      mr={-10}
      initial={{
        opacity: 0,
        x: 50,
        boxShadow: "0px 0px 0px 0px #014e4d"
      }}
      whileInView={{
        opacity: 1,
        boxShadow: "6px 6px 10px 0px #014e4d",
        x: 0, transition: {
          duration: 1
        }
      }}
      w="70%"
    >
      <CardHeader>
        <Center>
          <VStack>
            <Heading
              size="lg"
            >
              McKee Vineyard - A family comissioned webapp
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
              A webapp created to showcase the history and scenic beauty of a family owned piece of land and it&apos;s associated properties. With a rich history that dates back to the 1930&apos;s, several generations have had the pleasure of spending time at The Ranch. Once an apple orchard stretching as far as the eye could see, the majority of the land around The Ranch house is now home to the Lucky Well Vineyard.
            </Text>
          </Box>
          <Spacer />
          <Link
            isExternal
            href='https://mckeevineyard.net'
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
              src="https://imagedelivery.net/9H_fe7CeacG3esKoMEwYXg/ccaff08f-d036-4328-8e9c-925a53411b00/public"
              alt="Mckee Vineyard"
            />
          </Link>
        </Flex>
      </CardBody>
    </Card>
  )
}