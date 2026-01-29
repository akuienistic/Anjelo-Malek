import { motion } from "framer-motion";
import { Facebook, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-serif text-2xl md:text-3xl font-bold mb-4"
            >
              Malek <span className="text-gradient-gold">Kuoc Deng</span>
            </motion.h2>
            <p className="text-primary-foreground/70 leading-relaxed mb-6 max-w-md">
              Business leader driving South Sudan's private sector growth through excellence in petroleum, real estate,
              and banking sectors.
            </p>
            <div className="flex gap-4">
              <motion.a
                href="https://web.facebook.com/malek.dengmalek"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-primary-foreground/10 rounded-full hover:bg-accent hover:text-accent-foreground transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </motion.a>
              <motion.a
                href="mailto:contact@malekkuocdeng.com"
                className="p-3 bg-primary-foreground/10 rounded-full hover:bg-accent hover:text-accent-foreground transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Email"
              >
                <Mail size={20} />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4 text-accent">Quick Links</h3>
            <ul className="space-y-3">
              {["About", "Career", "Education", "Community", "Contributions"].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => scrollToSection(`#${link.toLowerCase()}`)}
                    className="text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4 text-accent">Location</h3>
            <div className="space-y-3 text-primary-foreground/70">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 flex-shrink-0 text-accent" />
                <span>Juba, South Sudan</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/50 text-sm">© {currentYear} Malek Kuoc Deng. All rights reserved.</p>
            <p className="text-primary-foreground/50 text-sm flex items-center gap-2">
              Designed and Built by{""}
              <a
                href="https://www.linkedin.com/in/simon-akuien-atem-710895290/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-gold-light transition-colors font-medium inline-flex items-center gap-1"
              >
                Simon Star Tech
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
