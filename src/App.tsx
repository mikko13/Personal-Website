import Navbar from "./components/navbarComponent/Navbar";
import Main from "./components/mainPage/Main";
import Skills from "./components/skillsPage/Skills";
import Background from "./components/backgroundComponents/Background";
import About from "./components/aboutPage/About";
import Projects from "./components/projectsPage/Projects";
import Contact from "./components/contactPage/Contact";
import Footer from "./components/footerComponent/Footer"

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
  return (
    <div className="min-h-screen relative overflow-hidden">
      <style>{globalStyles}</style>
      <Background />
      <div className="relative z-10">
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
