import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, User, Briefcase, GraduationCap, Users, Award, Mail } from 'lucide-react';

const navLinks = [
  { name: 'About', href: '#about', icon: User },
  { name: 'Career', href: '#career', icon: Briefcase },
  { name: 'Education', href: '#education', icon: GraduationCap },
  { name: 'Community', href: '#community', icon: Users },
  { name: 'Contributions', href: '#contributions', icon: Award },
  { name: 'Contact', href: '#contact', icon: Mail },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-card/95 backdrop-blur-md shadow-card'
            : 'bg-primary/80 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`font-serif text-xl md:text-2xl font-semibold transition-colors ${
                isScrolled ? 'text-primary' : 'text-primary-foreground'
              }`}
              whileHover={{ scale: 1.02 }}
            >
              Malek <span className="text-gradient-gold">Kuoc Deng</span>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => {
                const IconComponent = link.icon;
                return (
                  <motion.button
                    key={link.name}
                    onClick={() => scrollToSection(link.href)}
                    className={`flex items-center gap-2 text-sm font-medium transition-colors relative group ${
                      isScrolled
                        ? 'text-foreground/70 hover:text-primary'
                        : 'text-primary-foreground/90 hover:text-accent'
                    }`}
                    whileHover={{ y: -2 }}
                  >
                    <IconComponent size={16} />
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
                  </motion.button>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className={`md:hidden p-2 transition-colors ${
                isScrolled ? 'text-primary' : 'text-primary-foreground'
              }`}
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle menu"
            >
              <Menu size={24} />
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu - Half Width */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-foreground/20 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Menu Panel - Half Width */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-1/2 bg-card shadow-2xl z-50 md:hidden"
            >
              {/* Close Button */}
              <div className="flex justify-end p-4">
                <motion.button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-foreground hover:text-accent transition-colors"
                  whileTap={{ scale: 0.95 }}
                  aria-label="Close menu"
                >
                  <X size={24} />
                </motion.button>
              </div>

              <div className="flex flex-col h-full pt-4 px-6">
                {navLinks.map((link, index) => {
                  const IconComponent = link.icon;
                  return (
                    <motion.button
                      key={link.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => scrollToSection(link.href)}
                      className="flex items-center gap-3 py-4 text-left text-lg font-medium text-foreground hover:text-accent transition-colors border-b border-border"
                    >
                      <IconComponent size={20} className="text-accent" />
                      {link.name}
                    </motion.button>
                  );
                })}

                {/* Decorative element */}
                <div className="mt-auto mb-8">
                  <div className="w-12 h-1 bg-accent rounded-full" />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
