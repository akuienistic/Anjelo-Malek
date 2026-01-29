import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Globe, Target, Users } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const highlights = [
    {
      icon: Globe,
      title: 'Global Experience',
      description: 'Professional roots spanning the United States and South Sudan',
    },
    {
      icon: Target,
      title: 'Multi-Sector Leader',
      description: 'Expertise in petroleum, real estate, and banking sectors',
    },
    {
      icon: Users,
      title: 'Community Focus',
      description: 'Committed to education and youth development initiatives',
    },
  ];

  return (
    <section id="about" className="section-padding bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-medium tracking-widest uppercase text-sm">
            About
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2">
            Bridging Worlds, Building Futures
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mt-6" />
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              <span className="font-serif text-2xl text-foreground">Anjelo Malek Qurino Kuoc Deng</span>, 
              also known as Malek Kuoc Deng, is a South Sudanese business executive, entrepreneur, 
              and community leader recognized for his influential role in the country's private 
              sector—particularly in Juba.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              With professional roots spanning the United States and South Sudan, he represents 
              a bridge between international corporate management experience and local entrepreneurial 
              leadership. His career cuts across the petroleum, real estate, and banking sectors, 
              contributing to South Sudan's post-independence economic development.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              With over two decades of professional experience, Malek blends U.S.-based corporate 
              training with senior executive leadership in South Sudan's emerging economy. His work 
              has focused on organizational leadership, investment development, and building resilient 
              private-sector institutions in a post-conflict environment.
            </p>

            {/* Background Note */}
            <div className="p-6 bg-secondary rounded-xl border-l-4 border-accent">
              <p className="text-foreground font-medium mb-2">From Refugee to Business Leader</p>
              <p className="text-muted-foreground text-sm">
                Resettled in the United States as a refugee around 2000, Malek remained actively 
                engaged in South Sudanese political and community life through the SPLM chapters 
                in Utah. Following South Sudan's independence in 2011, he returned home to contribute 
                directly to private-sector development and national reconstruction.
              </p>
            </div>
          </motion.div>

          {/* Highlights Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="group p-6 bg-card rounded-xl shadow-card hover:shadow-gold transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                    <item.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
