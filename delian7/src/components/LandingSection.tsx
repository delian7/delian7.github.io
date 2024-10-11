import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import delianAvatar from "../images/avatar.jpg";

const greeting = "Hello, I am Delian!";
const bio1 = "a senior full stack developer";
const bio2 = "specialised in Ruby on Rails & React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={3}>
      <Avatar size="full" maxW={'60'} src={delianAvatar} />
      <Heading size="md" pb={8}>{greeting}</Heading>
      <Heading size="lg">{bio1}</Heading>
      <Heading size="lg">{bio2}</Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
