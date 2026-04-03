import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import WhyUs from './components/WhyUs';
import Team from './components/Team';
import CaseStudies from './components/CaseStudies';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <WhyUs />
        <Team />
        <CaseStudies />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
