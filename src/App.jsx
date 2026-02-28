import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import PracticeAreas from "./components/PracticeAreas";
import CourtLevels from "./components/CourtLevels";
import LawyerPosts from "./components/LawyerPosts";
import ElectionPosts from "./components/ElectionPosts";
import CallToAction from "./components/CallToAction";
import About from "./components/About";
import Contact from "./components/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import ReturnPolicy from "./pages/ReturnPolicy";
import Cancellation from "./pages/Cancellation";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

function HomePage() {
  return (
    <div className="flex flex-col gap-0">
      <Hero />
      {/* <PracticeAreas /> */}
      <CourtLevels />
      <LawyerPosts />
      {/* <ElectionPosts /> */}
      <CallToAction />
      <About />
      <Contact />
    </div>
  );
}

function App() {
  return (
    <>
      <Header />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/return" element={<ReturnPolicy />} />
          <Route path="/cancellation" element={<Cancellation />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
