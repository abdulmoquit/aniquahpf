import { useScrollFade } from '@/hooks/useScrollFade';

const Contact = () => {
  const ref = useScrollFade();

  return (
    <>
      <section id="contact" className="px-8 md:px-16 py-24">
        <div ref={ref} className="scroll-fade max-w-4xl mx-auto text-center">
          <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground">Contact</span>
          <h2 className="text-4xl md:text-6xl mt-6 mb-10">
            Let's <span className="italic">connect</span>
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-muted-foreground">
            <a
              href="mailto:mail2aniquah@gmail.com"
              className="hover:text-foreground transition-colors duration-300 border-b border-transparent hover:border-foreground pb-1"
            >
              mail2aniquah@gmail.com
            </a>
            <span className="hidden sm:block">·</span>
            <a
              href="https://aniquahparvin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors duration-300 border-b border-transparent hover:border-foreground pb-1"
            >
              aniquahparvin.com
            </a>
            <span className="hidden sm:block">·</span>
            <a
              href="#"
              className="hover:text-foreground transition-colors duration-300 border-b border-transparent hover:border-foreground pb-1"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-primary-foreground px-8 md:px-16 py-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm opacity-60">
          <span>© 2025 Aniquah Parvin</span>
          <span>Built with curiosity</span>
        </div>
      </footer>
    </>
  );
};

export default Contact;
