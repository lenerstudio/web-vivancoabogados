import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Benefits from './components/Benefits';
import Audience from './components/Audience';
import SocialProof from './components/SocialProof';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans text-slate-800 antialiased bg-white selection:bg-accent selection:text-white overflow-x-hidden">
      <Header />
      <Hero />
      <About />
      <Services />
      <Benefits />
      <Audience />
      <SocialProof />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
