import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faCodepen
} from "@fortawesome/free-brands-svg-icons";
import { useModalContext } from '../context/modalContext';
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import ResumeModalContent from "./ResumeModalContent";

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
  {
    icon: faCodepen,
    url: "https://codepen.io/delian7",
    text: ''
  },
];

const Header = () => {
  const { openModal, setModalContent, setModalTitle } = useModalContext();

  const openResumeModal = () => {
    setModalTitle('My Resume')
    setModalContent(<ResumeModalContent />)
    openModal()
  }

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

  return (
    <>
      <DesktopNav socials={socials} handleClick={handleClick} openResumeModal={openResumeModal} />
      <MobileNav socials={socials} handleClick={handleClick} openResumeModal={openResumeModal} />
    </>
  );
};
export default Header;
