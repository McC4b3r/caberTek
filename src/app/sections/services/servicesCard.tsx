import React from 'react';
import {
  Center,
  Card,
  CardBody,
  Heading,
  Text,
  VStack,
  WrapItem,
  Divider
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { ServiceCardProps } from '../../types';

const hoverAnimation = {
  y: -10,
  transition:
  {
    type: "spring",
    stiffness: 600,
    damping: 9
  }
}


export const ServicesCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <WrapItem
    >
      <Card
        as={motion.div}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 1 } }}
        whileHover={hoverAnimation}
        maxW='sm'
        bg='#0f4358'
        my={4}
        mx={6}
        w='325px'
        h="325px"
      >
        <CardBody
        >
          <Center>
            <VStack>
              <Heading
                color='#72b9ff'
                textAlign='center'
                mb={2}
                size='md'
              >
                {service.title}
              </Heading>
              <Divider
              />
              <Text
                mt={4}
                textAlign='center'
              >
                {service.description}
              </Text>
            </VStack>
          </Center>
        </CardBody>
      </Card>
    </WrapItem>
  )
}