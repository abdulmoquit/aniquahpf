import { motion, useInView } from 'framer-motion';
import { useRef, useState, memo } from 'react';

const Contact = memo(() => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "4d1db2b0-695c-4acb-8fa6-b095573d5ba6");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });
      const data = await res.json();

      if (data.success) {
        setSubmitStatus('success');
        (e.target as HTMLFormElement).reset();
        setTimeout(() => setSubmitStatus('idle'), 3000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const links = [
    { label: 'mail2aniquah@gmail.com', href: 'mailto:mail2aniquah@gmail.com', id: 'email' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/aniquah-parvin-77773837b/', id: 'linkedin', target: '_blank', rel: 'noopener noreferrer' },
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
            className="text-muted-foreground text-lg mb-10 max-w-md mx-auto"
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
            }}
          >
            Have a question, idea, or just want to say hello?
            I'd love to hear from you.
          </motion.p>

          <motion.form
            className="w-full max-w-md mx-auto mb-16 flex flex-col gap-4 text-left"
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
            }}
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              className="w-full bg-background/40 backdrop-blur-sm border border-border/60 rounded-xl px-5 py-3.5 text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:border-accent/80 focus:ring-1 focus:ring-accent/80 transition-all duration-300"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="w-full bg-background/40 backdrop-blur-sm border border-border/60 rounded-xl px-5 py-3.5 text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:border-accent/80 focus:ring-1 focus:ring-accent/80 transition-all duration-300"
            />
            <textarea
              name="message"
              placeholder="Message"
              required
              rows={4}
              className="w-full bg-background/40 backdrop-blur-sm border border-border/60 rounded-xl px-5 py-3.5 text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:border-accent/80 focus:ring-1 focus:ring-accent/80 transition-all duration-300 resize-none"
            />

            {submitStatus === 'success' && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-green-600/80 text-sm text-center font-medium my-1"
              >
                Message sent successfully!
              </motion.p>
            )}

            {submitStatus === 'error' && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-500/80 text-sm text-center font-medium my-1"
              >
                Something went wrong. Please try again.
              </motion.p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full mt-2 bg-foreground text-background font-medium py-4 rounded-xl text-sm transition-all duration-300 hover:bg-foreground/90 hover:scale-[1.01] active:scale-[0.98] shadow-lg shadow-foreground/5 relative overflow-hidden group disabled:opacity-70 disabled:cursor-not-allowed"
            >
              <span className={`relative z-10 transition-transform duration-300 inline-block w-full ${isSubmitting ? 'translate-y-0' : 'group-hover:-translate-y-8'}`}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </span>
              {!isSubmitting && (
                <span className="absolute inset-0 flex items-center justify-center translate-y-8 transition-transform duration-300 group-hover:translate-y-0 text-accent group-hover:bg-foreground/90">
                  Send ✦
                </span>
              )}
            </button>
          </motion.form>

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
                target={link.target}
                rel={link.rel}
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
