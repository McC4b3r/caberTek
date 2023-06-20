'use client'

import React, { useEffect, useState } from 'react';
import { Spacer, useDisclosure, useMediaQuery } from "@chakra-ui/react";
import { Logo } from "./logo";
import { Container } from "./container";
import { MenuLinks } from "./menuLinks";
import { MenuToggle } from './menuToggle';

const Navbar = (props: any) => {
  const { isOpen, onToggle } = useDisclosure();
  const [isDesktop] = useMediaQuery("(min-width: 768px)");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  //
  return isLoaded ?
    (
      <Container {...props}>
        <Logo />
        <Spacer />
        <MenuToggle
          toggle={onToggle}
          isOpen={isOpen}
          isDesktop={isDesktop} />
        <MenuLinks
          isOpen={isOpen}
          isDesktop={isDesktop} />
      </Container >
    )
    :
    (
      <Container {...props}>
        <Logo />
        <Spacer />
      </Container >
    )
}

export default Navbar;