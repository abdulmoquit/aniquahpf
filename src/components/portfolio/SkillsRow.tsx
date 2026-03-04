import { useScrollFade } from '@/hooks/useScrollFade';

const skills = [
  {
    title: 'Language & Ideas',
    items: ['Literary analysis', 'Research writing', 'Critical thinking', 'Communication'],
    num: '01',
  },
  {
    title: 'Data & Logic',
    items: ['Python', 'Pandas & NumPy', 'Data visualization', 'Analytical thinking'],
    num: '02',
  },
  {
    title: 'Teaching & Learning',
    items: ['English tutoring', 'Lesson planning', 'Explaining complex ideas', 'Mentoring'],
    num: '03',
  },
];

const SkillsRow = () => {
  const ref = useScrollFade();

  return (
    <section id="skills" className="px-8 md:px-16 py-24">
      <div ref={ref} className="scroll-fade max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-border">
        {skills.map((s) => (
          <div
            key={s.num}
            className="group border-b md:border-b-0 md:border-r last:border-r-0 border-border p-8 md:p-10 hover:bg-accent/30 transition-colors duration-500 cursor-default"
          >
            <span className="text-xs text-muted-foreground tracking-widest">{s.num}</span>
            <h3 className="text-2xl md:text-3xl mt-4 mb-6 group-hover:italic transition-all duration-300">
              {s.title}
            </h3>
            <ul className="space-y-2">
              {s.items.map((item) => (
                <li key={item} className="text-sm text-muted-foreground">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsRow;
