import React, { RefObject } from "react";
import {
  Box,
  Collapse,
} from "@chakra-ui/react";
import LinkStack from "./linkStack";

export const MenuLinks = ({
  isOpen,
  isDesktop,
  sections,
}: {
  isOpen: boolean,
  isDesktop: boolean,
  sections: Array<string>,
}) => {

  return (
    <Box
      flexBasis={{ base: "100%", md: "auto" }}
    >
      {isDesktop ?
        <LinkStack buttons={sections} />
        :
        <Collapse in={isOpen} animateOpacity={true}>
          <LinkStack buttons={sections} />
        </Collapse>}
    </Box>
  )
};
