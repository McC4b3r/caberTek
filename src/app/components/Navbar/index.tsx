import React from 'react';
import { Spacer, useDisclosure, useMediaQuery } from "@chakra-ui/react";
import { Logo } from "./logo";
import { Container } from "./container";
import { MenuLinks } from "./menuLinks";
import { MenuToggle } from './menuToggle';

const Navbar = ({
  sections
}: {
  sections: Array<string>
}) => {
  const { isOpen, onToggle } = useDisclosure();
  const [isDesktop] = useMediaQuery("(min-width: 768px)");

  return (
    <Container>
      <Logo />
      <Spacer />
      <MenuToggle
        toggle={onToggle}
        isOpen={isOpen}
        isDesktop={isDesktop}
      />
      <MenuLinks
        isOpen={isOpen}
        isDesktop={isDesktop}
        sections={sections}
      />
    </Container >
  )
}

export default Navbar;