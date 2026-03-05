import { motion, useInView } from 'framer-motion';
import { useRef, memo } from 'react';

const About = memo(() => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  return (
    <section id="about" className="px-8 md:px-16 py-32 relative">
      {/* Subtle background accent */}
      <motion.div
        className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[100px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        ref={ref}
        className="max-w-4xl mx-auto relative"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <motion.span
          className="text-xs tracking-[0.3em] uppercase text-muted-foreground flex items-center gap-3"
          variants={itemVariants}
        >
          <span className="w-8 h-[1px] bg-accent" />
          About
        </motion.span>

        <motion.h2
          className="text-4xl md:text-5xl lg:text-6xl mt-6 mb-4 leading-tight"
          variants={itemVariants}
        >
          Where stories meet <span className="italic gradient-text">structure</span>
        </motion.h2>

        <motion.div className="section-divider" variants={itemVariants} />

        <motion.div
          className="space-y-6 text-lg leading-relaxed text-muted-foreground max-w-2xl mt-10"
          variants={containerVariants}
        >
          <motion.p variants={itemVariants}>
            My background is rooted in{' '}
            <span className="text-foreground font-medium relative inline-block group">
              literature
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-accent/50 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </span>{' '}
            and{' '}
            <span className="text-foreground font-medium relative inline-block group">
              psychology
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-accent/50 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </span>{' '}
            — fields that explore how humans think, communicate and interpret the world.
          </motion.p>

          <motion.p variants={itemVariants}>
            I study{' '}
            <span className="text-foreground font-medium relative inline-block group">
              English
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-accent/50 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </span>{' '}
            at St. Joseph's College, Bangalore, and am currently pursuing my Master's through IGNOU. My
            academic work spans literary analysis, research writing, and understanding the relationship
            between language and the human mind.
          </motion.p>

          <motion.p variants={itemVariants}>
            Recently, I've started exploring{' '}
            <span className="text-foreground font-medium relative inline-block group">
              data science
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-accent/50 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </span>{' '}
            and programming — learning Python, Pandas, NumPy and the foundations of data analysis. I enjoy
            working where ideas, patterns and narratives meet.
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
});

About.displayName = 'About';

export default About;
