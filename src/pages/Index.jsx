import React from 'react';
import { Box, Container, Flex, Heading, Text, VStack, HStack, Link, Image, Grid, GridItem } from "@chakra-ui/react";
import { FaSearch, FaUser } from 'react-icons/fa';

const Header = () => (
  <Box as="header" bg="gray.100" py={4}>
    <Container maxW="container.xl">
      <Flex justify="space-between" align="center">
        <Heading as="h1" fontSize="2xl" color="blue.900">Financial Times</Heading>
        <HStack spacing={4}>
          <Link>Home</Link>
          <Link>World</Link>
          <Link>Business</Link>
          <Link>Markets</Link>
          <Link>Opinion</Link>
          <FaSearch />
          <FaUser />
        </HStack>
      </Flex>
    </Container>
  </Box>
);

const ArticlePreview = ({ title, excerpt }) => (
  <Box borderBottom="1px" borderColor="gray.200" py={4}>
    <Heading as="h3" fontSize="xl" mb={2}>{title}</Heading>
    <Text>{excerpt}</Text>
  </Box>
);

const Footer = () => (
  <Box as="footer" bg="gray.800" color="white" py={8}>
    <Container maxW="container.xl">
      <Grid templateColumns="repeat(4, 1fr)" gap={8}>
        <GridItem>
          <Heading as="h4" fontSize="lg" mb={4}>Support</Heading>
          <VStack align="start">
            <Link>View Site Tips</Link>
            <Link>Report a Problem</Link>
            <Link>About Us</Link>
          </VStack>
        </GridItem>
        <GridItem>
          <Heading as="h4" fontSize="lg" mb={4}>Legal & Privacy</Heading>
          <VStack align="start">
            <Link>Terms & Conditions</Link>
            <Link>Privacy Policy</Link>
            <Link>Cookie Policy</Link>
          </VStack>
        </GridItem>
        <GridItem>
          <Heading as="h4" fontSize="lg" mb={4}>Services</Heading>
          <VStack align="start">
            <Link>FT Live</Link>
            <Link>FT Forums</Link>
            <Link>Corporate Subscriptions</Link>
          </VStack>
        </GridItem>
        <GridItem>
          <Heading as="h4" fontSize="lg" mb={4}>Connect with Us</Heading>
          <VStack align="start">
            <Link>Follow on Twitter</Link>
            <Link>Follow on Facebook</Link>
            <Link>Follow on LinkedIn</Link>
          </VStack>
        </GridItem>
      </Grid>
    </Container>
  </Box>
);

const Index = () => {
  return (
    <Box>
      <Header />
      <Container maxW="container.xl" py={8}>
        <Grid templateColumns="repeat(3, 1fr)" gap={8}>
          <GridItem colSpan={2}>
            <VStack spacing={8} align="stretch">
              <ArticlePreview 
                title="Global markets rally as economic outlook improves" 
                excerpt="Investors are becoming more optimistic about the global economic recovery, driving stock markets to new highs." 
              />
              <ArticlePreview 
                title="Tech giants face increased scrutiny over data practices" 
                excerpt="Regulators are stepping up their efforts to investigate how major technology companies handle user data and maintain their market dominance." 
              />
              <ArticlePreview 
                title="Climate change initiatives gain momentum in corporate world" 
                excerpt="More companies are committing to ambitious environmental goals as pressure mounts from investors and consumers." 
              />
            </VStack>
          </GridItem>
          <GridItem>
            <Box bg="gray.100" p={4} borderRadius="md">
              <Heading as="h2" fontSize="xl" mb={4}>Market Overview</Heading>
              <VStack align="stretch" spacing={2}>
                <HStack justify="space-between">
                  <Text>FTSE 100</Text>
                  <Text fontWeight="bold">7,234.56</Text>
                </HStack>
                <HStack justify="space-between">
                  <Text>S&P 500</Text>
                  <Text fontWeight="bold">4,567.89</Text>
                </HStack>
                <HStack justify="space-between">
                  <Text>Nikkei 225</Text>
                  <Text fontWeight="bold">28,123.45</Text>
                </HStack>
              </VStack>
            </Box>
          </GridItem>
        </Grid>
      </Container>
      <Footer />
    </Box>
  );
};

export default Index;