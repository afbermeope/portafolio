import { useEffect, useRef, useState } from 'react';
import { 
  Globe, 
  ArrowRight, 
  Github, 
  Linkedin,
  Mail, 
  Phone, 
  MapPin, 
  Briefcase, 
  GraduationCap, 
  Trophy, 
  ExternalLink, 
  Eye, 
  X, 
  Menu, 
  BookOpen, 
  Gamepad2, 
  CheckCircle2 
} from 'lucide-react';

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string;
  highlights?: string[];
  image?: string;
  links?: {
    label: string;
    url: string;
    icon?: 'web' | 'playstore' | 'appstore';
  }[];
}

interface EducationItem {
  school: string;
  degree: string;
  period: string;
  image: string;
}

interface SkillCategory {
  category: string;
  skills: string[];
}

interface AwardItem {
  title: string;
  organization: string;
  pdf: string;
}

const experiences: ExperienceItem[] = [
  {
    title: "IT Professional - National Registry of Deforested Zones (RNZD)",
    company: "IDEAM (Institute of Hydrology, Meteorology and Environmental Studies), Bogotá",
    period: "April 2026 - Present",
    description: "Leading IT development, architectural modeling, and database engineering for the National Registry of Deforested Zones (RNZD), ensuring high scalability, information security, and institutional interoperability.",
    highlights: [
      "Design and implementation of core relational and spatial database models for the RNZD.",
      "Development and maintenance of functional modules and scalable microservices.",
      "Implementation of secure interoperability protocols connecting RNZD with external environmental entities.",
      "Production monitoring, version control governance, and automated CI/CD deployment pipelines.",
      "Information security management, automated functional validation, and performance testing.",
      "Technical documentation and institutional capacity building across partner entities."
    ]
  },
  {
    title: "Professional in Software and Database Design",
    company: "UNODC (United Nations Office on Drugs and Crime), Bogotá",
    period: "July 2024 - March 2026",
    description: "Served as Technical Lead for the National Registry of Deforested Zones (RNZD) project, directing full-stack architecture, spatial database modeling, and automated data ingestion workflows.",
    highlights: [
      "Advanced spatial database modeling and administration in PostgreSQL with PostGIS.",
      "Frontend web application development using Angular.",
      "Technical leadership and architectural supervision for the RNZD platform.",
      "Automated geospatial and environmental data ingestion pipelines via WFS and REST APIs.",
      "Orchestrated large-scale database migrations from legacy Oracle systems to PostgreSQL."
    ]
  },
  {
    title: "Software Engineer I",
    company: "Alcanos de Colombia",
    period: "June 2023 - July 2024",
    description: "Developed and maintained critical enterprise applications, backend services, and database utility scripts to optimize business workflows.",
    highlights: [
      "Backend and enterprise software development in C# (.NET).",
      "Full-stack maintenance and enhancement across C#, Angular, and PHP codebases.",
      "Agile sprint planning, database queries, and system stabilization."
    ]
  },
  {
    title: "Frontend I Developer",
    company: "enerBit",
    period: "January 2022 - February 2023",
    description: "Engineered responsive client portals and mobile applications for the digital energy ecosystem under agile Scrum methodologies.",
    highlights: [
      "Cross-platform mobile application development with Flutter.",
      "Modern web user interfaces with Vue.js and microfrontends in React."
    ],
    links: [
      { label: "Website", url: "https://enerbit.co/", icon: 'web' },
      { label: "Play Store", url: "https://play.google.com/store/apps/details?id=me.enerbit", icon: 'playstore' },
      { label: "App Store", url: "https://apps.apple.com/co/app/enerbit/id1624711633", icon: 'appstore' }
    ]
  },
  {
    title: "Software Engineer in Analytics",
    company: "Celsia",
    period: "January 2018 - January 2022",
    description: "Delivered technological advisory, application module engineering, Docker containerization, and data analytics solutions supporting energy management platforms.",
    highlights: [
      "Engineering of application modules and backend data integrations.",
      "Containerization and environment orchestration using Docker.",
      "Data analytics workflows and business process automation under agile frameworks."
    ]
  },
  {
    title: "Innovation Assistant",
    company: "Enertolima",
    period: "August 2017 - August 2018",
    description: "Assisted in research and development of internal software tools, custom PHP reporting dashboards, Android utilities, and database management.",
    highlights: [
      "Custom web and mobile software development.",
      "Automated management reporting platforms and SQL queries.",
      "Operational database administration and system support."
    ]
  },
  {
    title: "Android Developer",
    company: "Phillips",
    period: "August 2016 - September 2016",
    description: "Programmed a custom Android client interface communicating via Bluetooth with smart biosuits, managing both state transmission and UI display.",
    image: "sculptor.png"
  },
  {
    title: "Web Designer and Developer",
    company: "K-lua Handicrafts",
    period: "May 2016 - June 2016",
    description: "Designed, coded, and deployed an e-commerce exhibition and sales catalog optimized for high performance and responsiveness.",
    image: "klua.png"
  },
  {
    title: "Junior Developer",
    company: "Leader S.A.S",
    period: "June 2015 - December 2015",
    description: "Developed backend inventory APIs and mobile terminal interfaces compatible with Motorola RFID FX7500 reader hardware.",
    image: "leader.png"
  },
  {
    title: "Junior Developer",
    company: "A la mano Tolima",
    period: "May 2014 - September 2014",
    description: "Contributed to building the administration portal backend and web layout, and supported app updates for regional directory catalogs.",
    image: "alamano.png",
    links: [
      { label: "Play Store", url: "https://play.google.com/store/apps/details?id=com.itosoftware.alamano&hl=es", icon: 'playstore' }
    ]
  }
];

