import { useScrollFade } from '@/hooks/useScrollFade';

const About = () => {
  const ref = useScrollFade();

  return (
    <section id="about" className="px-8 md:px-16 py-24">
      <div ref={ref} className="scroll-fade max-w-4xl mx-auto">
        <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground">About</span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl mt-6 mb-10 leading-tight">
          Where stories meet <span className="italic">structure</span>
        </h2>
        <div className="space-y-6 text-lg leading-relaxed text-muted-foreground max-w-2xl">
          <p>
            My background is rooted in{' '}
            <span className="text-foreground font-medium">literature</span> and{' '}
            <span className="text-foreground font-medium">psychology</span> — fields that explore
            how humans think, communicate and interpret the world.
          </p>
          <p>
            I study{' '}
            <span className="text-foreground font-medium">English</span> at St. Joseph's College,
            Bangalore, and am currently pursuing my Master's through IGNOU. My academic work spans
            literary analysis, research writing, and understanding the relationship between language
            and the human mind.
          </p>
          <p>
            Recently, I've started exploring{' '}
            <span className="text-foreground font-medium">data science</span> and programming —
            learning Python, Pandas, NumPy and the foundations of data analysis. I enjoy working
            where ideas, patterns and narratives meet.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
