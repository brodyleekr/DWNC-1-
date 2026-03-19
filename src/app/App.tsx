import React from 'react';
import { HeroSection } from './components/HeroSection';
import { SkillSection } from './components/SkillSection';
import { ProjectsSection } from './components/ProjectsSection';
import { Timeline } from './components/Timeline';
import { GuestBook } from './components/GuestBook';
import bgImage from '../assets/wallpaper.png';

export default function App() {
  return (
    <div className="min-h-screen bg-white relative">
      {/* Background Image for entire page */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <HeroSection />
        <SkillSection />
        <ProjectsSection />
        <Timeline />
        <GuestBook />
        
        {/* Footer */}
        <footer className="py-8 bg-black/60 text-center backdrop-blur-sm">
          <p className="text-gray-300">
            © 2026 Dongheun Lee. Exploring the world one step at a time.
          </p>
        </footer>
      </div>
    </div>
  );
}