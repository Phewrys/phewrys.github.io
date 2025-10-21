import { useRef, useState } from 'react';
import { ExternalLink, Github, Clock } from 'lucide-react';
import { Project } from '../types';
import { useLanguage } from '../contexts/LanguageContext';
import { translations, workExperience } from '../data/content';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const { language } = useLanguage();
  const t = translations[language];
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    
    const rotateX = (mouseY / rect.height) * -10;
    const rotateY = (mouseX / rect.width) * 10;
    
    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative perspective-1000"
      style={{
        transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        transition: 'transform 0.1s ease-out'
      }}
    >
      <div className="relative overflow-hidden rounded-xl border border-border bg-card hover:shadow-2xl transition-all duration-300">
        {/* Image */}
        <div className="relative h-48 overflow-hidden bg-muted">
          <ImageWithFallback
            src={project.image}
            alt={project.title[language]}
            className={`w-full h-full object-cover group-hover:scale-110 transition-transform duration-500
              ${project.inProgress ? 'opacity-70' : ''}`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          {project.inProgress && (
            <div className="absolute top-4 right-4 px-3 py-1 bg-background/90 backdrop-blur-sm rounded-full flex items-center gap-2 text-sm">
              <Clock className="w-4 h-4" />
              {t.projects.inProgress}
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl mb-2 group-hover:text-muted-foreground transition-colors">
            {project.title[language]}
          </h3>
          <p className="text-muted-foreground mb-6 line-clamp-2">
            {project.description[language]}
          </p>

          {/* Buttons */}
          {!project.inProgress && (
            <>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies?.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm bg-muted rounded-lg border border-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 bg-foreground text-background rounded-lg hover:bg-foreground/90 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    {t.projects.viewDemo}
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 border border-border rounded-lg hover:bg-accent transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Github className="w-4 h-4" />
                    {t.projects.viewCode}
                  </a>
                )}
              </div>
            </>
          )}
        </div>

        {/* Shine effect */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{
            background: `radial-gradient(600px circle at ${
              rotation.y * 10 + 50
            }% ${rotation.x * 10 + 50}%, rgba(255,255,255,0.1), transparent 40%)`
          }}
        />
      </div>
    </div>
  );
};
