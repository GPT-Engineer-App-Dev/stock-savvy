import { Box, Flex, Link, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box bg="gray.800" color="white" py={4}>
      <Flex justifyContent="space-around">
        <Link href="/contact">Contact</Link>
        <Link href="/privacy-policy">Privacy Policy</Link>
        <Link href="/terms-of-service">Terms of Service</Link>
      </Flex>
      <Text textAlign="center" mt={4}>© 2023 Financial Times</Text>
    </Box>
  );
};

export default Footer;