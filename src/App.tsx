import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => (
  <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-teal-500/30 overflow-x-hidden">
    <Navbar />
    <Hero />
    <main>
      <About />
      <Projects />
      <Contact />
    </main>
    <Footer />
  </div>
);

export default App;
