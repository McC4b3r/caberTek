'use client'

import React, { useEffect, useMemo, useState } from 'react'
import { Box, Center, Spinner } from '@chakra-ui/react'
import Navbar from './components/Navbar'
import { HomeSection } from './sections/home';
import { AboutSection } from './sections/about';
import { Services } from './sections/services';
import { servicesData, technologies } from './sections/services/data';
import { useScroll, useMotionValueEvent } from 'framer-motion';
import { Projects } from './sections/projects';
import { ContactForm } from './sections/contact';

export default function Home() {
  const sectionLinks = ['Home', 'About', 'Services', 'Projects', 'Contact'];
  const [isLoading, setIsLoading] = useState(true);
  const { scrollY } = useScroll();
  const [isFixed, setIsFixed] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 1) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  });

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
      <Services
        data={servicesData}
      />
      <Projects />
      <ContactForm />
    </Box>
  )
}
