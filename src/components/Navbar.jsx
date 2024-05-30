import { Box, Flex, Link, HStack } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="gray.800" px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <HStack spacing={8} alignItems="center">
          <NavLink to="/" style={{ color: 'white', fontWeight: 'bold' }}>Financial Times</NavLink>
          <HStack as="nav" spacing={4} display={{ base: 'none', md: 'flex' }}>
            <NavLink to="/world" style={{ color: 'white' }}>World</NavLink>
            <NavLink to="/business" style={{ color: 'white' }}>Business</NavLink>
            <NavLink to="/markets" style={{ color: 'white' }}>Markets</NavLink>
            <NavLink to="/opinion" style={{ color: 'white' }}>Opinion</NavLink>
            <NavLink to="/tech" style={{ color: 'white' }}>Tech</NavLink>
          </HStack>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Navbar;