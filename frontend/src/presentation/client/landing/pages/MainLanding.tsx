import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Footer from '../components/Footer';

export default function MainLanding() {
  return (
    <div className="bg-gray-300 max-w-6xl mx-auto">
      <div className="">
        {/* <Navbar/> */}
        <Hero />
        <div className='lg:grid lg:grid-cols-2 lg:gap-0.5'>
          <About />
          <Skills />
        </div>
        <Projects />
        <Footer />
      </div>
    </div>
  );
}
