import FullScreenSection from "./FullScreenSection";
import { Box, Button, Heading, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure, Text } from "@chakra-ui/react";
import Card from "./Card";
import { useState } from "react";

import SeastatusModalContent from "./SeastatusModalContent";
import FridgeGuideModalContent from "./FridgeGuideModalContent";
import MetroGroupModalContent from "./MetroGroupModalContent";

interface Project {
  title: string;
  description: string;
  logo: () => string;
  hero: () => string;
  modalContent: JSX.Element;
}

const projects: Project[] = [
  {
    title: "FridgeGuide Ai",
    description:
      "A One-stop shop e",
    logo: () => require("../images/fridgeguide/fridgeguide_logo.png"),
    hero: () => require("../images/seastatus/new-home.png"),
    modalContent: <FridgeGuideModalContent />
  },
  {
    title: "MetroGroup Realty Finance",
    description:
      "Reporting financial metrics using AWS Lambda & interactive charts",
    logo: () => require("../images/metrogroup/logo.png"),
    hero: () => require("../images/metrogroup/card.png"),
    modalContent: <MetroGroupModalContent />
  },
  {
    title: "SeaStatus",
    description:
      "iOS On-the-Go Marine Weather App",
    logo: () => require("../images/seastatus_logo.png"),
    hero: () => require("../images/seastatus/new-home.png"),
    modalContent: <SeastatusModalContent />
  },
  {
    title: "Visage",
    description:
      "implemented in JS land 🔥️",
    logo: () => require("../images/visage_logo_white.png"),
    hero: () => require("../images/seastatus/new-home.png"),
    modalContent: <SeastatusModalContent />
  },
];

const ProjectsSection = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [modalTitle, setModalTitle] = useState("Modal Title");
  const [modalContent, setModalContent] = useState<JSX.Element | null>(null);

  const handleOpenModal = (project: Project) => {
    setModalTitle(`${project.title}: ${project.description}`)
    setModalContent(project.modalContent);
    onOpen();
  };

  return (
    <FullScreenSection
      backgroundColor="#53143A"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            modalOpen={() => handleOpenModal(project)}
            key={project.title}
            title={project.title}
            description={project.description}
            logo={project.logo()}
            hero={project.hero()}
          />
        ))}
      </Box>

      <Modal
        size={'4xl'}
        motionPreset='slideInBottom'
        onClose={onClose}
        isOpen={isOpen}
        // isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Text
              fontSize={'2xl'}
              color={"rgb(29, 112, 151);"}
              fontWeight={700}
            >
              {modalTitle}
            </Text>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {modalContent}
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </FullScreenSection>
  );
};

export default ProjectsSection;
