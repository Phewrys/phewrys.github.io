import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/content';

export const Footer = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © {currentYear} Phewrys. {t.footer.rights}
          </p>
          
          <p className="text-sm text-muted-foreground flex items-center gap-2">
            {t.footer.built} React, Next.js, Tailwind CSS {t.footer.and} GSAP.
          </p>
        </div>
      </div>
    </footer>
  );
};
