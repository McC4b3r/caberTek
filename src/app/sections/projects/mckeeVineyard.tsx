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
  Stack,
} from '@chakra-ui/react';
import React from 'react';
import { motion } from 'framer-motion';

export const MckeeVineyard = () => {
  return (
    <Card
      bgColor="#203959"
      as={motion.div}
      mr={[0, 0, -10, -10, -10, -10]}
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
      w={['90%', 'auto', '90%', '70%', '70%']}
    >
      <CardHeader>
        <Center>
          <VStack
            w={['auto', 'auto', 'auto', '70%', '60%']}
          >
            <Heading
              color='#72b9ff'
              size="lg"
            >
              McKee Vineyard
            </Heading>
            <Heading
              textAlign="center"
              color='#72b9ff'
              size="xs"
            >
              Family property webapp
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
          <Box
            my='auto'
          >
            <Text
              mr={['auto', 'auto', 'auto', 'auto', 6]}
              ml="auto"
              fontSize={['xs', 'sm', 'sm', 'md']}
            >
              A webapp created to showcase the history and scenic beauty of a family owned piece of land and it&apos;s associated properties. With a rich history that dates back to the 1930&apos;s, several generations have had the pleasure of spending time at The Ranch. Once an apple orchard stretching as far as the eye could see, the majority of the land around The Ranch house is now home to the Lucky Well Vineyard.
            </Text>
          </Box>
          <Spacer />
          <Link
            isExternal
            my="auto"
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
              maxW={['100%', '100%', '100%', '90%', '30em']}
              mx="auto"
              mt={['1em', '1em', '1em', '1em', 0]}
              src="https://imagedelivery.net/9H_fe7CeacG3esKoMEwYXg/ccaff08f-d036-4328-8e9c-925a53411b00/public"
              alt="Mckee Vineyard"
            />
          </Link>
        </Stack>
      </CardBody>
    </Card>
  )
}