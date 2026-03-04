import { useScrollFade } from '@/hooks/useScrollFade';

const experiences = [
  {
    title: 'Freelance English Tutor',
    desc: 'Taught grammar and literary concepts to middle school students. Created lesson plans adapted to different learning styles.',
  },
  {
    title: 'Academic Research',
    desc: 'Studied the relationship between psychology and literature. Wrote analytical research papers exploring language and cognition.',
  },
  {
    title: 'Literary Society',
    desc: 'Active member organizing discussions, events and creative writing workshops within the college literary community.',
  },
  {
    title: 'Volunteer Teaching',
    desc: 'Volunteered teaching English to underprivileged children, focusing on making language accessible and engaging.',
  },
];

const Experience = () => {
  const ref = useScrollFade();

  return (
    <section id="experience" className="px-8 md:px-16 py-24">
      <div ref={ref} className="scroll-fade max-w-7xl mx-auto">
        <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground">Experience</span>
        <h2 className="text-4xl md:text-5xl mt-6 mb-16 leading-tight">
          Things I've <span className="italic">done</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((e, i) => (
            <div
              key={i}
              className="group p-8 border border-border rounded-2xl hover:bg-accent/30 transition-all duration-500"
            >
              <h3 className="text-xl md:text-2xl mb-4 group-hover:italic transition-all duration-300">
                {e.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{e.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
