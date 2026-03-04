import { useScrollFade } from '@/hooks/useScrollFade';

const milestones = [
  { year: '2020', text: 'Completed secondary education.' },
  { year: '2022', text: 'Higher secondary studies completed.' },
  { year: '2025', text: "Bachelor's in English & Psychology — St. Joseph's College, Bangalore." },
  { year: '2027', text: "Master's in English — IGNOU (expected)." },
  { year: 'Now', text: 'Exploring Python, data science, and digital research.' },
];

const Timeline = () => {
  const ref = useScrollFade();

  return (
    <section id="journey" className="px-8 md:px-16 py-24 bg-card/50">
      <div ref={ref} className="scroll-fade max-w-4xl mx-auto">
        <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground">Journey</span>
        <h2 className="text-4xl md:text-5xl mt-6 mb-16 leading-tight">
          Learning <span className="italic">timeline</span>
        </h2>

        <div className="relative pl-8 border-l border-border space-y-12">
          {milestones.map((m, i) => (
            <div key={i} className="relative">
              <div className="absolute -left-[2.55rem] top-1 w-5 h-5 rounded-full bg-background border-2 border-foreground" />
              <span className="text-xs tracking-widest text-muted-foreground font-medium">{m.year}</span>
              <p className="text-lg mt-2">{m.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
