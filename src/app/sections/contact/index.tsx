import { Heading, VStack, Text, Container } from '@chakra-ui/react';
import React from 'react';
import { SectionContainer } from '../../components/SectionContainer';
import { CaberForm } from './caberForm';
import { motion } from 'framer-motion';

export const Contact = () => {
  return (
    <SectionContainer
      id="contact"
      heading="Contact"
      gradientDirection="l2d"
    >
      <VStack>
        <Heading
          as={motion.div}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { duration: 1 } }}
          size="md"
          color="#00a6a2"
        >
          Have questions? Looking for a quote? Let us know!
        </Heading>
        <Container
          mt={4}
          maxW="60%"
        >
          <Text
            as={motion.div}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 1 } }}
            textAlign="center"
          >
            Because caberTek offers a range of services, pricing for those services are dependant on your project and your personal business constraints. Due to the level of flexibility offered, caberTek offers 100% FREE consultations to better understand your business needs. Let&apos;s connect and discuss how we can help!
          </Text>
        </Container>
        <CaberForm />
      </VStack>
    </SectionContainer>
  )
}