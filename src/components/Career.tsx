import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Building2, Landmark, Store } from 'lucide-react';

const Career = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const experiences = [
    {
      icon: Briefcase,
      role: 'Principal Chief Executive Officer',
      company: 'Malek Estates Limited',
      period: 'February 2024 – Present',
      location: 'Juba, South Sudan',
      description: 'Leading real estate development and entrepreneurial ventures in Juba. Emphasizing sustainable urban development, property investment, and infrastructure growth to support long-term city development.',
    },
    {
      icon: Landmark,
      role: 'Board Member',
      company: 'Horizon Bank South Sudan',
      period: 'October 2021 – Present',
      location: 'South Sudan',
      description: 'Contributing to corporate governance, strategic planning, and the strengthening of South Sudan\'s financial sector through informed board-level decision making.',
    },
    {
      icon: Building2,
      role: 'Chief Administrative Officer',
      company: 'Kush Petroleum Ltd',
      period: '2011 – Present',
      location: 'South Sudan',
      description: 'Overseeing administrative and operational functions at one of South Sudan\'s leading aviation fuel companies. Focused on organizational management, operational efficiency, and strategic support for corporate growth.',
    },
    {
      icon: Store,
      role: 'Shift Manager',
      company: 'Walmart Stores Inc.',
      period: '2003 – 2011',
      location: 'United States',
      description: 'Gained extensive experience in corporate management and large-scale operational leadership within one of the world\'s largest retail organizations.',
    },
  ];

  return (
    <section id="career" className="section-padding bg-secondary" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-medium tracking-widest uppercase text-sm">
            Professional Journey
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2">
            Career & Experience
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mt-6" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />

          {/* Experience Cards */}
          <div className="space-y-12 lg:space-y-0">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.role + exp.company}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                className={`relative lg:grid lg:grid-cols-2 lg:gap-8 ${
                  index % 2 === 0 ? '' : 'lg:text-right'
                }`}
              >
                {/* Timeline Dot */}
                <div className="hidden lg:block absolute left-1/2 top-8 -translate-x-1/2 z-10">
                  <div className="w-4 h-4 bg-accent rounded-full shadow-gold" />
                </div>

                {/* Card */}
                <div
                  className={`${
                    index % 2 === 0
                      ? 'lg:col-start-1 lg:pr-12'
                      : 'lg:col-start-2 lg:pl-12'
                  }`}
                >
                  <div className="bg-card p-6 md:p-8 rounded-2xl shadow-card hover:shadow-gold transition-shadow duration-300">
                    <div className={`flex items-start gap-4 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                      <div className="flex-shrink-0 p-3 bg-primary rounded-xl">
                        <exp.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div className={`flex-1 ${index % 2 !== 0 ? 'lg:text-right' : ''}`}>
                        <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full mb-3">
                          {exp.period}
                        </span>
                        <h3 className="font-serif text-xl md:text-2xl font-bold text-foreground mb-1">
                          {exp.role}
                        </h3>
                        <p className="text-accent font-semibold mb-1">{exp.company}</p>
                        <p className="text-muted-foreground text-sm mb-4">{exp.location}</p>
                        <p className="text-muted-foreground leading-relaxed">
                          {exp.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                {index % 2 === 0 && <div className="hidden lg:block" />}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Career;
