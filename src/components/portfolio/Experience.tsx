import { motion, useInView } from 'framer-motion';
import { useRef, memo } from 'react';

const experiences = [
  {
    title: 'Freelance English Tutor',
    desc: 'Taught grammar and literary concepts to middle school students. Created lesson plans adapted to different learning styles.',
    icon: '📚',
    tag: 'Teaching',
  },
  {
    title: 'Academic Research',
    desc: 'Studied the relationship between psychology and literature. Wrote analytical research papers exploring language and cognition.',
    icon: '🔬',
    tag: 'Research',
  },
  {
    title: 'Literary Society',
    desc: 'Active member organizing discussions, events and creative writing workshops within the college literary community.',
    icon: '✍️',
    tag: 'Community',
  },
  {
    title: 'Volunteer Teaching',
    desc: 'Volunteered teaching English to underprivileged children, focusing on making language accessible and engaging.',
    icon: '💡',
    tag: 'Volunteering',
  },
];

const Experience = memo(() => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="experience" className="px-8 md:px-16 py-32 relative">
      {/* Background glow */}
      <motion.div
        className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-accent/5 blur-[120px]"
        animate={{
          scale: [1, 1.15, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        ref={ref}
        className="max-w-7xl mx-auto relative"
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.12 } },
        }}
      >
        <motion.span
          className="text-xs tracking-[0.3em] uppercase text-muted-foreground flex items-center gap-3"
          variants={{
            hidden: { y: 20, opacity: 0 },
            visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
          }}
        >
          <span className="w-8 h-[1px] bg-accent" />
          Experience
        </motion.span>

        <motion.h2
          className="text-4xl md:text-5xl mt-6 mb-4 leading-tight"
          variants={{
            hidden: { y: 30, opacity: 0 },
            visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
          }}
        >
          Things I've <span className="italic gradient-text">done</span>
        </motion.h2>

        <motion.div
          className="section-divider mb-16"
          variants={{
            hidden: { scaleX: 0 },
            visible: { scaleX: 1, transition: { duration: 0.8 } },
          }}
          style={{ transformOrigin: 'left' }}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experiences.map((e, i) => (
            <motion.div
              key={i}
              className="group relative p-8 border border-border/60 rounded-2xl cursor-default overflow-hidden"
              variants={{
                hidden: { y: 50, opacity: 0, scale: 0.95 },
                visible: {
                  y: 0,
                  opacity: 1,
                  scale: 1,
                  transition: {
                    duration: 0.6,
                    ease: [0.25, 0.46, 0.45, 0.94] as const,
                  },
                },
              }}
              whileHover={{
                y: -5,
                boxShadow: '0 20px 60px -15px hsl(28 45% 78% / 0.15)',
                borderColor: 'hsl(28 45% 78% / 0.4)',
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

              <div className="relative">
                {/* Tag */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl">{e.icon}</span>
                  <span className="text-[10px] tracking-[0.2em] uppercase text-accent/70 font-medium px-3 py-1 rounded-full border border-accent/20">
                    {e.tag}
                  </span>
                </div>

                <h3 className="text-xl md:text-2xl mb-4 transition-all duration-300 group-hover:text-foreground">
                  <span className="group-hover:italic transition-all duration-300">{e.title}</span>
                </h3>

                <p className="text-muted-foreground leading-relaxed">{e.desc}</p>

                {/* Bottom accent line */}
                <motion.div
                  className="absolute bottom-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-accent/30 to-transparent"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
});

Experience.displayName = 'Experience';

export default Experience;
