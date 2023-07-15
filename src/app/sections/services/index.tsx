import React from 'react';
import {
  Box,
  Container,
  Center,
  Heading,
  Flex,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { ServicesProps } from '../../types';
import { ServicesCard } from './servicesCard';

export const Services: React.FC<ServicesProps> = ({
  data: {
    services,
  }
}) => {
  return (
    <Box
      pt={20}
      id="services"
      minH="85vh"
      bgGradient="linear(to-b, #1a202c 0%, #121417 70%)"
    >
      <Container
        maxW={['100%', '100%', '100%', '100%', '85%']}
      >
        <Center>
          <Heading
            as={motion.div}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 1 } }}
            pb={16}
            size="2xl"
            textAlign="center"
            color="#00a6a2"
          >
            Available Services
          </Heading>
        </Center>
        <Flex
          mt={[20, 20, 20, 8, 8]}
          wrap={{ lg: 'wrap', xl: 'wrap', '2xl': 'wrap' }}
          justify={['flex-start', 'flex-start', 'flex-start', 'center', 'center']}
          overflowX={['scroll', 'scroll', 'scroll', 'auto', 'auto']}
        >
          {services.map((service, i) => (
            <ServicesCard
              service={service}
              key={i}
            />
          ))}
        </Flex>
      </Container>
    </Box>
  )
}