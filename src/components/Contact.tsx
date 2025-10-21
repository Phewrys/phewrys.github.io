import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/content';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Linkedin, Github, Send, ArrowUpRight } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

gsap.registerPlugin(ScrollTrigger);

export const Contact = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(dotRef.current, {
        scale: 1.2,
        opacity: 0.3,
        duration: 1.5,
        repeat: -1,
        ease: "power1.out",
      });


    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast.success(t.contact.form.success);
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const socialLinks = [
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:phewrys@gmail.com',
      handle: 'phewrys@gmail.com'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/phewrys/',
      handle: '@phewrys'
    },
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/Phewrys',
      handle: '@Phewrys'
    }
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-32 px-6 bg-muted/30"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl mb-4">
            {t.contact.title}
          </h2>
          <p className="text-xl text-muted-foreground">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <p className="text-muted-foreground mb-8">
              {t.contact.titleLeft}
            </p>
            
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card group block p-6 flex items-center justify-between border-border rounded-xl bg-background hover:bg-accent transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-foreground text-background rounded-lg transition-colors">
                    <link.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="mb-1">{link.name}</h3>
                    <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                      {link.handle}
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-black dark:group-hover:text-white transition-colors" />
              </a>
            ))}

            {/* Availability Badge */}
            <div
              className="contact-card group block p-6 border border-border rounded-xl bg-background"
            >
              <div className="flex items-center gap-3 mb-2">
                <div
                  ref={dotRef}
                  className="h-2 w-2 rounded-full bg-green-500 opacity-70"
                ></div>
                <h3 className="text-sm">{t.contact.titleAvailabilityBadge}</h3>
              </div>
              <p className="text-xs text-muted-foreground">
                {t.contact.descriptionAvailabilityBadge}
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-card">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="space-y-6 p-8 pt-0"
            >
            <h3 className="text-muted-foreground">
              {t.contact.titleRight}
            </h3>
              <div>
                <label htmlFor="name" className="block mb-2 text-sm">
                  {t.contact.form.name}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 text-sm">
                  {t.contact.form.email}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 text-sm">
                  {t.contact.form.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-ring transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="cursor-pointer w-full px-6 py-3 bg-foreground text-background rounded-lg hover:bg-foreground/90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-background border-t-transparent rounded-full animate-spin" />
                    {t.contact.form.sending}
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    {t.contact.form.send}
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
