import React from "react";
import { Link } from "@chakra-ui/next-js";
import { Box, Flex, Heading, Image, Spacer, } from "@chakra-ui/react";

export const Logo = () => {
  return (
    <Flex
      as={Link}
      _hover={{ textDecoration: 'none' }}
      href="#home"
      textDecorationLine="none"
      pl="2"
      pr="2"
    >
      <Heading
        color="#f30002"
        size="xl">
        caberTek
      </Heading>
      <Image
        ml={4}
        boxSize="45px"
        src="logo_small.svg"
        alt="small logo"
      />
    </Flex>
  )
};
