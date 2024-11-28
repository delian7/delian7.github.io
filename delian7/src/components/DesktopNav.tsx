import { HStack } from "@chakra-ui/react";

import { Box } from "@chakra-ui/react";
import SocialList from "./SocialList";
import { useEffect, useState } from "react";

interface DesktopNavProps {
  socials: any;
  handleClick(event: React.MouseEvent<HTMLElement, MouseEvent>, section: string): void;
}

const DesktopNav: React.FC<DesktopNavProps> = ({socials, handleClick}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

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
        <nav>
          <HStack
            px={16}
            py={4}
            justifyContent="space-between"
            alignItems="center"
          >
            <div className="socials">
              <HStack spacing={8}>
                <SocialList socials={socials}/>
              </HStack>
            </div>
            <div className="sections">
              <HStack spacing={8}>
                <button onClick={(e) => {handleClick(e, "timeline")}}>My Career</button>
                <button onClick={(e) => {handleClick(e, "projects")}}>Projects</button>
                {/* <button onClick={(e) => {handleClick(e, "contactme")}}>Contact Me</button> */}
              </HStack>
            </div>
          </HStack>
        </nav>
      </Box>
    </Box>
  );
}

export default DesktopNav;