import { Project, WorkExperience } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: {
      en: 'E-Commerce Platform',
      pt: 'Plataforma de E-Commerce'
    },
    description: {
      en: 'Modern e-commerce solution with real-time inventory and seamless checkout experience',
      pt: 'Solução de e-commerce moderna com inventário em tempo real e experiência de checkout perfeita'
    },
    image: 'https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBwbGF0Zm9ybXxlbnwxfHx8fDE3NjA4MzkxMzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com/Phewrys/ecommerce',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    inProgress: false
  },
  {
    id: '2',
    title: {
      en: 'Analytics Dashboard',
      pt: 'Painel de Análise'
    },
    description: {
      en: 'Interactive data visualization dashboard with advanced filtering and real-time updates',
      pt: 'Painel de visualização de dados interativo com filtragem avançada e atualizações em tempo real'
    },
    image: 'https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmFseXRpY3MlMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzYwODY0NjEzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com/Phewrys/analytics',
    technologies: ['React', 'Vue.js', 'Sass', 'Jest', 'Webpack'],
    inProgress: false
  },
  {
    id: '3',
    title: {
      en: 'Task Management App',
      pt: 'App de Gerenciamento de Tarefas'
    },
    description: {
      en: 'Collaborative task management with drag-and-drop, real-time sync, and team features',
      pt: 'Gerenciamento colaborativo de tarefas com arrastar e soltar, sincronização em tempo real e recursos de equipe'
    },
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YXNrJTIwbWFuYWdlbWVudHxlbnwxfHx8fDE3NjA5MDIxMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com/Phewrys/tasks',
    technologies: ['JavaScript', 'React', 'Bootstrap', 'REST APIs'],
    inProgress: false
  },
  {
    id: '4',
    title: {
      en: 'Social Media Manager',
      pt: 'Gerenciador de Redes Sociais'
    },
    description: {
      en: 'Unified dashboard for managing multiple social media accounts and scheduling posts',
      pt: 'Painel unificado para gerenciar várias contas de redes sociais e agendar postagens'
    },
    image: 'https://images.unsplash.com/photo-1579869847557-1f67382cc158?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxzb2NpYWwlMjBtZWRpYXxlbnwxfHx8fDE3NjA4NzE4MzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com/Phewrys/social',
    technologies: ['React', 'Vue.js', 'Sass', 'Jest', 'Webpack'],
    inProgress: true
  },
  {
    id: '5',
    title: {
      en: 'Portfolio Builder',
      pt: 'Construtor de Portfólio'
    },
    description: {
      en: 'Drag-and-drop portfolio builder with customizable themes and SEO optimization',
      pt: 'Construtor de portfólio arrastar e soltar com temas personalizáveis e otimização SEO'
    },
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0Zm9saW8lMjB3ZWJzaXRlfGVufDF8fHx8MTc2MDgzNDI1N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com/Phewrys/portfolio-builder',
    technologies: ['JavaScript', 'React', 'Git', 'REST APIs'],
    inProgress: true
  },
  {
    id: '6',
    title: {
      en: 'AI Content Generator',
      pt: 'Gerador de Conteúdo IA'
    },
    description: {
      en: 'AI-powered content creation tool with multiple templates and export options',
      pt: 'Ferramenta de criação de conteúdo com IA com múltiplos modelos e opções de exportação'
    },
    image: 'https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlfGVufDF8fHx8MTc2MDgyNTUxNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    inProgress: true
  },
];

