import React from 'react';
import {
  Box,
  Container,
  Center,
  Heading,
  Wrap,
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
        maxW="85%"
      >
        <Center>
          <Heading
            as={motion.div}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 1 } }}
            pb={16}
            size="2xl"
            color="#00a6a2"
          >
            Available Services
          </Heading>
        </Center>
        <Wrap
          justify='center'
        >
          {services.map((service, i) => (
            <ServicesCard
              service={service}
              key={i}
            />
          ))}
        </Wrap>
      </Container>
    </Box>
  )
}