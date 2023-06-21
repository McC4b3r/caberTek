import React from "react";
import { Flex } from "@chakra-ui/react";

export const Container = ({ children }: { children: React.ReactNode }) => {
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
    >
      {children}
    </Flex>
  )
}