import React from 'react';
import {
  Center,
  Card,
  CardBody,
  Heading,
  Text,
  VStack,
  WrapItem,
  Divider,
  Image
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { ServiceCardProps } from '../../types';

const hoverAnimation = {
  y: -10,
  transition:
  {
    type: "spring",
    stiffness: 600,
    damping: 12,
  }
}


export const ServicesCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <WrapItem
    >
      <Card
        as={motion.div}
        flexDirection="row"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 1 } }}
        whileHover={hoverAnimation}
        maxW='sm'
        bg='#0f4358'
        my={4}
        mx={[2, 2, 2, 6, 6]}
        w={['15em', '15em', '15em', '17em', '20em']}
        h={['25em', '25em', '25em', '25em', '20em']}
      >
        <CardBody
        >
          <Center>
            <VStack>
              <Heading
                color='#72b9ff'
                textAlign='center'
                size='md'
              >
                {service.title}
              </Heading>
              <Divider
              />
              <Image
                mt={1}
                boxSize="50px"
                color="white"
                src={service.image} alt="icon" />
              <Text
                mt={1}
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