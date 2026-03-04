import portrait from '@/assets/portrait.jpg';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center px-8 md:px-16 pt-24 pb-16 relative overflow-hidden">
      {/* Floating decorative shapes */}
      <div className="absolute top-20 right-[15%] w-20 h-20 rounded-full border border-border opacity-30 animate-[float_6s_ease-in-out_infinite]" />
      <div className="absolute bottom-32 left-[10%] w-12 h-12 rounded-full bg-accent opacity-20 animate-[float_8s_ease-in-out_infinite_1s]" />

      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
        {/* Left — Text */}
        <div className="lg:col-span-3 space-y-8">
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold uppercase leading-[0.9] tracking-tight">
            Hey,
            <br />
            I'm
            <br />
            <span className="italic font-normal">Aniquah</span>
          </h1>
          <p className="max-w-md text-lg text-muted-foreground leading-relaxed">
            A curious mind exploring the intersection of{' '}
            <span className="text-foreground font-medium">language</span>,{' '}
            <span className="text-foreground font-medium">psychology</span> and{' '}
            <span className="text-foreground font-medium">data</span>.
          </p>
          <div className="flex gap-4 pt-4">
            <a
              href="#about"
              className="text-sm tracking-wide border-b border-foreground pb-1 hover:opacity-60 transition-opacity"
            >
              Explore my world →
            </a>
          </div>
        </div>

        {/* Right — Portrait */}
        <div className="lg:col-span-2 flex justify-center lg:justify-end">
          <div className="relative">
            <div
              className="w-72 h-80 sm:w-80 sm:h-96 rounded-[40%_60%_55%_45%/40%_45%_55%_60%] overflow-hidden shadow-xl"
              style={{ animation: 'morphBlob 8s ease-in-out infinite' }}
            >
              <img
                src={portrait}
                alt="Aniquah Parvin"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative ring */}
            <div className="absolute -top-4 -right-4 w-full h-full rounded-[40%_60%_55%_45%/40%_45%_55%_60%] border-2 border-accent opacity-40" />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes morphBlob {
          0%, 100% { border-radius: 40% 60% 55% 45% / 40% 45% 55% 60%; }
          50% { border-radius: 55% 45% 40% 60% / 55% 60% 40% 45%; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
