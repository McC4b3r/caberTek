import React, { RefObject } from "react";
import { Flex } from "@chakra-ui/react";

export const Container = ({
  children,
  isFixed,
  menuRef,
}: {
  children: React.ReactNode,
  isFixed: boolean,
  menuRef: RefObject<HTMLDivElement>
}) => {

  return (
    <Flex
      ref={menuRef}
      as="nav"
      bgGradient="linear(to-b, #121417, #1a202cd9)"
      align="center"
      position={isFixed ? 'fixed' : 'sticky'}
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