import { motion } from 'motion/react';
import { ProjectCard } from './ProjectCard';

export function ProjectsSection() {
  const projects = [
    {
      title: 'dwnc',
      period: '2026년 3월 - 현재',
      technologies: ['Cursor', 'Figma', 'React', 'Vibe Coding'],
      role: 'Cursor, Figma 등 Vibe Coding 실습',
      achievements: [
        '여러 앱 개발',
      ],
      githubUrl: '',
      demoUrl: '',
    },
    {
      title: '머신러닝 해커톤',
      period: '2025년 11월 - 2025년 12월',
      technologies: ['Python', 'Scikit-learn', 'Pandas', 'NumPy'],
      role: '데이터 전처리 및 모델 학습',
      achievements: [
        '데이터 전처리 파이프라인 구축',
        '머신러닝 모델 성능 최적화',
        '팀 협업을 통한 프로젝트 완수',
      ],
      githubUrl: 'https://github.com',
      demoUrl: '',
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
          Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} />
          ))}
        </div>

        {/* Placeholder for future projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ scale: 1.02 }}
          className="mt-6 p-8 bg-white/5 backdrop-blur-md rounded-3xl border-2 border-dashed border-white/20 flex items-center justify-center transition-all hover:bg-white/10"
        >
          <p className="text-gray-300 text-center">
            More exciting projects coming soon! 🚀
          </p>
        </motion.div>
      </div>
    </section>
  );
}