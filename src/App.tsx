import { useState, useEffect } from "react";
import Navbar from "./components/navbarComponent/Navbar";
import Main from "./components/mainPage/Main";
import Skills from "./components/skillsPage/Skills";
import Background from "./components/backgroundComponents/Background";
import About from "./components/aboutPage/About";
import Projects from "./components/projectsPage/Projects";
import Contact from "./components/contactPage/Contact";
import Footer from "./components/footerComponent/Footer";
import LogoLoader from "./components/Loader";

const globalStyles = `
@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fadeIn 0.7s ease-out forwards;
}
`;

function App() {
  const [loading, setLoading] = useState(true);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    const hideTimer = setTimeout(() => {
      setShowLoader(false);
    }, 3500);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      <style>{globalStyles}</style>
      <Background />

      {showLoader && (
        <div
          className={`fixed inset-0 z-50 bg-${Background} transition-opacity duration-500 ${
            !loading ? "opacity-0" : "opacity-100"
          }`}
        >
          <LogoLoader />
        </div>
      )}

      <Background />
      <div
        className={`relative z-10 transition-opacity duration-500 ${
          loading ? "opacity-0" : "opacity-100"
        }`}
      >
        <Navbar />
        <Main />
        <Skills />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
