import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CloudKeyword } from './CloudKeyword';
import { User, Instagram, Linkedin, BookOpen } from 'lucide-react';

const keywords = [
  { text: '인류학', x: 15, y: 20 },
  { text: '경제학', x: 70, y: 15 },
  { text: '가치투자', x: 25, y: 50 },
  { text: 'Python', x: 65, y: 45 },
  { text: '탐험가', x: 40, y: 30 },
  { text: '서울대', x: 80, y: 60 },
];

export function HeroSection() {
  const [showClouds, setShowClouds] = useState(false);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
      <div className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative inline-block group cursor-pointer"
          onClick={() => setShowClouds(!showClouds)}
        >
          <div className="relative">
            <div className="w-48 h-48 rounded-full bg-white/10 backdrop-blur-lg flex items-center justify-center border-4 border-white/30 shadow-2xl transition-all duration-300 group-hover:scale-105 group-hover:border-white/50">
              <User size={96} className="text-white/70" />
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-4 py-1 bg-white/10 backdrop-blur-lg rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity border border-white/20"
            >
              <span className="text-xs font-medium text-white">Click Me ✨</span>
            </motion.div>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 text-5xl md:text-6xl font-bold text-white"
        >
          이동헌
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-xl md:text-2xl text-gray-200 mt-2"
        >
          Dongheun Lee
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-6 text-2xl md:text-3xl font-medium text-white italic"
        >
          "세상을 탐험하고 있는 사람"
        </motion.p>

        {/* Social Media Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 flex items-center justify-center gap-4"
        >
          {/* Instagram */}
          <a
            href="https://www.instagram.com/esss.lee/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-4 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 hover:border-pink-400/50 transition-all hover:scale-110 hover:shadow-lg hover:shadow-pink-500/20"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-orange-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <Instagram size={24} className="text-white relative z-10 group-hover:text-pink-300 transition-colors" />
          </a>

          {/* Blog */}
          <a
            href="https://blog.naver.com/leeway06"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-4 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 hover:border-green-400/50 transition-all hover:scale-110 hover:shadow-lg hover:shadow-green-500/20"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <BookOpen size={24} className="text-white relative z-10 group-hover:text-green-300 transition-colors" />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/%EB%8F%99%ED%97%8C-%EC%9D%B4-b16117388/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-4 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 hover:border-blue-400/50 transition-all hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <Linkedin size={24} className="text-white relative z-10 group-hover:text-blue-300 transition-colors" />
          </a>
        </motion.div>
      </div>

      <AnimatePresence>
        {showClouds && (
          <div className="absolute inset-0 pointer-events-none z-20">
            {keywords.map((keyword, index) => (
              <CloudKeyword
                key={keyword.text}
                text={keyword.text}
                delay={index * 0.1}
                x={keyword.x}
                y={keyword.y}
              />
            ))}
          </div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 animate-bounce z-10"
      >
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center backdrop-blur-sm bg-white/5">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
}