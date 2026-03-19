import { motion } from 'motion/react';

interface CloudKeywordProps {
  text: string;
  delay: number;
  x: number;
  y: number;
}

export function CloudKeyword({ text, delay, x, y }: CloudKeywordProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0, y: 100 }}
      animate={{ 
        opacity: 1, 
        scale: 1, 
        y: 0,
      }}
      transition={{
        duration: 0.8,
        delay,
        ease: "easeOut"
      }}
      style={{
        position: 'absolute',
        left: `${x}%`,
        top: `${y}%`,
      }}
      className="pointer-events-none"
    >
      <motion.div
        animate={{
          y: [0, -15, 0],
          rotate: [0, 2, -2, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: delay * 0.5,
        }}
        className="relative px-6 py-3 bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 shadow-2xl"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl"></div>
        <span className="relative text-sm font-medium text-white drop-shadow-lg">
          {text}
        </span>
      </motion.div>
    </motion.div>
  );
}