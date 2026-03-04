const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-8 py-6 md:px-16">
      <span className="text-sm font-medium tracking-[0.2em] uppercase">Aniquah Parvin</span>
      <div className="hidden md:flex items-center gap-8">
        {['About', 'Skills', 'Journey', 'Experience', 'Contact'].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            {item}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
