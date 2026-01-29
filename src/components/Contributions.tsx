import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Plane, Fuel, MapPin, TrendingUp } from 'lucide-react';

const Contributions = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const contributions = [
    {
      icon: Plane,
      title: 'Juba International Airport Runway Extension',
      year: 'Early 2012',
      description: 'Supported the extension of the runway at Juba International Airport, improving aviation capacity, safety, and international connectivity for the newly independent nation.',
    },
    {
      icon: Fuel,
      title: 'Wau Airport Aviation Fuel Depot',
      year: 'Early 2012',
      description: 'Involved in the establishment of an aviation fuel depot at Wau Airport, strengthening regional air transport operations and logistical supply chains.',
    },
  ];

  return (
    <section id="contributions" className="section-padding bg-secondary" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-medium tracking-widest uppercase text-sm">
            National Impact
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2">
            Infrastructure Contributions
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mt-6" />
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto text-lg">
            Major contributions to post-independence infrastructure and logistics projects 
            that have shaped South Sudan's transportation network.
          </p>
        </motion.div>

        {/* Contributions */}
        <div className="grid lg:grid-cols-2 gap-8">
          {contributions.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              className="relative bg-card p-8 rounded-2xl shadow-card overflow-hidden group hover:shadow-gold transition-shadow duration-300"
            >
              {/* Decorative Background */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-accent/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-accent/10 transition-colors" />

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-4 bg-primary rounded-xl">
                    <item.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div>
                    <span className="text-accent font-semibold text-sm">{item.year}</span>
                    <h3 className="font-serif text-xl md:text-2xl font-bold text-foreground">
                      {item.title}
                    </h3>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Recognition Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 p-8 md:p-12 bg-gradient-to-r from-primary to-green-dark rounded-2xl text-center"
        >
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-accent rounded-full">
              <TrendingUp className="w-8 h-8 text-accent-foreground" />
            </div>
          </div>
          <h3 className="font-serif text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
            Recognition & National Contribution
          </h3>
          <p className="text-primary-foreground/80 max-w-3xl mx-auto text-lg leading-relaxed">
            Anjelo Malek Qurino Kuoc Deng is widely regarded as a prominent South Sudanese 
            business leader, known for his leadership in the petroleum, banking, and real 
            estate sectors, and for his sustained commitment to education, community 
            empowerment, and national development.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contributions;
