import { motion, useInView } from 'framer-motion';
import { useRef, memo } from 'react';

const milestones = [
  { year: '2020', text: 'Completed secondary education.', side: 'left' as const },
  { year: '2022', text: 'Higher secondary studies completed.', side: 'right' as const },
  { year: '2025', text: "Bachelor's in English & Psychology — St. Joseph's College, Bangalore.", side: 'left' as const },
  { year: '2027', text: "Master's in English — IGNOU (expected).", side: 'right' as const },
  { year: 'Now', text: 'Exploring Python, data science, and digital research.', side: 'left' as const },
];

const Timeline = memo(() => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="journey" className="px-8 md:px-16 py-32 bg-card/50 relative overflow-hidden">
      {/* Background decoration */}
      <motion.div
        className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-accent/5 blur-[80px]"
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        ref={ref}
        className="max-w-4xl mx-auto"
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.15 } },
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
          Journey
        </motion.span>

        <motion.h2
          className="text-4xl md:text-5xl mt-6 mb-4 leading-tight"
          variants={{
            hidden: { y: 30, opacity: 0 },
            visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
          }}
        >
          Learning <span className="italic gradient-text">timeline</span>
        </motion.h2>

        <motion.div
          className="section-divider mb-16"
          variants={{
            hidden: { scaleX: 0 },
            visible: { scaleX: 1, transition: { duration: 0.8 } },
          }}
          style={{ transformOrigin: 'left' }}
        />

        <div className="relative pl-8 border-l border-border space-y-14">
          {/* Animated line fill */}
          <motion.div
            className="absolute left-[-1px] top-0 w-[1px] bg-accent/50"
            initial={{ height: 0 }}
            animate={isInView ? { height: '100%' } : { height: 0 }}
            transition={{ duration: 2, delay: 0.5, ease: 'easeOut' }}
          />

          {milestones.map((m, i) => (
            <motion.div
              key={i}
              className="relative group"
              variants={{
                hidden: { x: -30, opacity: 0 },
                visible: {
                  x: 0,
                  opacity: 1,
                  transition: {
                    duration: 0.6,
                    ease: [0.25, 0.46, 0.45, 0.94] as const,
                  },
                },
              }}
            >
              {/* Dot */}
              <motion.div
                className="absolute -left-[2.55rem] top-1 w-5 h-5 rounded-full bg-background border-2 border-foreground/20 group-hover:border-accent group-hover:bg-accent/20 transition-all duration-300"
                whileHover={{ scale: 1.3 }}
              />

              {/* Inner dot */}
              <motion.div
                className="absolute -left-[2.2rem] top-[0.6rem] w-2 h-2 rounded-full bg-foreground/20 group-hover:bg-accent transition-all duration-300"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ delay: i * 0.15 + 0.8, duration: 0.3 }}
              />

              <motion.span
                className="text-xs tracking-widest text-accent font-semibold"
                whileHover={{ letterSpacing: '0.2em' }}
                transition={{ duration: 0.3 }}
              >
                {m.year}
              </motion.span>

              <p className="text-lg mt-2 text-foreground/80 group-hover:text-foreground transition-colors duration-300">
                {m.text}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
});

Timeline.displayName = 'Timeline';

export default Timeline;
