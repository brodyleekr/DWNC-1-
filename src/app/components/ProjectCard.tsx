import { motion } from 'motion/react';
import { Github, ExternalLink, Calendar } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  period: string;
  technologies: string[];
  role: string;
  achievements: string[];
  githubUrl?: string;
  demoUrl?: string;
  index: number;
}

export function ProjectCard({
  title,
  period,
  technologies,
  role,
  achievements,
  githubUrl,
  demoUrl,
  index,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 shadow-2xl hover:shadow-white/10 transition-all border border-white/20"
    >
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-2xl font-bold text-white">{title}</h3>
        <div className="flex gap-2">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all border border-white/20"
            >
              <Github size={20} className="text-white" />
            </a>
          )}
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all border border-white/20"
            >
              <ExternalLink size={20} className="text-white" />
            </a>
          )}
        </div>
      </div>

      <div className="flex items-center gap-2 text-gray-200 mb-4">
        <Calendar size={16} />
        <span className="text-sm">{period}</span>
      </div>

      <div className="mb-4">
        <span className="text-sm font-semibold text-gray-200">역할: </span>
        <span className="text-sm text-gray-300">{role}</span>
      </div>

      <div className="mb-4">
        <p className="text-sm font-semibold text-gray-200 mb-2">주요 성과:</p>
        <ul className="space-y-1">
          {achievements.map((achievement, i) => (
            <li key={i} className="text-sm text-gray-300 flex items-start">
              <span className="mr-2">•</span>
              <span>{achievement}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 bg-gradient-to-r from-white/10 to-white/5 text-gray-200 rounded-full text-xs font-medium border border-white/20 backdrop-blur-sm"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
}