export const workExperience: WorkExperience[] = [
  {
    id: '1',
    current: true,
    company: {
      en: 'Banese Card',
      pt: 'Banese Card'
    },
    position: {
      en: 'Pleno Frontend Developer',
      pt: 'Desenvolvedor Frontend Pleno'
    },
    location: {
      en: 'Remote',
      pt: 'Remoto'
    },
    period: {
      en: 'Jul 2022 - Present',
      pt: 'Jul 2022 - Presente'
    },
    description: {
      en: 'Leading frontend development for enterprise SaaS products. Architecting scalable React applications and mentoring junior developers.',
      pt: 'Liderando desenvolvimento frontend para produtos SaaS empresariais. Arquitetando aplicações React escaláveis e mentorando desenvolvedores júnior.'
    },
    activitieTitle: {
      en: 'Main Activities',
      pt: 'Principais Atividades'
    },
    activities: {
      en: ['Responsible for the development and maintenance of web applications, applying good security, performance, accessibility and SEO practices.', 
        'Technically responsible for the WhatsApp BOT service, acting as a focal point between the internal team and the partner company.', 
        'Document analysis for integration of Pentest services and documents.'],
      pt: ['Responsável pelo desenvolvimento e manutenção de aplicações web, aplicando boas práticas de segurança, performance, acessibilidade e SEO.', 
        'Responsável técnico pelo serviço de BOT do WhatsApp, atuando como ponto focal entre o time interno e a empresa parceira.', 
        'Análise de documentos para integração de serviços e documentos de Pentest.']
    },
  },
  {
    id: '2',
    company: {
      en: 'Banese Card',
      pt: 'Banese Card'
    },
    position: {
      en: 'Junior Frontend Developer',
      pt: 'Desenvolvedor Frontend Junior'
    },
    location: {
      en: 'Remote',
      pt: 'Remoto'
    },
    period: {
      en: 'Oct 2021 - Jun 2022',
      pt: 'Out 2021 - Jun 2022'
    },
    description: {
      en: 'Developed high-performance web applications for various clients. Collaborated with designers to create pixel-perfect, responsive interfaces.',
      pt: 'Desenvolvi aplicações web de alto desempenho para diversos clientes. Colaborei com designers para criar interfaces responsivas e pixel-perfect.'
    },
    activitieTitle: {
      en: 'Main Activities',
      pt: 'Principais Atividades'
    },
    activities: {
      en: ['Evolution and addition of features in projects, promoting continuous updating of solutions.', 
        'Implementation of tests using Jest and React Testing Library to ensure code quality.', 
        'Log analysis in Kibana for proactive monitoring.'],
      pt: ['Evolução e adição de funcionalidades nos projetos, promovendo a atualização contínua das soluções.', 
        'Implementação de testes utilizando Jest e React Testing Library para garantir a qualidade do código.', 
        'Análise de logs no Kibana para monitoramento proativo.']
    },
  },
  {
    id: '3',
    company: {
      en: 'Banese Card',
      pt: 'Banese Card'
    },
    position: {
      en: 'Technician IV',
      pt: 'Técnico IV'
    },
    location: {
      en: 'Aracaju, Sergipe',
      pt: 'Aracaju, Sergipe'
    },
    period: {
      en: 'May 2021 - Sep 2021',
      pt: 'Mai 2021 - Set 2021'
    },
    description: {
      en: 'Built and maintained responsive web applications. Gained experience in modern JavaScript frameworks and agile development practices.',
      pt: 'Construí e mantive aplicações web responsivas. Ganhei experiência em frameworks JavaScript modernos e práticas de desenvolvimento ágil.'
    },
    activitieTitle: {
      en: 'Main Activities',
      pt: 'Principais Atividades'
    },
    activities: {
      en: ['Landingpage development using React, Typescript and Styles Components.', 
        'Investigation and resolution of incidents, ensuring system stability.', 
        'CI/CD using Jenkins and UrbanCode.'],
      pt: ['Desenvolvimento de Landingpage utilizando React, Typescript e Styles Components.', 
        'Investigação e resolução de incidentes, garantindo a estabilidade dos sistemas.', 
        'CI/CD usando Jenkins e UrbanCode.']
    },
  },
  {
    id: '4',
    company: {
      en: 'Banese Card',
      pt: 'Banese Card'
    },
    position: {
      en: 'Intern',
      pt: 'Estagiário'
    },
    location: {
      en: 'Aracaju, Sergipe',
      pt: 'Aracaju, Sergipe'
    },
    period: {
      en: 'Oct 2019 - Apr 2021',
      pt: 'Out 2019 - Abr 2021'
    },
    description: {
      en: 'Built and maintained responsive web applications. Gained experience in modern JavaScript frameworks and agile development practices.',
      pt: 'Construí e mantive aplicações web responsivas. Ganhei experiência em frameworks JavaScript modernos e práticas de desenvolvimento ágil.'
    },
    activitieTitle: {
      en: 'Main Activities',
      pt: 'Principais Atividades'
    },
    activities: {
      en: ['Development of an internal application using .NET Framework, ASP.NET MVC 5 and SQL Server.', 
        'Efficient handling of technical support calls.', 
        'Implementation of continuous improvements to the application, improving its performance and usability.'],
      pt: ['Desenvolvimento de uma aplicação interna utilizando .NET Framework, ASP.NET MVC 5 e SQL Server.', 
        'Atendimento eficiente de chamados para suporte técnico.', 
        'Implementação de melhorias contínuas na aplicação, aprimorando sua performance e usabilidade.']
    },
  }
];

