import { Box, Center } from '@chakra-ui/react';
import React from 'react';
import { SectionContainer } from '../components/SectionContainer';

export const Footer = () => {
  return (
    <Box
      bgColor="#121417"
    >
      <Center
        py={8}
      >
        © 2023 caberTek
      </Center>
    </Box>
  )
}