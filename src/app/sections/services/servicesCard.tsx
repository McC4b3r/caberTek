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
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { ServiceCardProps } from '../../types';


export const ServicesCard: React.FC<ServiceCardProps> = ({ service }) => {
  const x = useMotionValue(10)
  const y = useTransform(x, value => Math.sin(value / 10) * 50)
  return (
    <WrapItem
    >
      <Card
        as={motion.div}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 1 } }}
        whileHover={{ scale: 1.02 }}
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