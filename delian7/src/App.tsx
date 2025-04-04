import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import ProjectsSection from "./components/ProjectsSection";
import { Route, Routes, BrowserRouter } from 'react-router';
import ContactMeSection from "./components/ContactMeSection";
import Timeline from "./components/Timeline";
import Footer from "./components/Footer";
import { AlertProvider } from "./context/alertContext";
import Alert from "./components/Alert";
import RedirectPage from "./components/RedirectPage";
import SeastatusModalContent from "./components/SeastatusModalContent";
import { ModalProvider } from "./context/modalContext";
import { ScrollProvider } from './context/ScrollContext';
import BackToTopButton from "./components/BackToTopButton";

const HomePage = () => {
  return (
    <main>
      <Header />
      <LandingSection />
      <ProjectsSection />
      <Timeline />
      <ContactMeSection />
      <Footer />
      <BackToTopButton />
      <Alert />
    </main>
  )
}

function AppContent() {
  return (
    <ChakraProvider>
      <AlertProvider>
        <ModalProvider>
          <ScrollProvider>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/seastatus" element={<SeastatusModalContent />} />
              <Route path="/:name" element={<RedirectPage />} />
              <Route path="*" element={<HomePage />} />
            </Routes>
          </ScrollProvider>
        </ModalProvider>
      </AlertProvider>
    </ChakraProvider>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}

export default App;
