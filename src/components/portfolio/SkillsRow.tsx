import { motion, useInView } from 'framer-motion';
import { useRef, memo } from 'react';

const skills = [
  {
    title: 'Language & Ideas',
    items: ['Literary analysis', 'Research writing', 'Critical thinking', 'Communication'],
    num: '01',
    icon: '✦',
  },
  {
    title: 'Data & Logic',
    items: ['Python', 'Pandas & NumPy', 'Data visualization', 'Analytical thinking'],
    num: '02',
    icon: '◆',
  },
  {
    title: 'Teaching & Learning',
    items: ['English tutoring', 'Lesson planning', 'Explaining complex ideas', 'Mentoring'],
    num: '03',
    icon: '●',
  },
];

const SkillsRow = memo(() => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="skills" className="px-8 md:px-16 py-32">
      <motion.div
        ref={ref}
        className="max-w-7xl mx-auto"
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.2 },
          },
        }}
      >
        {/* Section header */}
        <motion.div
          className="mb-16"
          variants={{
            hidden: { y: 30, opacity: 0 },
            visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
          }}
        >
          <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground flex items-center gap-3">
            <span className="w-8 h-[1px] bg-accent" />
            Skills
          </span>
          <h2 className="text-4xl md:text-5xl mt-6 leading-tight">
            What I <span className="italic gradient-text">bring</span>
          </h2>
          <div className="section-divider" />
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-border">
          {skills.map((s, index) => (
            <motion.div
              key={s.num}
              className="group border-b md:border-b-0 md:border-r last:border-r-0 border-border p-8 md:p-10 cursor-default relative overflow-hidden"
              variants={{
                hidden: { y: 50, opacity: 0 },
                visible: {
                  y: 0,
                  opacity: 1,
                  transition: {
                    duration: 0.7,
                    ease: [0.25, 0.46, 0.45, 0.94] as const,
                  },
                },
              }}
              whileHover={{ backgroundColor: 'hsl(28 45% 78% / 0.08)' }}
            >
              {/* Background number */}
              <span className="absolute top-4 right-4 text-[80px] font-bold text-foreground/[0.02] leading-none transition-all duration-700 group-hover:text-foreground/[0.06] group-hover:scale-110">
                {s.num}
              </span>

              <motion.span
                className="text-lg text-accent/60 block mb-3"
                animate={isInView ? { rotate: [0, 360] } : {}}
                transition={{ delay: index * 0.3 + 1, duration: 0.8, ease: 'easeOut' }}
              >
                {s.icon}
              </motion.span>

              <span className="text-xs text-muted-foreground tracking-widest">{s.num}</span>

              <h3 className="text-2xl md:text-3xl mt-4 mb-6 transition-all duration-300 group-hover:text-accent-foreground">
                <span className="group-hover:italic transition-all duration-300">{s.title}</span>
              </h3>

              <ul className="space-y-3">
                {s.items.map((item, i) => (
                  <motion.li
                    key={item}
                    className="skill-tag text-sm text-muted-foreground flex items-center gap-2 py-1 px-0 rounded transition-colors duration-300 hover:text-foreground"
                    initial={{ x: -10, opacity: 0 }}
                    animate={isInView ? { x: 0, opacity: 1 } : {}}
                    transition={{ delay: index * 0.2 + i * 0.08 + 0.5, duration: 0.4 }}
                  >
                    <span className="w-1 h-1 rounded-full bg-accent/50 shrink-0" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
});

SkillsRow.displayName = 'SkillsRow';

export default SkillsRow;
