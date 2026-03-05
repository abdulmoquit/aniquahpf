import { motion } from 'framer-motion';
import { memo } from 'react';

const Hero = memo(() => {
  const letterVariants = {
    hidden: { y: 80, opacity: 0, rotateX: -40 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: {
        delay: i * 0.08 + 0.3,
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    }),
  };

  const words = [
    { text: 'Hey,', line: true },
    { text: "I'm", line: true },
    { text: 'Aniquah', italic: true },
  ];

  return (
    <section className="min-h-[100dvh] flex items-center justify-center px-6 md:px-12 pt-24 pb-32 lg:pb-16 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none mix-blend-screen bg-[radial-gradient(circle_at_50%_50%,hsl(var(--accent)/0.15),transparent_60%)]"></div>

      <motion.div
        className="absolute top-[15%] left-[20%] w-48 h-48 rounded-full border border-accent/20 blur-[2px]"
        animate={{
          y: [0, -40, 0],
          rotate: [0, 90, 180],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-[20%] right-[15%] w-64 h-64 rounded-full bg-accent/5 blur-3xl"
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />
      <motion.div
        className="absolute top-[40%] right-[25%] w-4 h-4 rounded-full bg-foreground/10"
        animate={{
          y: [0, -50, 0],
          opacity: [0.1, 0.4, 0.1],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />
      <motion.div
        className="absolute bottom-[30%] left-[30%] w-3 h-3 rounded-full bg-accent/30"
        animate={{
          y: [0, -20, 0],
          x: [0, -15, 0],
        }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
      />

      {/* Gradient accent line */}
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 top-0 w-[1px] h-32 bg-gradient-to-b from-accent/50 to-transparent"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ delay: 1.5, duration: 1.5, ease: 'easeOut' }}
      />

      <div className="w-full max-w-5xl mx-auto flex flex-col items-center text-center relative z-10 space-y-10 md:space-y-12 mt-12 md:mt-0">
        <div className="space-y-6 md:space-y-8 flex flex-col items-center">
          <h1 className="text-[4rem] leading-none sm:text-7xl md:text-8xl lg:text-[10rem] font-bold uppercase tracking-tighter perspective-[1000px] flex flex-wrap justify-center gap-x-4 sm:gap-x-6">
            {words.map((word, i) => (
              <span key={i} className="block overflow-hidden pb-4">
                <motion.span
                  className={`inline-block ${word.italic ? 'italic font-normal gradient-text' : ''}`}
                  custom={i}
                  variants={letterVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {word.text}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            className="max-w-2xl text-xl md:text-2xl text-muted-foreground leading-relaxed font-light"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.7, ease: 'easeOut' }}
          >
            A curious mind exploring the intersection of{' '}
            <motion.span
              className="text-foreground font-medium inline-block"
              whileHover={{ scale: 1.05, color: 'hsl(28 45% 60%)' }}
              transition={{ duration: 0.2 }}
            >
              language
            </motion.span>
            ,{' '}
            <motion.span
              className="text-foreground font-medium inline-block"
              whileHover={{ scale: 1.05, color: 'hsl(28 45% 60%)' }}
              transition={{ duration: 0.2 }}
            >
              psychology
            </motion.span>{' '}
            and{' '}
            <motion.span
              className="text-foreground font-medium inline-block"
              whileHover={{ scale: 1.05, color: 'hsl(28 45% 60%)' }}
              transition={{ duration: 0.2 }}
            >
              data
            </motion.span>
            .
          </motion.p>
        </div>

        <motion.div
          className="flex flex-col sm:flex-row items-center gap-x-8 gap-y-6 justify-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.6 }}
        >
          <motion.a
            href="#about"
            className="group relative text-base tracking-widest uppercase pb-2 flex items-center gap-3 font-medium"
            whileHover={{ y: -2 }}
            transition={{ duration: 0.3 }}
          >
            <span className="relative">
              Explore my world
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-foreground origin-left transition-transform duration-300 group-hover:scale-x-0" />
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-accent origin-right scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
            </span>
            <motion.span
              className="inline-block"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              →
            </motion.span>
          </motion.a>

          <motion.a
            href="/resume.pdf"
            download="Aniquah_Parvin_Resume.pdf"
            className="group relative text-sm tracking-widest uppercase flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors font-medium border border-muted-foreground/30 hover:border-accent px-8 py-3 rounded-full"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            Resume
            <span className="inline-block text-xs transition-transform duration-300 group-hover:translate-y-[2px]">
              ↓
            </span>
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <span className="text-[11px] tracking-[0.4em] uppercase text-muted-foreground/60 font-medium">Scroll</span>
        <motion.div
          className="w-[1px] h-12 bg-gradient-to-b from-muted-foreground/40 to-transparent"
          animate={{ scaleY: [1, 0.5, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  );
});

Hero.displayName = 'Hero';

export default Hero;