const educationList: EducationItem[] = [
  {
    school: "Universidad del Tolima",
    degree: "Systems Engineer (Ingeniero de Sistemas)",
    period: "2016",
    image: "diploma.png"
  },
  {
    school: "National Learning Service (SENA)",
    degree: "Technologist in Systems (Tecnólogo en Sistemas - ADSI)",
    period: "2017",
    image: "diploma ADSI.png"
  }
];

const skillCategories: SkillCategory[] = [
  {
    category: "Languages & Backend",
    skills: ["PHP / Laravel", "Python", "C# / .NET", "TypeScript", "JavaScript", "SQL"]
  },
  {
    category: "Frontend & Mobile",
    skills: ["Angular", "React", "Vue.js", "Flutter", "Ionic", "HTML5", "CSS3 / Tailwind"]
  },
  {
    category: "Databases & GIS",
    skills: ["PostgreSQL", "PostGIS", "MySQL", "Oracle DB", "SQL Server"]
  },
  {
    category: "DevOps & Architecture",
    skills: ["Docker", "CI/CD", "Technical Leadership", "Microservices", "REST & WFS", "Git / GitHub", "Bitbucket"]
  }
];

const awardsList: AwardItem[] = [
  {
    title: "Mobile Apps Development",
    organization: "Google Activate Certification",
    pdf: "certificados/desarrollo apps moviles.pdf"
  },
  {
    title: "Introduction to Web Development Part 1",
    organization: "Google Activate Certification",
    pdf: "certificados/introduccion desarrollo web p1.pdf"
  },
  {
    title: "Introduction to Web Development Part 2",
    organization: "Google Activate Certification",
    pdf: "certificados/introduccion desarrollo web p2.pdf"
  },
  {
    title: "Digital Marketing",
    organization: "Google Activate Certification",
    pdf: "certificados/markerting digital.pdf"
  },
  {
    title: "Basic Programming",
    organization: "Platzi & AppsCo Certification",
    pdf: "certificados/diploma-basica-appsco.pdf"
  },
  {
    title: "Fundamentals Of Software Engineering",
    organization: "Platzi & AppsCo Certification",
    pdf: "certificados/diploma-fundamentos-appsco.pdf"
  },
  {
    title: "Professional Course Of Git And GitHub",
    organization: "Platzi & AppsCo Certification",
    pdf: "certificados/diploma-git-appsco.pdf"
  },
  {
    title: "WOM Marketing",
    organization: "Platzi & AppsCo Certification",
    pdf: "certificados/diploma-mkt-voz-a-voz.pdf"
  },
  {
    title: "Author's royalties (Copyright)",
    organization: "SENA (Servicio Nacional de Aprendizaje)",
    pdf: "certificados/derechosAutor.pdf"
  },
  {
    title: "Ajax and Websockets with PHP",
    organization: "SENA (Servicio Nacional de Aprendizaje)",
    pdf: "certificados/certificado Ajax.pdf"
  }
];

