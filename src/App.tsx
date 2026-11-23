import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

const App = () => (
  <div className="min-h-screen text-muted font-sans selection:bg-black/15 overflow-x-hidden">
    <Navbar />
    <Hero />
    <main>
      <About />
      <Projects />
      <Experience />
      <Resume />
      <Contact />
    </main>
    <Footer />
    <ScrollToTop />
  </div>
);

export default App;
