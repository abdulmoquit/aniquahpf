import { lazy, Suspense, useState, useEffect, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/portfolio/Navbar';
import Hero from '@/components/portfolio/Hero';
import FlowerCursor from '@/components/portfolio/FlowerCursor';

// Lazy load below-the-fold sections for faster initial paint
const SkillsRow = lazy(() => import('@/components/portfolio/SkillsRow'));
const About = lazy(() => import('@/components/portfolio/About'));
const Timeline = lazy(() => import('@/components/portfolio/Timeline'));
const Experience = lazy(() => import('@/components/portfolio/Experience'));
const ProjectsPlaceholder = lazy(() => import('@/components/portfolio/ProjectsPlaceholder'));
const Contact = lazy(() => import('@/components/portfolio/Contact'));

// Minimal fallback — invisible spacer to prevent layout shift
const SectionFallback = memo(() => (
  <div style={{ minHeight: '50vh' }} />
));
SectionFallback.displayName = 'SectionFallback';

const GrainOverlay = memo(() => (
  <div className="grain-overlay" aria-hidden="true" />
));
GrainOverlay.displayName = 'GrainOverlay';

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        className="relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Custom flower cursor — uses rAF, zero re-renders */}
        <FlowerCursor />

        {/* Grain overlay */}
        <GrainOverlay />

        {/* Page load curtain */}
        <motion.div
          className="fixed inset-0 bg-background z-[100]"
          initial={{ opacity: 1 }}
          animate={{ opacity: isLoaded ? 0 : 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          style={{ pointerEvents: isLoaded ? 'none' : 'auto' }}
          aria-hidden="true"
        />

        <Navbar />
        <Hero />

        {/* Below-fold content — lazy loaded */}
        <Suspense fallback={<SectionFallback />}>
          <About />
          <SkillsRow />
          <Timeline />
          <Experience />
          <ProjectsPlaceholder />
          <Contact />
        </Suspense>
      </motion.div>
    </AnimatePresence>
  );
};

export default Index;
