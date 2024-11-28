import { useState } from 'react'
import '../styles/MobileNav.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SocialList from './SocialList';
import { Box, HStack } from '@chakra-ui/react';

interface MobileNavProps {
  socials: any;
  handleClick(event: React.MouseEvent<HTMLElement, MouseEvent>, section: string): void;
}

const MobileNav: React.FC<MobileNavProps> = ({socials, handleClick}) => {
  const [showMenu, setShowMenu] = useState(false);
  const handleBurgerClick = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    setShowMenu(!showMenu);
  }

  return (
    <div className="mobile-nav" onClick={handleBurgerClick}>
      <div className={`burger ${showMenu ? 'clicked' : ''}`}>
        <span></span>
      </div>
      <nav className={showMenu ? 'show' : ''}>
        <ul className="main">
          <li><a href="#0" onClick={(e) => handleClick(e, "timeline")}>My Career</a></li>
          <li><a href="#0" onClick={(e) => handleClick(e, "projects")}>Projects</a></li>
          {/* <li><a href="#0" onClick={(e) => handleClick(e, "contact")}>Contact Me</a></li> */}
        </ul>

        <HStack
          color="white"
          spacing={8}
          marginY={5}
        >
          <SocialList socials={socials} />
        </HStack>
        <Box color='white' marginY={5} fontSize={'lg'} fontWeight={600} className="about">
          <a href="mailto:hello@delianpetrov.com" className="contact-email">hello@delianpetrov.com</a>
          <span> <br/></span>
          <a href="tel:+18582038510" className="contact-phone">(858) 203-8510</a>
        </Box>
      </nav>
      <div className={`overlay ${showMenu ? 'show' : ''}`}></div>
    </div>
  )
}

export default MobileNav;