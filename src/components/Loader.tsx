import { motion } from "framer-motion";

interface LoaderProps {
  onComplete?: () => void;
}

const Loader = ({ onComplete }: LoaderProps) => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black">
      <div className="flex flex-col items-center gap-6">
        {/* Animated Logo/Initials */}
        <div className="relative w-24 h-24 flex items-center justify-center">
          {/* Outer ring */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-gold/30"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          />

          {/* Spinning ring */}
          <motion.div
            className="absolute inset-2 rounded-full border-2 border-t-gold border-r-gold border-b-transparent border-l-transparent"
            animate={{ rotate: 360 }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          {/* Inner rotating ring */}
          <motion.div
            className="absolute inset-4 rounded-full border-2 border-t-transparent border-r-transparent border-b-gold/50 border-l-gold/50"
            animate={{ rotate: -360 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          {/* Center circle */}
          <motion.div
            className="absolute inset-8 rounded-full bg-gold"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          />

          {/* AM initials */}
          <motion.span
            className="absolute text-cream font-serif text-1xl font-bold z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            AM
          </motion.span>
        </div>

        {/* Loading text */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-center"
        >
          <p className="text-white/100 font-sans text-sm tracking-widest uppercase">Welcome to Anjelo's Nexus</p>
          <div className="flex items-center justify-center gap-1 mt-2">
            {[0, 1, 2].map((index) => (
              <motion.div
                key={index}
                className="w-1.5 h-1.5 rounded-full bg-gold"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  delay: 0.5 + index * 0.15,
                  duration: 0.3,
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Completion handler */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        onAnimationComplete={() => {
          if (onComplete) onComplete();
        }}
      />
    </div>
  );
};

export default Loader;
