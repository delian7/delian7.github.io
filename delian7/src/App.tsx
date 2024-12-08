import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import ProjectsSection from "./components/ProjectsSection";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import ContactMeSection from "./components/ContactMeSection";
import Timeline from "./components/Timeline";
import Footer from "./components/Footer";
import { AlertProvider } from "./context/alertContext";
import Alert from "./components/Alert";
import RedirectPage from "./components/RedirectPage";

const HomePage = () => {
  return (
    <main>
      <Header />
      <LandingSection />
      <ProjectsSection />
      <Timeline />
      {/* <ContactMeSection /> */}
      <Footer />
      <Alert />
    </main>
  )
}

function App() {
  return (
    <Router>
      <ChakraProvider>
        <AlertProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/:name" element={<RedirectPage />} />
          </Routes>
        </AlertProvider>
      </ChakraProvider>
    </Router>
  );
}

export default App;
