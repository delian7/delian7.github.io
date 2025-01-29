import React, { useEffect, useState } from "react";
import { Avatar, Box, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import delianAvatar from "../images/avatar.jpg";
import Weather from "./Weather";
import '../styles/avatar.css';
import ProfileCard from "./ProfileCard";

const greeting = "Hello, I am Delian!";
const bio1 = "a senior full stack developer";
const bio2 = "specialised in Ruby on Rails & React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => {
  // const weatherData = useWeather();
  const [isWeatherVisible, setIsWeatherVisible] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsWeatherVisible(window.innerHeight >= 700);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <FullScreenSection
      className="landing"
      justifyContent="space-between"
      alignItems="center"
      isDarkBackground
      backgroundColor="#2A4365"
      position="relative"
      w="100%"
      flexDirection="column"
      height="100vh"
    >
      <Box className="profile-card" flex="0 1 auto">
        <header>
            <ProfileCard />
          {/* <VStack spacing={3}> */}
            {/* <Avatar className="avatar" size="full" maxW={'60'} src={delianAvatar} /> */}
            {/* <Box className="profile-bio">
              <Heading size="md" pb={8}>{greeting}</Heading>
              <Heading size="lg">{bio1}</Heading>
              <Heading size="lg">{bio2}</Heading>
            </Box> */}
          {/* </VStack> */}
        </header>
      </Box>
      <Box zIndex={99} flex="1" />
      {isWeatherVisible && (
        <Weather />
      )}
    </FullScreenSection>
  );
};

export default LandingSection;
