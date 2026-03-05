import { motion, useInView } from 'framer-motion';
import { useRef, useState, memo } from 'react';

const Contact = memo(() => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const links = [
    { label: 'mail2aniquah@gmail.com', href: 'mailto:mail2aniquah@gmail.com', id: 'email' },
    { label: 'LinkedIn', href: '#', id: 'linkedin' },
  ];

  return (
    <>
      <section id="contact" className="px-8 md:px-16 py-32 relative overflow-hidden">
        {/* Background gradient */}
        <motion.div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-accent/5 blur-[120px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />

        <motion.div
          ref={ref}
          className="max-w-4xl mx-auto text-center relative"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
        >
          <motion.span
            className="text-xs tracking-[0.3em] uppercase text-muted-foreground"
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
            }}
          >
            Contact
          </motion.span>

          <motion.h2
            className="text-4xl md:text-6xl mt-6 mb-4"
            variants={{
              hidden: { y: 40, opacity: 0 },
              visible: { y: 0, opacity: 1, transition: { duration: 0.7 } },
            }}
          >
            Let's <span className="italic gradient-text">connect</span>
          </motion.h2>

          <motion.div
            className="mx-auto w-16 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent mb-10"
            variants={{
              hidden: { scaleX: 0 },
              visible: { scaleX: 1, transition: { duration: 0.8, delay: 0.2 } },
            }}
          />

          <motion.p
            className="text-muted-foreground text-lg mb-12 max-w-md mx-auto"
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
            }}
          >
            Have a question, idea, or just want to say hello?
            I'd love to hear from you.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1 } },
            }}
          >
            {links.map((link) => (
              <motion.a
                key={link.id}
                href={link.href}
                className="relative text-muted-foreground transition-colors duration-300 pb-2 group"
                variants={{
                  hidden: { y: 20, opacity: 0 },
                  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
                }}
                onHoverStart={() => setHoveredLink(link.id)}
                onHoverEnd={() => setHoveredLink(null)}
                whileHover={{ y: -2 }}
              >
                <span className={`transition-colors duration-300 ${hoveredLink === link.id ? 'text-foreground' : ''}`}>
                  {link.label}
                </span>
                <motion.span
                  className="absolute bottom-0 left-0 h-[1px] bg-accent"
                  initial={{ width: 0 }}
                  animate={{ width: hoveredLink === link.id ? '100%' : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <motion.footer
        className="relative px-8 md:px-16 py-10 border-t border-border/50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground/60">
          <motion.span
            whileHover={{ color: 'hsl(220 20% 12%)' }}
            transition={{ duration: 0.3 }}
          >
            © 2025 Aniquah Parvin
          </motion.span>

          <div className="flex items-center gap-2">
            <span>Built with</span>
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="text-accent"
            >
              ♥
            </motion.span>
            <span>& curiosity</span>
          </div>
        </div>
      </motion.footer>
    </>
  );
});

Contact.displayName = 'Contact';

export default Contact;
