import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Heart, BookOpen, Users, Globe2 } from 'lucide-react';

const Community = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const initiatives = [
    {
      icon: BookOpen,
      title: 'Education Access',
      description: 'Supporting access to education through school sponsorships and scholarship programs.',
    },
    {
      icon: Users,
      title: 'Youth Development',
      description: 'Promoting youth development programs to empower the next generation of leaders.',
    },
    {
      icon: Globe2,
      title: 'Diaspora Engagement',
      description: 'Advocating for stronger diaspora participation in South Sudan\'s economic growth.',
    },
    {
      icon: Heart,
      title: 'Community Empowerment',
      description: 'Committed to education, community empowerment, and national development initiatives.',
    },
  ];

  return (
    <section id="community" className="section-padding bg-primary" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-medium tracking-widest uppercase text-sm">
            Giving Back
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mt-2">
            Community Involvement
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mt-6" />
          <p className="mt-6 text-primary-foreground/80 max-w-2xl mx-auto text-lg">
            Beyond business, Malek is actively involved in community development initiatives 
            that create lasting impact across South Sudan.
          </p>
        </motion.div>

        {/* Initiatives Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {initiatives.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="group relative overflow-hidden bg-primary-foreground/10 backdrop-blur-sm p-8 rounded-2xl border border-primary-foreground/20 hover:bg-primary-foreground/15 transition-all duration-300"
            >
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl" />

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-accent rounded-xl">
                    <item.icon className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-primary-foreground">
                    {item.title}
                  </h3>
                </div>
                <p className="text-primary-foreground/80 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Community;
