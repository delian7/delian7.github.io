import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import ProjectsSection from "./components/ProjectsSection";
import { Route, Routes, BrowserRouter } from 'react-router-dom';
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
    <BrowserRouter>
      <ChakraProvider>
        <AlertProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/:name" element={<RedirectPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </AlertProvider>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
