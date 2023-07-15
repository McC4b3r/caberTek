import React from 'react';
import {
  Box,
  Image,
  Text,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

export const SuccessfulSubmit: React.FC = () => {
  return (
    <Box>
      <Image
        as={motion.img}
        initial={{ opacity: 0, x: '-500px' }}
        whileInView={{ opacity: 1, x: '15px', transition: { duration: 1 } }}
        mt={8}
        w="300px"
        src="email_sent.svg"
        alt="email-sent"
      />
      <Text mt={8} fontSize="lg">Thanks! You will receive a response soon</Text>
    </Box>
  )
}