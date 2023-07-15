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
        initial={{ opacity: 0, x: '-200px' }}
        whileInView={{ opacity: 1, x: '0px', transition: { duration: 1 } }}
        mt={8}
        w="22em"
        src="email_sent.svg"
        alt="email-sent"
      />
      <Text
        textAlign="center"
        mt={8}
        fontSize="lg">Thanks! You will receive a response soon</Text>
    </Box>
  )
}