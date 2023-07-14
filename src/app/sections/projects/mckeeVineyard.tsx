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

export const MckeeVineyard = () => {
  return (
    <Card
      w="80%">
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
        >
          <Box>
            <Text
              mr={12}
            >
              A webapp comissioned by my uncle to showcase the history and scenic beauty of a family owned piece of land. With a rich history that dates back to the 1930&apos;s, the property has seen many changes. Once an apple orchard stretching as far as the eye could see, the majority of the land is now home to the Lucky Well Vineyard as well as my uncle&apos;s house and a guest house.
            </Text>
          </Box>
          <Spacer />
          <Image
            borderRadius="10px"
            width="500px"
            src="https://imagedelivery.net/9H_fe7CeacG3esKoMEwYXg/ccaff08f-d036-4328-8e9c-925a53411b00/public"
            alt="Mckee Vineyard"
          />
        </Flex>
      </CardBody>
    </Card>
  )
}