import React, { useRef } from 'react';
import { Spacer, useDisclosure, useMediaQuery, useOutsideClick } from "@chakra-ui/react";
import { Logo } from "./logo";
import { Container } from "./container";
import { MenuLinks } from "./menuLinks";
import { MenuToggle } from './menuToggle';

const Navbar = ({
  sections,
  isFixed,
}: {
  sections: Array<string>
  isFixed: boolean
}) => {
  const { isOpen, onToggle } = useDisclosure();
  const [isDesktop] = useMediaQuery("(min-width: 768px)");
  const menuRef = useRef(null);
  useOutsideClick({
    ref: menuRef,
    handler: () => isOpen ? onToggle() : null
  })

  return (
    <Container
      menuRef={menuRef}
      isFixed={isFixed}
    >
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