import { Box, Center, Text } from '@chakra-ui/react';
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
        © 2023 <Text ml={1} color="#f30002" >caberTek</Text>
      </Center>
    </Box>
  )
}