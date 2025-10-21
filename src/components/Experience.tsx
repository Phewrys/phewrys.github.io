import { useEffect, useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations, workExperience } from '../data/content';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Briefcase, MapPin, Calendar } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const Experience = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const sectionRef = useRef<HTMLElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      itemsRef.current.forEach((item, index) => {
        if (item) {
          gsap.from(item, {
            x: index % 2 === 0 ? -50 : 50,
            opacity: 0,
            duration: 0.8,
            filter: 'blur(5px)',
            scrollTrigger: {
              trigger: item,
              start: 'top 95%',
              end: 'top 70%',
              scrub: true
            }
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-32 px-6 bg-muted/30 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-5xl md:text-6xl mb-20 text-center">
          {t.experience.title}
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border" />

          <div className="space-y-12">
            {workExperience.map((exp, index) => (
              <div
                key={exp.id}
                ref={(el) => (itemsRef.current[index] = el)}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className={`absolute left-8 md:left-1/2 w-5 h-5 rounded-full -translate-x-1/2 border-2 z-10 ml-05 ${
                  exp.current ? 'bg-foreground' : 'bg-background'
                }`} />

                {/* Timeline dot */}
                <div className="absolute left-8 top-6 w-px h-full bg-gray-200 dark:bg-gray-800 hidden md:block -translate-x-1/2" />
                <div 
                  className={`absolute left-8 top-6 w-4 h-4 rounded-full -translate-x-1/2 hidden md:block z-10 ${
                    true 
                      ? 'bg-black dark:bg-white ring-4 ring-white dark:ring-gray-900' 
                      : 'bg-gray-300 dark:bg-gray-700'
                  }`}
                />



                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} pl-20 md:pl-0`}>
                  <div className="group p-6 border border-border rounded-xl bg-background hover:bg-accent transition-all duration-300 hover:scale-[1.02]">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="flex-1">
                        <h3 className="text-xl mb-1">
                          {exp.position[language]}
                        </h3>
                        <div className="flex items-center gap-2">
                          <Briefcase className="w-4 h-4" />
                          <span>{exp.company[language]}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-4 mb-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                       <MapPin className="w-4 h-4" />
                        <span>{exp.location[language]}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period[language]}</span>
                      </div>
                    </div>

                    {/* <p className="text-muted-foreground mb-4">
                      {exp.description[language]}
                    </p> */}

                    <div className="text-muted-foreground">
                      <p className="text-sm text-gray-500 dark:text-gray-500 mb-2">{exp.activitieTitle[language]}</p>
                      <ul className="space-y-2 flex flex-col gap-2">
                        {exp.activities[language].map((atv) => (
                        <li key={atv} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-black dark:bg-white mt-2 flex-shrink-0" />
                          <span>• {atv}</span>
                        </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education section at the bottom */}
        <div
          className="mt-20 p-6 bg-background border border-border rounded-xl"
        >
          <h3 className="mb-4 text-xl">{t.experience.educationTitle}</h3>
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-black dark:bg-white rounded-xl flex items-center justify-center flex-shrink-0">
              <span className="text-3xl">🎓</span>
            </div>
            <div>
              <p className="dark:text-white mb-1">{t.experience.educationGraduation}</p>
              <p className="text-sm mb-1 text-muted-foreground">{t.experience.educationUniversity}</p>
              <p className="text-sm text-muted-foreground">2024</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
