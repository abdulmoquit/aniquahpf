import { useState, useEffect, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = ['About', 'Skills', 'Journey', 'Experience', 'Contact'];

const Navbar = memo(() => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Track active section
      const sections = navItems.map((item) => item.toLowerCase());
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-8 py-5 md:px-16 transition-all duration-500 ${scrolled
          ? 'bg-background/80 backdrop-blur-xl shadow-[0_1px_0_0_hsl(35_18%_86%/0.5)]'
          : 'bg-transparent'
          }`}
      >
        <motion.a
          href="#"
          className="text-sm font-medium tracking-[0.2em] uppercase relative group"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Aniquah Parvin
          <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-foreground transition-all duration-300 group-hover:w-full" />
        </motion.a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item, i) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 * i + 0.3, duration: 0.5 }}
              className={`relative px-4 py-2 text-sm tracking-wide transition-colors duration-300 rounded-full ${activeSection === item.toLowerCase()
                ? 'text-foreground'
                : 'text-muted-foreground hover:text-foreground'
                }`}
            >
              {activeSection === item.toLowerCase() && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 bg-accent/30 rounded-full"
                  transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                />
              )}
              <span className="relative z-10">{item}</span>
            </motion.a>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <motion.button
          className="md:hidden flex flex-col gap-[5px] w-7 h-7 justify-center items-center"
          onClick={() => setMobileOpen(!mobileOpen)}
          whileTap={{ scale: 0.9 }}
          aria-label="Toggle navigation menu"
        >
          <motion.span
            className="block w-5 h-[1.5px] bg-foreground origin-center"
            animate={mobileOpen ? { rotate: 45, y: 3.25 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="block w-5 h-[1.5px] bg-foreground"
            animate={mobileOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.2 }}
          />
          <motion.span
            className="block w-5 h-[1.5px] bg-foreground origin-center"
            animate={mobileOpen ? { rotate: -45, y: -3.25 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
          />
        </motion.button>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-30 bg-background/95 backdrop-blur-2xl flex flex-col items-center justify-center gap-8"
          >
            {navItems.map((item, i) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ delay: 0.05 * i, duration: 0.4 }}
                className="text-3xl font-light tracking-wide text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {item}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
});

Navbar.displayName = 'Navbar';

export default Navbar;
