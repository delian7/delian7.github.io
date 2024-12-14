import React from "react";
import { Avatar, Box, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import delianAvatar from "../images/avatar.jpg";
import Weather from "./Weather";
import '../styles/avatar.css';

const greeting = "Hello, I am Delian!";
const bio1 = "a senior full stack developer";
const bio2 = "specialised in Ruby on Rails & React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    className="landing"
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
    position="relative"
    w="100%"
  >
    <Box className="profile-card">
      <header>
        <VStack spacing={3}>
          <Avatar className="avatar" size="full" maxW={'60'} src={delianAvatar} />
          <Box className="profile-bio">
            <Heading size="md" pb={8}>{greeting}</Heading>
            <Heading size="lg">{bio1}</Heading>
            <Heading size="lg">{bio2}</Heading>
          </Box>
        </VStack>
      </header>
    </Box>
    <Box
      display={{base: 'none', md: 'block'}}
      top={{base: 0, md: '80px'}}
      marginTop={{base: '5em', md: 0}}
      position={{base: 'relative', md: 'absolute'}}
      right={{base: '0', md: '5'}}
    >
      <Weather />
    </Box>
  </FullScreenSection>
);

export default LandingSection;
