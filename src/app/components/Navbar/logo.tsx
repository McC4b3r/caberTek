'use client'

import React from "react";
import { Box, Heading } from "@chakra-ui/react";

const headingFont = { "fontFamily": "IBM Plex Sans" };

export const Logo = () => {
  return (
    <Box pl="2" pr="2">
      <Heading
        textShadow="#3f3e3e57 3px 3px 3px"
        sx={headingFont}
        size="2xl">
        caberTek
      </Heading>
    </Box>
  )
};
