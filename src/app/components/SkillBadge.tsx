import { motion } from 'motion/react';

interface SkillBadgeProps {
  name: string;
  level?: 'beginner' | 'intermediate' | 'advanced';
  icon?: React.ReactNode;
  index: number;
  category?: 'current' | 'wantToLearn' | 'interests';
}

export function SkillBadge({ name, level, icon, index, category = 'interests' }: SkillBadgeProps) {
  const getLevelColor = () => {
    if (category === 'wantToLearn') {
      return 'bg-sky-500/20 border-sky-400/30 text-sky-100';
    }
    
    if (category === 'interests') {
      return 'bg-white/10 border-white/20 text-white';
    }
    
    // Current stack - use sky color for beginner level to match Want to Learn
    switch (level) {
      case 'beginner':
        return 'bg-sky-500/20 border-sky-400/30 text-sky-100';
      case 'intermediate':
        return 'bg-blue-500/20 border-blue-400/30 text-blue-100';
      case 'advanced':
        return 'bg-purple-500/20 border-purple-400/30 text-purple-100';
      default:
        return 'bg-white/10 border-white/20 text-white';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ scale: 1.05, y: -2 }}
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border backdrop-blur-md ${getLevelColor()} transition-all hover:shadow-lg hover:shadow-white/10`}
    >
      {icon}
      <span className="font-medium">{name}</span>
      {level && (
        <span className="text-xs opacity-75 ml-1">
          {level === 'beginner' && '🌱'}
          {level === 'intermediate' && '🌿'}
          {level === 'advanced' && '🌳'}
        </span>
      )}
    </motion.div>
  );
}