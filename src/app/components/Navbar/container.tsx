import React from "react";
import { Flex } from "@chakra-ui/react";

export const Container = ({
  children,
  isFixed,
}: {
  children: React.ReactNode,
  isFixed: boolean,
}) => {

  return (
    <Flex
      as="nav"
      bgGradient="linear(to-b, #121417, #1a202cd9)"
      align="center"
      position={isFixed ? 'fixed' : 'sticky'}
      // position="fixed"
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