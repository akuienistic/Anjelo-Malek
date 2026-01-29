import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const education = [
    {
      degree: 'Master of Public Administration (MPA)',
      institution: 'Mount Kenya University',
      icon: GraduationCap,
      type: 'Graduate Degree',
    },
    {
      degree: 'Executive Business Administration Certificate',
      institution: 'Walmart University, United States',
      subtitle: 'Leadership 101',
      icon: Award,
      type: 'Executive Program',
    },
    {
      degree: 'Bachelor of Arts (BA)',
      institution: 'University of Utah',
      icon: GraduationCap,
      type: 'Undergraduate Degree',
    },
    {
      degree: 'Associate of Applied Science (AAS)',
      institution: 'Salt Lake Community College',
      subtitle: 'Business Management',
      icon: BookOpen,
      type: 'Associate Degree',
    },
    {
      degree: 'Associate of Arts (AA)',
      institution: 'Salt Lake Community College',
      subtitle: 'International Studies',
      icon: BookOpen,
      type: 'Associate Degree',
    },
  ];

  return (
    <section id="education" className="section-padding bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-medium tracking-widest uppercase text-sm">
            Academic Background
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2">
            Education & Credentials
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mt-6" />
        </motion.div>

        {/* Education Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {education.map((item, index) => (
            <motion.div
              key={item.degree}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className={`group relative bg-card p-6 rounded-2xl shadow-card hover:shadow-gold transition-all duration-300 ${
                index === 0 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {/* Type Badge */}
              <span className="absolute top-4 right-4 px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                {item.type}
              </span>

              {/* Icon */}
              <div className="p-4 bg-accent/10 rounded-xl w-fit mb-4 group-hover:bg-accent/20 transition-colors">
                <item.icon className="w-8 h-8 text-accent" />
              </div>

              {/* Content */}
              <h3 className="font-serif text-xl font-bold text-foreground mb-2 pr-20">
                {item.degree}
              </h3>
              {item.subtitle && (
                <p className="text-accent font-medium text-sm mb-2">{item.subtitle}</p>
              )}
              <p className="text-muted-foreground">{item.institution}</p>

              {/* Hover accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-accent rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
