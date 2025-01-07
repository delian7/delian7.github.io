import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import ProjectsSection from "./components/ProjectsSection";
import { Route, Routes, HashRouter } from 'react-router-dom';
import ContactMeSection from "./components/ContactMeSection";
import Timeline from "./components/Timeline";
import Footer from "./components/Footer";
import { AlertProvider } from "./context/alertContext";
import Alert from "./components/Alert";
import RedirectPage from "./components/RedirectPage";
import SeastatusModalContent from "./components/SeastatusModalContent";
import { ModalProvider } from "./context/modalContext";
import ReactGA from 'react-ga4';
const TRACKING_ID = 'G-5B1WCC02QY'; // Replace with your GA4 Measurement ID
ReactGA.initialize(TRACKING_ID);

const HomePage = () => {
  return (
    <main>
      <Header />
      <LandingSection />
      <ProjectsSection />
      <Timeline />
      <ContactMeSection />
      <Footer />
      <Alert />
    </main>
  )
}

function App() {
  return (
    <HashRouter>
      <ChakraProvider>
        <AlertProvider>
          <ModalProvider>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/seastatus" element={<SeastatusModalContent />} />
              <Route path="/:name" element={<RedirectPage />} />
              <Route path="*" element={<HomePage />} />
            </Routes>
          </ModalProvider>
        </AlertProvider>
      </ChakraProvider>
    </HashRouter>
  );
}

export default App;
