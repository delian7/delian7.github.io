import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";
import { useModalContext } from '../context/modalContext'; // Import the hook


import SeastatusModalContent from "./SeastatusModalContent";
import FridgeGuideModalContent from "./FridgeGuideModalContent";
import MetroGroupModalContent from "./MetroGroupModalContent";
import VisageModalContent from "./VisageModalContent";
import WanderfultanzaniaContent from "./WanderfulTanzaniaContent";

interface Project {
  title: string;
  description: string;
  logo: () => string;
  hero: () => string;
  modalContent: JSX.Element;
}

const projects: Project[] = [
  {
    title: "Software Develompent Consultant",
    description: "Empowering Wanderful Tanzania Safaris Through Innovative Software Solutions",
    logo: () => require("../images/wanderfultanzania/logo.png"),
    hero: () => require("../images/wanderfultanzania/hero.png"),
    modalContent: <WanderfultanzaniaContent />
  },
  {
    title: "FridgeGuide Ai",
    description:
      "AI designed to categorize groceries and create new recipes",
    logo: () => require("../images/fridgeguide/fridgeguide_logo.png"),
    hero: () => require("../images/fridgeguide/hero2.png"),
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
      "Brand creation and visualization tool",
    logo: () => require("../images/visage_logo_white.png"),
    hero: () => require("../images/visage/card.png"),
    modalContent: <VisageModalContent />
  },
];

const ProjectsSection = () => {
  const { openModal, setModalContent, setModalTitle } = useModalContext();

  const handleOpenModal = (project: Project) => {
    setModalTitle(`${project.title}: ${project.description}`)
    setModalContent(project.modalContent);
    openModal();
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

      <div style={{ display: 'none' }}>
        {projects.map((project) => (
          <div key={project.title} id={`modal-content-${project.title}`}>
            {project.modalContent}
          </div>
        ))}
      </div>
    </FullScreenSection>
  );
};

export default ProjectsSection;
