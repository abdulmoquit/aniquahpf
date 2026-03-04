import Navbar from '@/components/portfolio/Navbar';
import Hero from '@/components/portfolio/Hero';
import SkillsRow from '@/components/portfolio/SkillsRow';
import About from '@/components/portfolio/About';
import Timeline from '@/components/portfolio/Timeline';
import Experience from '@/components/portfolio/Experience';
import ProjectsPlaceholder from '@/components/portfolio/ProjectsPlaceholder';
import Contact from '@/components/portfolio/Contact';

const Index = () => {
  return (
    <div className="relative">
      <div className="grain-overlay" />
      <Navbar />
      <Hero />
      <SkillsRow />
      <About />
      <Timeline />
      <Experience />
      <ProjectsPlaceholder />
      <Contact />
    </div>
  );
};

export default Index;
