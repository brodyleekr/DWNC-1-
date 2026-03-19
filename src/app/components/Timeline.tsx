import { motion } from 'motion/react';
import { GraduationCap } from 'lucide-react';

interface TimelineItemProps {
  institution: string;
  degree: string;
  period: string;
  status?: string;
}

export function Timeline() {
  const education: TimelineItemProps[] = [
    {
      institution: '서울대학교',
      degree: '사회과학대학 인류학과',
      period: '2025 - 현재',
      status: '재학',
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16 text-white"
        >
          Education
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-white/30 to-white/10 backdrop-blur-sm"></div>

          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ x: 5 }}
              className="relative pl-20 pb-12 last:pb-0"
            >
              {/* Timeline dot */}
              <div className="absolute left-6 top-2 w-5 h-5 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full border-4 border-white/30 shadow-lg backdrop-blur-sm"></div>

              {/* Content card */}
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 shadow-2xl hover:shadow-white/10 transition-all border border-white/20">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl border border-white/20 backdrop-blur-sm">
                    <GraduationCap size={24} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-1">
                      {item.institution}
                    </h3>
                    <p className="text-lg text-gray-200 mb-2">{item.degree}</p>
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-gray-300">{item.period}</span>
                      {item.status && (
                        <span className="px-3 py-1 bg-green-500/20 text-green-100 rounded-full text-xs font-medium border border-green-400/30 backdrop-blur-sm">
                          {item.status}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}