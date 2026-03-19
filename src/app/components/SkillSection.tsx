import { motion } from 'motion/react';
import { SkillBadge } from './SkillBadge';
import { Code2, Brain, TrendingUp, Sparkles } from 'lucide-react';

export function SkillSection() {
  const currentStack = [
    { name: 'Python', level: 'beginner' as const, icon: <Code2 size={16} /> },
  ];

  const wantToLearn = [
    { name: '웹 개발', icon: <Code2 size={16} /> },
    { name: '데이터 분석', icon: <Brain size={16} /> },
    { name: '머신러닝', icon: <Sparkles size={16} /> },
  ];

  const interests = [
    { name: '인류학', icon: null },
    { name: '경제학', icon: null },
    { name: '가치투자', icon: <TrendingUp size={16} /> },
    { name: '세계 탐험', icon: null },
    { name: '문화 연구', icon: null },
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
          Skills & Interests
        </motion.h2>

        <div className="space-y-12">
          {/* Current Stack */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-2xl font-semibold mb-6 text-white"
            >
              Current Stack
            </motion.h3>
            <div className="flex flex-wrap gap-3">
              {currentStack.map((skill, index) => (
                <SkillBadge
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  icon={skill.icon}
                  index={index}
                  category="current"
                />
              ))}
            </div>
          </div>

          {/* Want to Learn */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-2xl font-semibold mb-6 text-white"
            >
              Want to Learn
            </motion.h3>
            <div className="flex flex-wrap gap-3">
              {wantToLearn.map((skill, index) => (
                <SkillBadge
                  key={skill.name}
                  name={skill.name}
                  icon={skill.icon}
                  index={index}
                />
              ))}
            </div>
          </div>

          {/* Interests */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-2xl font-semibold mb-6 text-white"
            >
              Interests
            </motion.h3>
            <div className="flex flex-wrap gap-3">
              {interests.map((interest, index) => (
                <SkillBadge
                  key={interest.name}
                  name={interest.name}
                  icon={interest.icon}
                  index={index}
                  category="interests"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}