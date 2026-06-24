import heroImg from '@assets/hero.jpeg';
import { Github, Instagram, Linkedin, Youtube } from 'react-bootstrap-icons';

function Hero() {
  return (
    <div className="bg-white mb-0.5">
      <div className="flex flex-col md:flex-row md:items-center gap-5 py-10 px-5">
        <div>
          <img src={heroImg} alt="jujun" className="w-40 block shadow-lg" />
        </div>
        <div>
          <div className="mt-3">
            <h1 className="text-lg lg:text-2xl mb-3 font-mono">Hi, I'm Jujun Junaedi👋</h1>
            <span className="text-sm lg:text-lg">Software Engineer • MERN Stack • Clean Architecture Enthusiast.</span>
          </div>
          <div className="flex gap-8 mt-5">
            <a href="https://github.com/Jujunju" className="block rounded-lg hover:-translate-y-1 transition-all duration-200">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/jujun-junaedi-36b3833a2/" className="blockrounded-lg hover:-translate-y-1 transition-all duration-200">
              <Linkedin size={20} />
            </a>
            <a href="https://www.youtube.com/@jnjunaedi" className="blockrounded-lg hover:-translate-y-1 transition-all duration-200">
              <Youtube size={20} />
            </a>
            <a href="https://www.instagram.com/jnjunaedi/" className="blockrounded-lg hover:-translate-y-1 transition-all duration-200">
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
