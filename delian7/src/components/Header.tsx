import React, { useEffect, useState } from "react";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import SocialList from "./SocialList";
import {
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@delianpetrov.com",
    text: ''
  },
  {
    icon: faGithub,
    url: "https://github.com/delian7",
    text: ''
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/delianpetrov",
    text: ''
  },
];

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleClick = (e: React.MouseEvent<HTMLElement, MouseEvent>, anchor: string) => {
    e.preventDefault()
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Hide the header when scrolling down, show it when scrolling up
      if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.addEventListener('scroll', handleScroll)
    }
  }, [lastScrollY])

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      // transform={isVisible ? "translateY(0)" : "translateY(-80px)"}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
      zIndex={1000}
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack spacing={8}>
              <SocialList socials={socials}/>
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              <button onClick={(e) => {handleClick(e, "timeline")}}>My Career</button>
              {/* <button onClick={(e) => {handleClick(e, "projects")}}>Projects</button> */}
              {/* <button onClick={(e) => {handleClick(e, "contactme")}}>Contact Me</button> */}
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
