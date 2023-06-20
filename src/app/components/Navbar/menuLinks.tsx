'use client'

import React from "react";
import {
  Box,
  Collapse,
} from "@chakra-ui/react";
import LinkStack from "./linkStack";

export const MenuLinks = ({
  isOpen,
  isDesktop
}: {
  isOpen: boolean,
  isDesktop: boolean
}) => {
  const pages = ['About', 'Projects']

  return (
    <Box
      mt="2"
      flexBasis={{ base: "100%", md: "auto" }}
    >
      {isDesktop ?
        <LinkStack buttons={pages} />
        :
        <Collapse in={isOpen} animateOpacity>
          <LinkStack buttons={pages} />
        </Collapse>}
    </Box>
  )
};
