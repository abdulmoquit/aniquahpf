import { useScrollFade } from '@/hooks/useScrollFade';

const ProjectsPlaceholder = () => {
  const ref = useScrollFade();

  return (
    <section className="px-8 md:px-16 py-24 bg-card/50">
      <div ref={ref} className="scroll-fade max-w-4xl mx-auto text-center">
        <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground">Projects</span>
        <h2 className="text-4xl md:text-5xl mt-6 mb-8">
          Experiments & <span className="italic">Projects</span>
        </h2>
        <p className="text-lg text-muted-foreground italic max-w-lg mx-auto">
          Currently building projects in data analysis and digital research.
          This section will evolve as the work grows.
        </p>
      </div>
    </section>
  );
};

export default ProjectsPlaceholder;
