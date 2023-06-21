'use client'

import React, { useEffect, useState } from 'react'
import { Box, Center, Spinner } from '@chakra-ui/react'
import Navbar from './components/Navbar'
import { HomeSection } from './sections/homeSection';

export default function Home() {
  const sectionLinks = ['About', 'Projects', 'Contact'];
  const [isLoading, setIsLoading] = useState(true);

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
    <Box>
      <Navbar
        sections={sectionLinks}
      />
      <HomeSection />
    </Box>
  )
}
