'use client'

import React, { useEffect, useMemo, useState } from 'react'
import { Box, Center, Spinner } from '@chakra-ui/react'
import Navbar from './components/Navbar'
import { HomeSection } from './sections/home';
import { useWindowScroll } from 'react-use';
import { AboutSection } from './sections/about';
import { Services } from './sections/services';

export default function Home() {
  const sectionLinks = ['Home', 'About', 'Services', 'Projects', 'Contact'];
  const [isLoading, setIsLoading] = useState(true);
  const { y } = useWindowScroll();
  const isFixed = y > 1;

  useEffect(() => {
    setIsLoading(false);
  }, [])

  if (isLoading) {
    return (
      <Center>
        <Spinner
          mt={24}
          thickness='4px'
          color='red.600'
          size='xl'
        />
      </Center>
    )
  }

  return (
    <Box
      id="home"
    >
      {isFixed && (
        <Box
          h="78px"
        />
      )}
      <Navbar
        isFixed={isFixed}
        sections={sectionLinks}
      />
      <HomeSection />
      <AboutSection />
      <Services />
    </Box>
  )
}
