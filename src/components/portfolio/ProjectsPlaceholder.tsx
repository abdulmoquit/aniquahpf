import { motion, useInView } from 'framer-motion';
import { useRef, memo } from 'react';

const ProjectsPlaceholder = memo(() => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="px-8 md:px-16 py-32 bg-card/50 relative overflow-hidden">
      {/* Animated background dots */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-accent/20"
          style={{
            left: `${20 + i * 15}%`,
            top: `${30 + (i % 3) * 20}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.5,
          }}
        />
      ))}

      <motion.div
        ref={ref}
        className="max-w-4xl mx-auto text-center relative"
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.15 } },
        }}
      >
        <motion.span
          className="text-xs tracking-[0.3em] uppercase text-muted-foreground"
          variants={{
            hidden: { y: 20, opacity: 0 },
            visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
          }}
        >
          Projects
        </motion.span>

        <motion.h2
          className="text-4xl md:text-5xl mt-6 mb-8"
          variants={{
            hidden: { y: 30, opacity: 0 },
            visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
          }}
        >
          Experiments & <span className="italic gradient-text">Projects</span>
        </motion.h2>

        <motion.div
          className="mx-auto w-16 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent mb-8"
          variants={{
            hidden: { scaleX: 0 },
            visible: { scaleX: 1, transition: { duration: 0.8 } },
          }}
        />

        <motion.p
          className="text-lg text-muted-foreground italic max-w-lg mx-auto"
          variants={{
            hidden: { y: 20, opacity: 0 },
            visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
          }}
        >
          Currently building projects in data analysis and digital research.
          This section will evolve as the work grows.
        </motion.p>

        {/* Animated placeholder cards */}
        <motion.div
          className="flex justify-center gap-4 mt-12"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {[1, 2, 3].map((n) => (
            <motion.div
              key={n}
              className="w-24 h-28 rounded-xl border border-border/50 border-dashed flex items-center justify-center"
              variants={{
                hidden: { y: 20, opacity: 0, scale: 0.9 },
                visible: {
                  y: 0,
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.5 },
                },
              }}
              whileHover={{
                borderColor: 'hsl(28 45% 78% / 0.5)',
                scale: 1.05,
              }}
            >
              <motion.span
                className="text-2xl text-muted-foreground/30"
                animate={{
                  opacity: [0.2, 0.5, 0.2],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: n * 0.3,
                }}
              >
                +
              </motion.span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
});

ProjectsPlaceholder.displayName = 'ProjectsPlaceholder';

export default ProjectsPlaceholder;