export const translations = {
  en: {
    nav: {
      about: 'About',
      experience: 'Experience',
      projects: 'Projects',
      contact: 'Contact'
    },
    hero: {
      greeting: "Hello, I'm Thiago",
      role: 'Frontend Developer',
      description: 'Crafting modern, engaging, and performant web experiences with cutting-edge technologies. Passionate about clean code, stunning interfaces, and seamless user experiences.',
      cta1: 'View Projects',
      cta2: 'Contact Me',
      cvText: 'Download Resume',
      cvTitle: 'Tiago_Farias_Frontend_Developer_Resume.pdf',
      cvHref: '/Tiago_Farias_Frontend_Developer_Resume.pdf'
    },
    about: {
      title: 'About Me',
      bio: "I'm a Frontend Developer with over 6 years of experience in developing and maintaining web applications using modern technologies such as React, Next.js, TypeScript, and JavaScript. Solid experience in corporate financial environments, focusing on information security, performance, accessibility, SEO, and development best practices. Skilled in system integration, technical feasibility analysis, application monitoring, and process automation using tools like Azure DevOps and Datadog.",
      techStack: 'Technologies I work with',
      education: 'B.S. Information Systems',
      experience: '6+ Years Experience',
    },
    experience: {
      title: 'Work Experience',
      present: 'Present',
      educationTitle: 'Education',
      educationGraduation: 'Bachelor’s Degree in Information Systems',
      educationUniversity: 'Federal University of Sergipe - UFS'
    },
    projects: {
      title: 'Featured Projects',
      subtitle: 'A selection of my recent work',
      inProgress: 'In Progress',
      viewDemo: 'Live Demo',
      viewCode: 'GitHub'
    },
    contact: {
      title: 'Get In Touch',
      subtitle: "Let's work together on your next project",
      titleAvailabilityBadge: 'Available for work',
      descriptionAvailabilityBadge: 'Open to freelance projects and full-time opportunities',
      form: {
        name: 'Name',
        email: 'Email',
        message: 'Message',
        send: 'Send Message',
        sending: 'Sending...',
        success: 'Message sent successfully!',
        error: 'Failed to send message. Please try again.'
      },
      titleLeft: 'Connect With Me',
      titleRight: 'Send a Message',
    },
    footer: {
      rights: 'All rights reserved.',
      built: 'Built with',
      and: 'and'
    }
  },
  pt: {
    nav: {
      about: 'Sobre',
      experience: 'Experiência',
      projects: 'Projetos',
      contact: 'Contato'
    },
    hero: {
      greeting: 'Olá, eu sou o Thiago',
      role: 'Desenvolvedor Frontend',
      description: 'Criando experiências web modernas, envolventes e performáticas com tecnologias de ponta. Apaixonado por código limpo, interfaces impressionantes e experiências de usuário perfeitas.',
      cta1: 'Ver Projetos',
      cta2: 'Entre em Contato',
      cvText: 'Baixar Currículo',
      cvTitle: 'CV_Tiago_Farias_Desenvolvedor_Frontend.pdf',
      cvHref: '/CV_Tiago_Farias_Desenvolvedor_Frontend.pdf'
    },
    about: {
      title: 'Sobre Mim',
      bio: 'Sou um Desenvolvedor Frontend com mais de 6 anos de experiência no desenvolvimento e manutenção de aplicações web, utilizando tecnologias modernas como React, Next.js, TypeScript e JavaScript. Experiência sólida em ambiente corporativo do setor financeiro, com foco em segurança da informação, performance, acessibilidade, SEO e boas práticas de desenvolvimento. Atuação em integração de sistemas, análise de viabilidade técnica, monitoramento de aplicações e automação de processos com ferramentas como Azure DevOps e Datadog.',
      techStack: 'Tecnologias que uso',
      education: 'Bacharel em SI',
      experience: 'Mais de 6 anos de experiência',
    },
    experience: {
      title: 'Experiência Profissional',
      present: 'Presente',
      educationTitle: 'Formação Acadêmica',
      educationGraduation: 'Bacharelado em Sistemas de Informação',
      educationUniversity: 'Universidade Federal de Sergipe - UFS'
    },
    projects: {
      title: 'Projetos em Destaque',
      subtitle: 'Uma seleção dos meus trabalhos recentes',
      inProgress: 'Em Desenvolvimento',
      viewDemo: 'Ver Demo',
      viewCode: 'GitHub'
    },
    contact: {
      title: 'Entre em Contato',
      subtitle: 'Vamos trabalhar juntos no seu próximo projeto',
      titleAvailabilityBadge: 'Disponível para trabalhar',
      descriptionAvailabilityBadge: 'Aberto a projetos freelance e oportunidades de tempo integral',
      form: {
        name: 'Nome',
        email: 'Email',
        message: 'Mensagem',
        send: 'Enviar Mensagem',
        sending: 'Enviando...',
        success: 'Mensagem enviada com sucesso!',
        error: 'Falha ao enviar mensagem. Tente novamente.'
      },
      titleLeft: 'Conecte-se comigo',
      titleRight: 'Envie uma mensagem',
    },
    footer: {
      rights: 'Todos os direitos reservados.',
      built: 'Feito com',
      and: 'e'
    }
  }
};
