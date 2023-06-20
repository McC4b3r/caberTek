'use client'

import React from "react";
import { Flex } from "@chakra-ui/react";

export const Container = ({ children, ...props }: { children: React.ReactNode }) => {
  console.log(props)
  return (
    <Flex
      as="nav"
      align="center"
      position="sticky"
      top="0px"
      zIndex='2'
      justify="space-between"
      wrap="wrap"
      w="100%"
      p={4}
      // bg={["primary.500", "primary.500", "transparent", "transparent"]}
      bg='white'
      // color={["white", "white", "primary.700", "primary.700"]}
      {...props} >
      {children}
    </Flex>
  )
}