function App() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const fadingOutRef = useRef<boolean>(false);
  const animationFrameRef = useRef<number | null>(null);
  
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState('home');

  const fade = (duration: number, targetOpacity: number, onComplete?: () => void) => {
    if (animationFrameRef.current !== null) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }

    const video = videoRef.current;
    if (!video) return;

    const startOpacity = parseFloat(video.style.opacity || '0');
    const opacityDiff = targetOpacity - startOpacity;
    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      const currentOpacity = startOpacity + (opacityDiff * progress);
      video.style.opacity = currentOpacity.toString();

      if (progress < 1) {
        animationFrameRef.current = requestAnimationFrame(animate);
      } else {
        animationFrameRef.current = null;
        if (onComplete) onComplete();
      }
    };

    animationFrameRef.current = requestAnimationFrame(animate);
  };

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video) return;

    const duration = video.duration;
    const currentTime = video.currentTime;

    if (duration && (duration - currentTime <= 0.55)) {
      if (!fadingOutRef.current) {
        fadingOutRef.current = true;
        fade(500, 0);
      }
    }
  };

  const handleEnded = () => {
    const video = videoRef.current;
    if (!video) return;

    video.style.opacity = '0';

    setTimeout(() => {
      if (!video) return;
      video.currentTime = 0;
      fadingOutRef.current = false;
      
      video.play()
        .then(() => {
          fade(500, 1);
        })
        .catch(err => {
          console.error("Video replay failed:", err);
        });
    }, 100);
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.style.opacity = '0';
    fadingOutRef.current = false;

    video.play()
      .then(() => {
        fade(500, 1);
      })
      .catch(err => {
        console.error("Autoplay failed:", err);
      });

    // Intersection Observer to highlight active section in Navbar
    const sections = ['home', 'about', 'experience', 'education', 'skills', 'awards', 'interests'];
    const observers = sections.map(sectionId => {
      const el = document.getElementById(sectionId);
      if (!el) return null;
      
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setActiveSection(sectionId);
        }
      }, { threshold: 0.3 });
      
      observer.observe(el);
      return { observer, el };
    });

    return () => {
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      observers.forEach(obs => {
        if (obs) obs.observer.unobserve(obs.el);
      });
    };
  }, []);

  const getLinkIcon = (iconType?: string) => {
    switch (iconType) {
      case 'playstore':
        return <ArrowRight className="w-4 h-4 mr-1 inline" />;
      case 'appstore':
        return <ArrowRight className="w-4 h-4 mr-1 inline" />;
      default:
        return <ExternalLink className="w-4 h-4 mr-1 inline" />;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white relative flex flex-col font-sans">
      
      {/* Background Video */}
      <div className="fixed inset-0 w-full h-full pointer-events-none select-none overflow-hidden z-0">
        <video
          ref={videoRef}
          src={`${import.meta.env.BASE_URL}video.mp4`}
          className="absolute inset-0 w-full h-full object-cover translate-y-[17%]"
          muted
          autoPlay
          playsInline
          onTimeUpdate={handleTimeUpdate}
          onEnded={handleEnded}
        />
        {/* Cinematic darken & gradient fades */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/95 z-0" />
      </div>

      {/* Navigation Header */}
      <header className="sticky top-0 z-40 px-6 py-4 w-full">
        <div id="navbar-container" className="liquid-glass rounded-full px-6 py-3 flex items-center justify-between max-w-5xl mx-auto w-full">
          <div className="flex items-center gap-8">
            <a href="#home" id="nav-logo" className="flex items-center gap-2 text-white font-semibold text-lg hover:opacity-85 transition-opacity">
              <Globe className="w-5 h-5 text-white/90" size={20} />
              <span className="tracking-wide">Andrés Bermeo</span>
            </a>
            
            <nav className="hidden md:flex items-center gap-6">
              {[
                { id: 'about', label: 'About' },
                { id: 'experience', label: 'Experience' },
                { id: 'education', label: 'Education' },
                { id: 'skills', label: 'Skills' },
                { id: 'awards', label: 'Awards' },
                { id: 'interests', label: 'Interests' }
              ].map(item => (
                <a 
                  key={item.id}
                  href={`#${item.id}`} 
                  id={`nav-link-${item.id}`} 
                  className={`transition-colors text-xs uppercase tracking-wider font-semibold ${
                    activeSection === item.id ? 'text-white border-b border-white/40 pb-0.5' : 'text-white/75 hover:text-white'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-3">
            <a 
              href="mailto:afbermeope@gmail.com" 
              id="btn-contact" 
              className="liquid-glass rounded-full px-5 py-2 text-white hover:bg-white/5 transition-colors text-xs font-semibold uppercase tracking-wider border-none cursor-pointer hidden sm:block"
            >
              Contact Me
            </a>
            
            {/* Mobile Menu Toggle Button */}
            <button 
              id="btn-mobile-menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white/80 hover:text-white p-2 focus:outline-none flex items-center justify-center"
              aria-label="Toggle Menu"
            >
              <Menu className="w-5 h-5" size={20} />
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div id="mobile-menu" className="md:hidden mt-2 liquid-glass rounded-3xl p-4 flex flex-col gap-3 max-w-5xl mx-auto w-full z-50">
            {[
              { id: 'about', label: 'About' },
              { id: 'experience', label: 'Experience' },
              { id: 'education', label: 'Education' },
              { id: 'skills', label: 'Skills' },
              { id: 'awards', label: 'Awards' },
              { id: 'interests', label: 'Interests' }
            ].map(item => (
              <a 
                key={item.id}
                href={`#${item.id}`} 
                onClick={() => setMobileMenuOpen(false)}
                className={`py-2 px-3 rounded-lg transition-colors text-sm font-medium ${
                  activeSection === item.id ? 'bg-white/10 text-white' : 'text-white/80 hover:bg-white/5 hover:text-white'
                }`}
              >
                {item.label}
              </a>
            ))}
            <a 
              href="mailto:afbermeope@gmail.com" 
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 py-2.5 px-3 rounded-full text-center bg-white text-black font-semibold text-sm hover:bg-white/90 transition-colors"
            >
              Contact Me
            </a>
          </div>
        )}
      </header>

      {/* Main Content Sections */}
      <main className="relative z-10 w-full flex-1">
        
        {/* HERO SECTION */}
        <section id="home" className="min-h-[calc(100vh-100px)] flex flex-col items-center justify-center px-6 py-12 text-center select-none">
          <div className="max-w-4xl mx-auto flex flex-col items-center">
            <h1 
              id="hero-heading"
              style={{ fontFamily: "'Instrument Serif', serif" }} 
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white mb-6 tracking-tight md:whitespace-nowrap italic font-normal"
            >
              Built for the curious
            </h1>
            
            <p className="text-white/70 max-w-lg text-base md:text-lg mb-8 leading-relaxed">
              Explore the professional portfolio and software products crafted by Andrés Felipe Bermeo Pérez. Focus on performance, database architecture, and beautiful interfaces.
            </p>

            <div className="pt-4">
              <a 
                href="#about"
                id="btn-explore" 
                className="liquid-glass rounded-full px-8 py-3 text-white text-xs font-semibold uppercase tracking-wider hover:bg-white/5 transition-colors inline-block cursor-pointer border-none"
              >
                Explore Portfolio
              </a>
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="max-w-5xl mx-auto px-6 py-16 md:py-24 scroll-mt-20">
          <div className="text-center mb-16">
            <h2 style={{ fontFamily: "'Instrument Serif', serif" }} className="text-5xl md:text-6xl text-white italic font-normal">
              About Me
            </h2>
            <div className="w-16 h-0.5 bg-white/20 mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            {/* Profile Card */}
            <div className="md:col-span-5 liquid-glass rounded-3xl p-6 md:p-8 flex flex-col items-center text-center">
              <h3 className="text-2xl font-bold text-white mb-1 mt-2">Andrés Felipe Bermeo Pérez</h3>
              <p className="text-white/60 text-xs mb-6 uppercase tracking-wider font-semibold">Software Engineer | DevOps & Tech Lead | DBA</p>
              
              <div className="w-full space-y-3.5 text-left border-t border-white/10 pt-6 text-sm text-white/80">
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-white/50" />
                  <span>Ibagué, Tolima, Colombia</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-white/50" />
                  <a href="mailto:afbermeope@gmail.com" className="hover:text-white transition-colors">afbermeope@gmail.com</a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-white/50" />
                  <a href="tel:+573153383189" className="hover:text-white transition-colors">+57 (315) 338-3189</a>
                </div>
              </div>

              {/* Social links */}
              <div className="flex gap-3 mt-8">
                <a 
                  href="https://www.linkedin.com/in/andres-bermeo-06a265275/" 
                  target="_blank" 
                  rel="noreferrer"
                  aria-label="LinkedIn Profile" 
                  className="liquid-glass rounded-full p-3 text-white/80 hover:text-white hover:bg-white/5 transition-all flex items-center justify-center"
                >
                  <Linkedin className="w-5 h-5" size={20} />
                </a>
                <a 
                  href="https://github.com/afbermeope" 
                  target="_blank" 
                  rel="noreferrer"
                  aria-label="GitHub Profile" 
                  className="liquid-glass rounded-full p-3 text-white/80 hover:text-white hover:bg-white/5 transition-all flex items-center justify-center"
                >
                  <Github className="w-5 h-5" size={20} />
                </a>
                <a 
                  href="https://bitbucket.org/theblack2009/" 
                  target="_blank" 
                  rel="noreferrer"
                  aria-label="Bitbucket Profile" 
                  className="liquid-glass rounded-full p-3 text-white/80 hover:text-white hover:bg-white/5 transition-all flex items-center justify-center"
                >
                  <Globe className="w-5 h-5" size={20} />
                </a>
              </div>
            </div>

            {/* Biography */}
            <div className="md:col-span-7 space-y-6">
              <div className="liquid-glass rounded-3xl p-6 md:p-8 space-y-6">
                <h4 className="text-xl font-semibold text-white">Professional Profile</h4>
                <p className="text-white/80 leading-relaxed text-base">
                  Software Engineer with solid experience in software development, cloud architecture, and DevOps, participating in high-impact projects for both the public and private sectors.
                </p>
                <p className="text-white/80 leading-relaxed text-base">
                  Experienced in leading technical engineering teams, designing complex relational and spatial database models, and delivering robust end-to-end solutions with a deep focus on automation, systems integration, scalable architectures, and modern frontend/backend development.
                </p>
                
                <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-6">
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Languages</p>
                    <p className="text-white text-sm font-semibold">Spanish (Native), English</p>
                  </div>
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Key Domains</p>
                    <p className="text-white text-sm font-semibold">DBA & GIS, DevOps & Cloud</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="experience" className="max-w-5xl mx-auto px-6 py-16 md:py-24 scroll-mt-20">
          <div className="text-center mb-16">
            <h2 style={{ fontFamily: "'Instrument Serif', serif" }} className="text-5xl md:text-6xl text-white italic font-normal">
              Work Experience
            </h2>
            <div className="w-16 h-0.5 bg-white/20 mx-auto mt-4" />
          </div>

          <div className="space-y-6">
            {experiences.map((exp, idx) => (
              <div key={idx} className="liquid-glass rounded-3xl p-6 md:p-8 flex flex-col md:flex-row md:items-start justify-between gap-6 transition-all hover:bg-white/[0.03]">
                <div className="space-y-4 flex-1">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-2xl liquid-glass bg-white/5 text-white/80 mt-1">
                      <Briefcase className="w-6 h-6" size={24} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                      <p className="text-white/60 text-base font-medium">{exp.company}</p>
                    </div>
                  </div>
                  <p className="text-white/85 text-sm md:text-base leading-relaxed pl-1">
                    {exp.description}
                  </p>

                  {exp.highlights && exp.highlights.length > 0 && (
                    <ul className="space-y-1.5 pl-2 pt-1">
                      {exp.highlights.map((item, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2.5 text-white/80 text-sm leading-relaxed">
                          <span className="inline-block w-1.5 h-1.5 rounded-full bg-white/60 mt-2 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  
                  {/* Experience Card Actions */}
                  <div className="flex flex-wrap items-center gap-3 pt-2 pl-1">
                    {exp.image && (
                      <button 
                        onClick={() => setLightboxImage(exp.image || null)}
                        className="liquid-glass rounded-full px-4 py-2 text-white/90 hover:bg-white/10 hover:text-white transition-colors text-xs font-semibold flex items-center gap-1.5 border-none cursor-pointer"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>See Interface</span>
                      </button>
                    )}
                    {exp.links && exp.links.map((link, lIdx) => (
                      <a 
                        key={lIdx}
                        href={link.url}
                        target="_blank"
                        rel="noreferrer"
                        className="liquid-glass rounded-full px-4 py-2 text-white/90 hover:bg-white/10 hover:text-white transition-colors text-xs font-semibold flex items-center gap-1 border-none"
                      >
                        {getLinkIcon(link.icon)}
                        <span>{link.label}</span>
                      </a>
                    ))}
                  </div>
                </div>

                <div className="text-right shrink-0 md:pt-2">
                  <span className="inline-block bg-white/5 rounded-full px-4 py-1 text-white/90 text-xs font-semibold uppercase tracking-wider border border-white/10">
                    {exp.period}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* EDUCATION SECTION */}
        <section id="education" className="max-w-5xl mx-auto px-6 py-16 md:py-24 scroll-mt-20">
          <div className="text-center mb-16">
            <h2 style={{ fontFamily: "'Instrument Serif', serif" }} className="text-5xl md:text-6xl text-white italic font-normal">
              Education
            </h2>
            <div className="w-16 h-0.5 bg-white/20 mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {educationList.map((edu, idx) => (
              <div key={idx} className="liquid-glass rounded-3xl p-6 md:p-8 flex flex-col justify-between gap-6 transition-all hover:bg-white/[0.03]">
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-2xl liquid-glass bg-white/5 text-white/80">
                      <GraduationCap className="w-6 h-6" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{edu.school}</h3>
                      <p className="text-white/60 text-sm font-semibold uppercase tracking-wider mt-1">{edu.degree}</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                  <span className="text-white/50 text-sm font-medium">{edu.period}</span>
                  <button 
                    onClick={() => setLightboxImage(edu.image)}
                    className="liquid-glass rounded-full px-4 py-2 text-white/90 hover:bg-white/10 hover:text-white transition-colors text-xs font-semibold flex items-center gap-1.5 border-none cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Diploma</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="max-w-5xl mx-auto px-6 py-16 md:py-24 scroll-mt-20">
          <div className="text-center mb-16">
            <h2 style={{ fontFamily: "'Instrument Serif', serif" }} className="text-5xl md:text-6xl text-white italic font-normal">
              Skills & Technologies
            </h2>
            <div className="w-16 h-0.5 bg-white/20 mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {skillCategories.map((cat, idx) => (
              <div key={idx} className="liquid-glass rounded-3xl p-6 space-y-4">
                <h3 className="text-lg font-bold text-white tracking-wide border-b border-white/10 pb-2">{cat.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, sIdx) => (
                    <span 
                      key={sIdx} 
                      className="liquid-glass rounded-full px-3.5 py-1.5 text-xs text-white/80 hover:text-white hover:bg-white/5 transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Workflow card */}
          <div className="liquid-glass rounded-3xl p-6 md:p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-white mb-4 text-center">Workflow & Methodologies</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Mobile-First, Responsive Design",
                "Cross Browser Testing & Debugging",
                "Cross Functional Teams",
                "Agile Development & Scrum"
              ].map((flow, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-white/80 text-sm font-medium">
                  <CheckCircle2 className="w-4 h-4 text-white/60" />
                  <span>{flow}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AWARDS SECTION */}
        <section id="awards" className="max-w-5xl mx-auto px-6 py-16 md:py-24 scroll-mt-20">
          <div className="text-center mb-16">
            <h2 style={{ fontFamily: "'Instrument Serif', serif" }} className="text-5xl md:text-6xl text-white italic font-normal">
              Awards & Certifications
            </h2>
            <div className="w-16 h-0.5 bg-white/20 mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {awardsList.map((award, idx) => (
              <div key={idx} className="liquid-glass rounded-2xl p-5 flex items-center justify-between gap-4 transition-all hover:bg-white/[0.03]">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-white/5 text-white/80">
                    <Trophy className="w-5 h-5" size={20} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white leading-snug">{award.title}</h3>
                    <p className="text-white/50 text-xs mt-0.5">{award.organization}</p>
                  </div>
                </div>
                
                <a 
                  href={`${import.meta.env.BASE_URL}${award.pdf}`} 
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open PDF certificate for ${award.title}`}
                  className="liquid-glass rounded-full px-4 py-2 text-white/90 hover:bg-white/10 hover:text-white transition-colors text-xs font-semibold flex items-center gap-1 border-none cursor-pointer shrink-0"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Open PDF</span>
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* INTERESTS SECTION */}
        <section id="interests" className="max-w-5xl mx-auto px-6 py-16 md:py-24 scroll-mt-20 mb-20">
          <div className="text-center mb-16">
            <h2 style={{ fontFamily: "'Instrument Serif', serif" }} className="text-5xl md:text-6xl text-white italic font-normal">
              Personal Interests
            </h2>
            <div className="w-16 h-0.5 bg-white/20 mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-6 space-y-6">
              <div className="liquid-glass rounded-3xl p-6 md:p-8 space-y-6">
                <div className="flex items-center gap-3">
                  <Gamepad2 className="w-6 h-6 text-white/60" />
                  <h3 className="text-xl font-bold text-white">Gaming & Community</h3>
                </div>
                <p className="text-white/85 leading-relaxed text-sm md:text-base">
                  Apart from being a developer, I enjoy gaming and actively participate in a local gaming community in Ibagué. We organize gatherings, test software products together, and participate in tournaments.
                </p>
                
                <div className="flex items-center gap-3 border-t border-white/10 pt-6">
                  <Globe className="w-6 h-6 text-white/60" />
                  <h3 className="text-xl font-bold text-white">Cycling & Nature</h3>
                </div>
                <p className="text-white/85 leading-relaxed text-sm md:text-base">
                  I love getting out into the fresh air and riding my bicycle. Exploring the landscapes surrounding Ibagué provides a great balance to hours spent coding and keeps my mind fresh and creative.
                </p>
              </div>
            </div>

            <div className="md:col-span-6">
              <div className="liquid-glass rounded-3xl p-4 flex items-center justify-center">
                <img 
                  src={`${import.meta.env.BASE_URL}img/intereses.png`} 
                  alt="Landscape and gaming interests" 
                  className="rounded-2xl w-full h-auto object-cover max-h-[350px]"
                />
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Social Footer */}
      <footer className="relative z-10 flex flex-col items-center gap-4 pb-12 pt-6 w-full border-t border-white/5 bg-black/45 backdrop-blur-md">
        <div className="flex gap-4">
          <a 
            href="https://www.linkedin.com/in/andres-bermeo-06a265275/" 
            target="_blank" 
            rel="noreferrer"
            aria-label="LinkedIn Profile" 
            className="liquid-glass rounded-full p-4 text-white/80 hover:text-white hover:bg-white/5 transition-all flex items-center justify-center"
          >
            <Linkedin className="w-5 h-5" size={20} />
          </a>
          <a 
            href="https://github.com/afbermeope" 
            target="_blank" 
            rel="noreferrer"
            aria-label="GitHub Profile" 
            className="liquid-glass rounded-full p-4 text-white/80 hover:text-white hover:bg-white/5 transition-all flex items-center justify-center"
          >
            <Github className="w-5 h-5" size={20} />
          </a>
          <a 
            href="https://bitbucket.org/theblack2009/" 
            target="_blank" 
            rel="noreferrer"
            aria-label="Bitbucket" 
            className="liquid-glass rounded-full p-4 text-white/80 hover:text-white hover:bg-white/5 transition-all flex items-center justify-center"
          >
            <Globe className="w-5 h-5" size={20} />
          </a>
          <a 
            href="mailto:afbermeope@gmail.com" 
            aria-label="Mail Contact" 
            className="liquid-glass rounded-full p-4 text-white/80 hover:text-white hover:bg-white/5 transition-all flex items-center justify-center"
          >
            <Mail className="w-5 h-5" size={20} />
          </a>
        </div>
        <p className="text-white/40 text-xs">
          © {new Date().getFullYear()} Andrés Felipe Bermeo Pérez. All rights reserved.
        </p>
      </footer>

      {/* Custom React Lightbox Modal */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-fade-in"
          onClick={() => setLightboxImage(null)}
        >
          <div 
            className="relative max-w-4xl w-full bg-black/40 rounded-3xl p-2 liquid-glass border border-white/10 flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button 
              onClick={() => setLightboxImage(null)}
              className="absolute top-4 right-4 liquid-glass rounded-full p-2 text-white/80 hover:text-white hover:bg-white/15 transition-all cursor-pointer z-50 border-none"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" size={20} />
            </button>
            
            {/* Modal Image */}
            <img 
              src={`${import.meta.env.BASE_URL}img/${lightboxImage}`} 
              alt="Certificate or interface preview" 
              className="max-h-[85vh] w-auto max-w-full rounded-2xl object-contain select-none"
            />
          </div>
        </div>
      )}

    </div>
  );
}

export default App;
