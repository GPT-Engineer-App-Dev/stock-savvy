import { Container, Box, Text, VStack, Heading, Flex } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Flex direction={{ base: "column", md: "row" }} justify="space-between">
        <Box flex="3" mr={{ md: 4 }}>
          <Box mb={4}>
            <Heading as="h2" size="xl">Featured Article</Heading>
            <Text mt={2}>This is the featured article section where the main news will be displayed.</Text>
          </Box>
          <Box>
            <Heading as="h3" size="lg">Main Content</Heading>
            <Text mt={2}>This is the main content area where articles will be displayed.</Text>
          </Box>
        </Box>
        <Box flex="1" mt={{ base: 4, md: 0 }}>
          <Heading as="h3" size="lg">Trending</Heading>
          <VStack spacing={4} mt={2}>
            <Text>Trending article 1</Text>
            <Text>Trending article 2</Text>
            <Text>Trending article 3</Text>
          </VStack>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;