/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowRight,
  Quote,
  ChevronLeft,
  ChevronRight,
  Star,
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowUpRight,
  Menu,
  X,
  CheckCircle,
  HelpCircle,
  ChevronDown,
  Home,
  Compass,
  Layout,
  Tv,
  Bed,
  Grid,
  PenTool,
  Wrench
} from 'lucide-react';
import { PageType, Project, Testimonial } from './types';
import { PROJECTS, TESTIMONIALS, FOUNDER_INFO, STATS, WORK_PROCESS } from './constants';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [isAppLoading, setIsAppLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Smooth scroll helper matching navigation selection
  const handlePageSelect = (page: PageType) => {
    setCurrentPage(page);
    window.location.hash = page;

    let targetId = '';
    if (page === 'home') targetId = 'hero-section';
    else if (page === 'about') targetId = 'about-section';
    else if (page === 'projects') targetId = 'projects-section';
    else if (page === 'testimonials') targetId = 'testimonials-section';
    else if (page === 'contact') targetId = 'contact-section';

    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80; // navbar heights safety offset
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    } else if (page === 'home') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  // Set up Scroll-Spy to light up correct nav links as the user scrolls
  useEffect(() => {
    if (isAppLoading) return;

    const sections = [
      { id: 'hero-section', page: 'home' },
      { id: 'about-section', page: 'about' },
      { id: 'projects-section', page: 'projects' },
      { id: 'testimonials-section', page: 'testimonials' },
      { id: 'contact-section', page: 'contact' }
    ];

    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -60% 0px', // focused in upper-mid viewport
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const matched = sections.find((sect) => sect.id === entry.target.id);
          if (matched) {
            setCurrentPage(matched.page as PageType);
            window.history.replaceState(null, '', `#${matched.page}`);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((sect) => {
      const el = document.getElementById(sect.id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((sect) => {
        const el = document.getElementById(sect.id);
        if (el) observer.unobserve(el);
      });
    };
  }, [isAppLoading]);

  // Luxury loader screen timer
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAppLoading(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  // Measure page scroll height for progress bar
  useEffect(() => {
    const handleScroll = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0;
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {/* Luxury Loading Screen */}
        {isAppLoading && (
          <motion.div
            id="luxury-loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            className="fixed inset-0 bg-luxury-black z-50 flex flex-col items-center justify-center text-center p-6"
          >
            <div id="loader-letter-wrap" className="space-y-4">
              <motion.div
                initial={{ letterSpacing: '0.1em', opacity: 0.3 }}
                animate={{ letterSpacing: '0.18em', opacity: 1 }}
                transition={{ duration: 1.4, ease: 'easeOut' }}
                className="font-serif text-2xl sm:text-4xl text-luxury-beige uppercase font-bold text-center leading-tight"
              >
                Sako Design
                <br />
                Studio
              </motion.div>
              
              <div id="loader-line-track" className="w-16 h-[1.5px] bg-luxury-beige/30 mx-auto overflow-hidden relative">
                <motion.div
                  initial={{ left: '-100%' }}
                  animate={{ left: '100%' }}
                  transition={{ repeat: Infinity, duration: 1.2, ease: 'linear' }}
                  className="absolute top-0 bottom-0 w-8 bg-luxury-gold"
                />
              </div>

              <motion.p
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 0.8, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-[9px] tracking-[0.3em] uppercase text-luxury-stone font-light text-center"
              >
                by Sanjana Chacko • Pune, India
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Single Page Layout container */}
      <div id="app-main-view" className="min-h-screen bg-luxury-black text-luxury-stone font-sans selection:bg-luxury-beige selection:text-luxury-black">
        
        {/* Sticky luxury header */}
        <Navbar
          currentPage={currentPage}
          setCurrentPage={handlePageSelect}
          onOpenConsultation={() => handlePageSelect('contact')}
        />

        {/* Global Progress Indicator */}
        <div id="scroll-progress-indicator" className="fixed top-0 left-0 right-0 h-[3px] bg-luxury-beige/10 z-50 pointer-events-none">
          <div
            id="scroll-progress-fill"
            className="h-full bg-luxury-gold shadow-[0_0_8px_rgba(211,190,146,0.5)] transition-all duration-75"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>

        {/* Scrolling Canvas Contents */}
        <main id="app-main-content" className="relative z-10">
          <HomeView onOpenConsultation={() => handlePageSelect('contact')} />
        </main>

        {/* Geographical complete footer */}
        <Footer
          setCurrentPage={handlePageSelect}
          onOpenConsultation={() => handlePageSelect('contact')}
        />

        {/* Floating WhatsApp Action Trigger */}
        <WhatsAppButton />
      </div>
    </>
  );
}

// ==========================================
// SUB-COMPONENT: NAVBAR
// ==========================================
interface NavbarProps {
  currentPage: PageType;
  setCurrentPage: (page: PageType) => void;
  onOpenConsultation: () => void;
}

function Navbar({ currentPage, setCurrentPage, onOpenConsultation }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 45);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Studio' },
    { id: 'projects', label: 'Projects' },
    { id: 'testimonials', label: 'Reviews' },
    { id: 'contact', label: 'Contact' },
  ] as const;

  const handleNavClick = (pageId: PageType) => {
    setCurrentPage(pageId);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top micro-banner */}
      <div id="nav-top-banner" className="bg-luxury-black/95 text-[10px] sm:text-xs text-luxury-stone py-2 px-4 border-b border-luxury-beige/10 z-50 relative flex justify-between items-center font-sans tracking-widest font-light">
        <div id="nav-banner-location" className="flex items-center gap-1.5 text-luxury-beige">
          <MapPin id="nav-banner-pin" className="w-3.5 h-3.5 stroke-[1.5]" />
          <span>Aundh, Pune, India</span>
        </div>
        <div id="nav-banner-contact" className="flex items-center gap-4">
          <a id="nav-phone-link" href="tel:+919921083184" className="flex items-center gap-1.5 hover:text-luxury-gold transition-colors">
            <Phone id="nav-banner-phone" className="w-3.5 h-3.5 stroke-[1.5]" />
            <span>099210 83184</span>
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        id="main-navigation"
        className="fixed top-8 left-0 right-0 z-40 transition-all duration-500 ease-in-out px-4 sm:px-8 mx-auto max-w-7xl"
      >
        <div
          id="nav-inner-container"
          className={`flex items-center justify-between transition-all duration-500 rounded-lg py-4 px-6 md:px-8 ${
            isScrolled
              ? 'glass-panel shadow-2xl py-3 border-b border-luxury-beige/20 bg-luxury-black/90'
              : 'bg-transparent border-b border-transparent'
          }`}
        >
          {/* Brand Logo */}
          <div
            id="nav-brand-logo"
            onClick={() => handleNavClick('home')}
            className="flex flex-col cursor-pointer select-none"
          >
            <span id="brand-title" className="font-serif text-base sm:text-lg md:text-2xl font-semibold tracking-[0.1em] text-luxury-beige uppercase leading-tight">
              Sako Design Studio
            </span>
            <span id="brand-subtitle" className="text-[8px] sm:text-[9px] tracking-[0.2em] font-sans font-light text-luxury-stone uppercase">
              by Sanjana Chacko
            </span>
          </div>

          {/* Center Navigation Links (Desktop) */}
          <div id="nav-desktop-links" className="hidden md:flex items-center gap-8 lg:gap-10">
            {navItems.map((item) => (
              <button
                id={`nav-link-${item.id}`}
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative font-sans text-[11px] tracking-[0.2em] uppercase transition-colors duration-300 py-2 font-medium ${
                  currentPage === item.id
                    ? 'text-luxury-gold'
                    : 'text-luxury-stone/80 hover:text-luxury-beige'
                }`}
              >
                {item.label}
                {currentPage === item.id && (
                  <motion.div
                    id={`active-indicator-${item.id}`}
                    layoutId="activeNavBorder"
                    className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-luxury-gold"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Right Action Button (Desktop) */}
          <div id="nav-right-actions" className="hidden md:flex items-center gap-6">
            <button
              id="nav-booking-cta"
              onClick={onOpenConsultation}
              className="px-4 lg:px-5 py-2 sm:py-2.5 font-sans text-[10px] lg:text-[11px] tracking-[0.16em] uppercase text-luxury-black bg-luxury-beige hover:bg-luxury-gold font-semibold rounded-sm transition-all duration-300 cursor-pointer shadow-lg hover:shadow-luxury-beige/10"
            >
              Book Consultation
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            id="nav-mobile-trigger"
            aria-label="Toggle Menu"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex md:hidden p-2 text-luxury-stone hover:text-luxury-beige transition-colors"
          >
            {isMobileMenuOpen ? (
              <X id="nav-mobile-close" className="w-6 h-6 stroke-[1.5]" />
            ) : (
              <Menu id="nav-mobile-open" className="w-6 h-6 stroke-[1.5]" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer Overlay */}
      <AnimatePresence id="mobile-menu-presence">
        {isMobileMenuOpen && (
          <motion.div
            id="nav-mobile-drawer"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 pt-32 pb-10 bg-luxury-black/98 z-30 flex flex-col justify-between px-6 md:hidden"
          >
            <div id="mobile-links-wrapper" className="flex flex-col gap-5 mt-4">
              {navItems.map((item) => (
                <button
                  id={`nav-mob-link-${item.id}`}
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left font-serif text-xl sm:text-2xl tracking-widest uppercase transition-colors py-1 ${
                    currentPage === item.id
                      ? 'text-luxury-gold border-l-2 border-luxury-gold pl-3'
                      : 'text-luxury-stone font-light pl-3'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div id="mobile-cta-wrapper" className="h-0.5 w-12 bg-luxury-beige/20 my-2"></div>
              <button
                id="mobile-nav-booking-cta"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full text-center py-3.5 bg-luxury-beige text-luxury-black font-sans font-semibold uppercase tracking-widest text-xs rounded-sm hover:bg-luxury-gold transition-colors mt-2"
              >
                Book Consultation
              </button>
            </div>

            <div id="mobile-menu-footer" className="space-y-4">
              <div id="mobile-address-block" className="space-y-1 text-xs text-luxury-stone/80 font-sans font-light">
                <p id="mob-address-title" className="text-luxury-beige font-semibold uppercase tracking-wider mb-1">Our Aundh Studio</p>
                <p id="mob-address-text">Nagras Rd, Shambhu Vihar Society,</p>
                <p id="mob-address-area">Aundh, Pune, Maharashtra 411067</p>
                <p id="mob-address-phone" className="text-luxury-beige mt-1">099210 83184</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// ==========================================
// SUB-COMPONENT: HOME VIEW (REBUILT WITH ENHANCED RESPONSIVELAYOUTS)
// ==========================================
interface HomeViewProps {
  onOpenConsultation: () => void;
}

function HomeView({ onOpenConsultation }: HomeViewProps) {
  // Hero background images
  const heroBackgrounds = [
    'https://lh3.googleusercontent.com/gps-cs-s/APNQkAEWzNoKeMWsxiVRWuZfmtcSJtFBfZM1PIn-7har-TfnsUAnbUc1UMjn3O5Vt4G9rmhfdBjXGY8a92hTza7jDBwK7a3ceb8RiPb97GhB4D_9yB--RvgcJiThkxbjQzSa3sDpfdoH9g=w1600',
    'https://lh3.googleusercontent.com/gps-cs-s/APNQkAHd3kKO-DVtTCksiUwsf4n56bJURfdWtkWRddMyIj216Rq_d_5uFnU4PSX2T0KjEfIkf4nUmInvUcunQSJg3vCQUHyIh1LlUoPGsfLn1kvhjaT8iIvTYKjn5FXNtM-74faukQlr=w1600',
    'https://lh3.googleusercontent.com/gps-cs-s/APNQkAHgARiN7BH6AVED_YK2qRsmryq_tKBx92LavvJBp_kRk9rRb7AEqhZHL6sKNhw97aXcqqJ8umVeOAmArFZARdd-u9aVdqHicHCJZvAaz_CzjynxvSZctlMdGfLBOmBYV1l5gpz6=w1600'
  ];

  const heroTaglineCycles = [
    'Sako Design Studio',
    'Uncompromising Luxury Interiors',
    'Architectural Precision On-Site'
  ];

  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroIndex((prev) => (prev + 1) % heroBackgrounds.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroBackgrounds.length]);

  // Project Portfolio Tab Category Filtering
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const categories = ['All', 'Living Rooms', 'Bedrooms', 'Modular Kitchen', 'Office Spaces', 'Residential & Commercial'];

  const filteredProjects = PROJECTS.filter((project) => {
    if (activeCategory === 'All') return true;
    if (activeCategory === 'Residential & Commercial') {
      return (
        project.category === 'Residential' ||
        project.category === 'Commercial' ||
        project.category === 'Living Rooms' ||
        project.category === 'Bedrooms'
      );
    }
    return project.category === activeCategory;
  });

  // Testimonial selection index carousel
  const [currentTestimonialIdx, setCurrentTestimonialIdx] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonialIdx((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonialIdx((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  // Auto-carousel timer for reviews
  useEffect(() => {
    const timer = setInterval(() => {
      nextTestimonial();
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  // Contact Form State
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formMessage, setFormMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName || !formPhone) return;

    setIsSubmitting(true);
    // Simulate real luxury submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormName('');
      setFormEmail('');
      setFormPhone('');
      setFormMessage('');
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1200);
  };



  return (
    <div id="home-view" className="space-y-0">
      
      {/* 1. CINEMATIC DISCOVERY HERO */}
      <section id="hero-section" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Dynamic Image Canvas Slider */}
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentHeroIndex}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            className="absolute inset-0 w-full h-full"
          >
            <img
              id={`hero-bg-${currentHeroIndex}`}
              src={heroBackgrounds[currentHeroIndex]}
              alt="Luxury Interior Frame"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </AnimatePresence>

        {/* Rich dark vignettes */}
        <div id="hero-vignette" className="absolute inset-0 bg-gradient-to-t from-luxury-black via-luxury-black/60 to-luxury-black/35 z-10" />
        <div id="hero-grain" className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-luxury-black/20 to-luxury-black/80 z-10 pointer-events-none"></div>

        {/* Content Layout */}
        <div id="hero-content-wrapper" className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-5 sm:space-y-8 pt-20 sm:pt-32 pb-6">

          <div id="hero-title-group" className="space-y-3 sm:space-y-4">
            <div className="min-h-[110px] sm:min-h-[160px] md:min-h-[185px] flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.h1
                  id="hero-header-text"
                  key={currentHeroIndex}
                  initial={{ opacity: 0, filter: 'blur(10px)' }}
                  animate={{ opacity: 1, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, filter: 'blur(10px)' }}
                  transition={{ duration: 0.8, ease: 'easeInOut' }}
                  className="font-sans text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-wide text-transparent bg-clip-text bg-gradient-to-b from-white via-luxury-cream to-luxury-beige leading-tight font-medium sm:font-light uppercase"
                >
                  {heroTaglineCycles[currentHeroIndex]}
                </motion.h1>
              </AnimatePresence>
            </div>

            <motion.p
              id="hero-lead-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.9 }}
              className="text-[11px] sm:text-xs md:text-sm tracking-[0.18em] sm:tracking-[0.25em] text-luxury-stone font-sans uppercase font-light max-w-2xl mx-auto leading-relaxed px-2"
            >
              Architectural luxury tailored for affluent Indian homes and corporate hubs.
            </motion.p>
          </div>

          {/* Action CTAs */}
          <motion.div
            id="hero-button-group"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 px-4 sm:px-0 w-full"
          >
            <button
              id="hero-view-proj-btn"
              onClick={() => {
                const trg = document.getElementById('projects-section');
                if (trg) trg.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-luxury-beige text-luxury-black uppercase tracking-[0.2em] text-xs font-sans font-bold hover:bg-luxury-gold hover:shadow-[0_0_25px_rgba(211,190,146,0.35)] rounded-sm cursor-pointer transition-all flex items-center justify-center gap-2 group"
            >
              <span>Explore Portfolio</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
            </button>
            
            <button
              id="hero-consult-btn"
              onClick={onOpenConsultation}
              className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 border border-luxury-beige/40 text-luxury-stone hover:text-luxury-beige hover:border-luxury-gold uppercase tracking-[0.2em] text-xs font-sans font-bold bg-luxury-black/45 hover:bg-luxury-black/90 backdrop-blur-sm rounded-sm transition-all flex items-center justify-center cursor-pointer"
            >
              <span>Book Consultation</span>
            </button>
          </motion.div>

        </div>
      </section>

      {/* 2. ABOUT & STUDIO HERITAGE SECTION */}
      <section id="about-section" className="py-24 bg-luxury-charcoal relative border-b border-luxury-beige/10 overflow-hidden">
        <div id="about-decor-circle" className="absolute bottom-0 left-10 w-96 h-96 bg-luxury-beige/3 blur-3xl rounded-full pointer-events-none"></div>
        
        <div id="about-container" className="max-w-7xl mx-auto px-4 sm:px-8 space-y-24">
          
          {/* Main preview split coordinates */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Column A: Portrait Panel */}
            <div id="about-preview-col-img" className="lg:col-span-5 relative w-full">
              <div id="about-image-shadow-back" className="absolute -top-4 -left-4 w-full h-full border border-luxury-gold/15 translate-x-2 translate-y-2 rounded-sm pointer-events-none"></div>
              <img
                id="about-preview-portrait"
                src="https://lh3.googleusercontent.com/gps-cs-s/APNQkAGntLk27eeZbQFdZwVt7-dIRM7ZvVNkxVCql6LDj6erBmmVaSY1VGxHaFQXHZMefodUu0bwwPo3hcE0fb9UpwKBaAiJtb8U_4PoVHOv5Z0iP7imIMgVQGxql6LUH9RCf2LmHjA=w800"
                alt="Sako Design Studio Signature Space"
                className="w-full h-[320px] sm:h-[420px] lg:h-[520px] object-cover relative z-10 border border-luxury-beige/10 rounded-sm shadow-xl"
                referrerPolicy="no-referrer"
              />
              {/* Stamp Floating Panel */}
              <div id="founder-stamp-panel" className="absolute -bottom-6 sm:-bottom-8 -right-2 sm:-right-4 bg-luxury-black border border-luxury-beige/30 p-4 sm:p-5 z-20 text-center max-w-[170px] sm:max-w-[200px] shadow-2xl rounded-sm">
                <span id="stamp-year" className="font-serif text-2xl sm:text-3xl font-bold text-luxury-beige block">10+</span>
                <span id="stamp-text" className="text-[9px] sm:text-[10px] tracking-widest text-[#EFECE6]/80 uppercase block font-sans font-light mt-1">
                  Years of Site Supervision
                </span>
              </div>
            </div>

            {/* Column B: Content Narrative */}
            <div id="about-preview-col-text" className="lg:col-span-7 space-y-5 sm:space-y-6">
              <span id="about-preview-subtitle" className="text-[10px] sm:text-[11px] tracking-[0.35em] text-luxury-gold uppercase block font-sans">
                ARCHITECTURAL NARRATIVE & STORY
              </span>
              <h2 id="about-preview-title" className="font-serif text-3xl sm:text-4xl md:text-5xl tracking-wide text-luxury-stone font-light leading-tight">
                Crafting High-Symmetry Private Residences in Pune
              </h2>
              <div id="about-preview-divider" className="h-0.5 w-16 bg-luxury-beige my-2" />
              
              <p id="about-preview-para1" className="text-sm text-luxury-stone/80 font-light leading-relaxed">
                At <strong className="text-luxury-beige font-semibold">Sako Design Studio</strong>, we believe luxury is a language of proportion, rare materiality, and precise functional layout. Guided by our senior architectural designers and principal lead <strong className="text-luxury-beige font-semibold">Sanjana Chacko</strong>, our studio provides bespoke interior architecture and physical detailing across Pune's elite residential developments and corporate headquarters.
              </p>

              <blockquote id="about-preview-quote" className="border-l-2 border-luxury-beige pl-5 py-2 my-5 text-[#EFECE6]/90 italic font-serif text-base sm:text-lg">
                “We operate with a site-first discipline. No digital rendering is worth anything if we are not on-site hand-supervising its translation into perfect marble and oak wood joinery.”
              </blockquote>


            </div>
          </div>

        </div>
      </section>

      {/* 3. EXPERIENCE STATS BAR */}
      <section id="stats-section" className="py-12 sm:py-16 bg-luxury-black relative border-b border-luxury-beige/10">
        <div id="stats-container" className="max-w-7xl mx-auto px-4 sm:px-8">
          <div id="stats-grid" className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 divide-y md:divide-y-0 md:divide-x divide-luxury-beige/10 text-center">
            {STATS.map((stat, i) => (
              <div key={i} className="space-y-1 pb-4 md:pb-0 pt-4 md:pt-0">
                <span className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-luxury-beige via-luxury-gold to-luxury-beige block">
                  {stat.value}
                </span>
                <span className="text-[9px] sm:text-[10px] tracking-[0.2em] text-luxury-stone/70 uppercase block font-sans font-light">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CHRONO PORTFOLIO GRID & TABS GALLERY */}
      <section id="projects-section" className="py-24 bg-luxury-dark/95 border-b border-luxury-beige/10">
        <div id="portfolio-container" className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12 sm:space-y-16">
          
          {/* Header Row */}
          <div className="text-center md:text-left">
            <div className="space-y-2">
              <span className="text-[10px] sm:text-[11px] tracking-[0.35em] text-luxury-gold uppercase block font-sans">
                STUDIO SPECIFICATION REGISTER
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-luxury-stone tracking-wide font-light">
                Bespoke Design Portfolio
              </h2>
            </div>
          </div>

          {/* Detailed Image Gallery grid representation */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

        </div>
      </section>

      {/* 4.5 EXQUISITE HOME DECOR SOLUTIONS SECTION */}
      <section id="services-decor-section" className="py-24 bg-luxury-black relative border-b border-luxury-beige/10 overflow-hidden">
        <div id="services-decor-bg-glow" className="absolute top-1/2 left-1/4 w-80 h-80 bg-luxury-gold/3 blur-[120px] rounded-full pointer-events-none" />
        <div id="services-decor-container" className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12 sm:space-y-16 relative z-10">
          
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <span className="text-[10px] sm:text-[11px] tracking-[0.35em] text-luxury-gold uppercase block font-sans">
              BESPOKE RESIDENTIAL SERVICES
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-luxury-stone tracking-wide font-light leading-tight">
              Exquisite Home Decor Solutions
            </h2>
            <div className="h-[1.5px] w-16 bg-luxury-beige mx-auto mt-4" />
            <p className="text-xs uppercase tracking-widest text-[#EFECE6]/70 font-light font-sans pt-2">
              Tailored design services and turnkey interior solutions for your home.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 overflow-hidden">
            {[
              {
                title: "Residential Interior Design",
                description: "Elegant residential solutions designed for ultimate comfort and modern living.",
                icon: Home,
              },
              {
                title: "Interior Architecture",
                description: "Innovative interior layouts and space planning from concept to execution.",
                icon: Compass,
              },
              {
                title: "Modular Kitchen Design",
                description: "Sleek, highly efficient layouts utilizing premium hardware and smart storage.",
                icon: Grid,
              },
              {
                title: "Living Room Design",
                description: "Inviting, elegant gathering spaces with bespoke furniture and media units.",
                icon: Tv,
              },
              {
                title: "Bedroom Design",
                description: "Cozy personal sanctuaries with custom bed designs and integrated wardrobe solutions.",
                icon: Bed,
              },
              {
                title: "Space Planning",
                description: "Detailed blueprints, functional spacing charts, and optimal room layouts.",
                icon: Layout,
              },
              {
                title: "Furniture Design",
                description: "Premium, handcrafted bespoke furniture and wardrobes tailored to your needs.",
                icon: PenTool,
              },
              {
                title: "Home Renovation",
                description: "Transforming existing spaces with structural and aesthetic upgrades.",
                icon: Wrench,
              },
            ].map((srv, idx) => {
              const IconComponent = srv.icon;
              return (
                <div
                  key={idx}
                  className="group relative p-6 sm:p-8 bg-luxury-charcoal/45 hover:bg-luxury-charcoal/95 border border-luxury-beige/10 hover:border-luxury-gold/50 rounded-md transition-all duration-500 flex flex-col justify-between hover:shadow-[0_10px_30px_rgba(211,190,146,0.05)] overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-luxury-gold/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-sm bg-luxury-beige/10 flex items-center justify-center text-luxury-beige group-hover:text-luxury-gold group-hover:bg-luxury-gold/15 transition-all duration-300 border border-luxury-beige/10">
                      <IconComponent className="w-6 h-6 stroke-[1.25]" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-serif text-lg text-luxury-stone font-light group-hover:text-white transition-colors">
                        {srv.title}
                      </h3>
                      <p className="text-xs text-luxury-stone/70 leading-relaxed font-light">
                        {srv.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Subtle golden bottom accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-luxury-gold/25 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </div>
              );
            })}
          </div>

        </div>
      </section>




      {/* 7. VERIFIED GOOGLE TESTIMONIALS & RATING EXPANSION SYSTEM */}
      <section id="testimonials-section" className="py-24 bg-luxury-charcoal relative border-b border-luxury-beige/10 overflow-hidden">
        <div id="test-bg-glow" className="absolute top-1/4 right-10 w-96 h-96 bg-luxury-beige/2 blur-3xl rounded-full pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-12 relative z-10">
          
          <div className="text-center space-y-2">
            <span className="text-[10px] sm:text-[11px] tracking-[0.35em] text-luxury-gold uppercase block font-sans">
              VOICES OF TRUST
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-luxury-stone font-light">
              Trusted by Executive Homeowners in Pune
            </h2>
            <p className="text-xs tracking-widest text-luxury-stone/50 capitalize font-light font-sans">
              verifiable client reviews logged on the google maps directory
            </p>
          </div>

          {/* Active Carousel Review */}
          <div className="bg-luxury-black/50 border border-luxury-beige/15 rounded-md p-6 sm:p-12 relative shadow-2xl">
            <Quote className="w-10 h-10 text-luxury-beige/10 absolute top-4 left-4 sm:top-6 sm:left-6" />
            
            <div className="space-y-4 sm:space-y-6 pt-4 text-center sm:text-left relative z-10">
              <div className="flex items-center justify-center sm:justify-start text-yellow-500 gap-1 select-none">
                {[...Array(TESTIMONIALS[currentTestimonialIdx].rating)].map((_, s) => (
                  <Star key={s} className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
                ))}
              </div>

              <p className="font-serif text-base sm:text-xl lg:text-2xl text-luxury-stone italic leading-relaxed">
                “{TESTIMONIALS[currentTestimonialIdx].review}”
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-luxury-beige/10">
                <div className="text-center sm:text-left">
                  <h4 className="font-serif text-base sm:text-lg text-luxury-beige font-semibold">
                    {TESTIMONIALS[currentTestimonialIdx].name}
                  </h4>
                  <p className="text-xs text-luxury-stone/60 font-light uppercase tracking-wider">
                    {TESTIMONIALS[currentTestimonialIdx].location} • Verified Review
                  </p>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-luxury-black/95 border border-luxury-beige/10 text-[9px] tracking-widest text-[#EFECE6]/80 uppercase rounded-full select-none">
                  <svg className="w-3.5 h-3.5 fill-current text-white shrink-0" viewBox="0 0 24 24">
                    <path d="M12.24 10.285V14.4h6.887c-.648 2.41-2.519 4.114-5.136 4.114-3.51 0-6.386-2.876-6.386-6.386a6.39 6.39 0 016.386-6.386c1.558 0 2.977.562 4.093 1.488l3.123-3.123C19.349 2.378 15.98.971 12.24.971 5.65.971.285 6.34.285 12.93c0 6.59 5.365 11.96 11.955 11.96 6.347 0 11.16-4.464 11.16-11.366 0-.612-.054-1.224-.162-1.836H12.24z"/>
                  </svg>
                  <span>Verified 5.0 Star Google Log</span>
                </div>
              </div>
            </div>
          </div>

          {/* Stepper Controllers */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <div className="flex items-center gap-4">
              <button
                onClick={prevTestimonial}
                className="w-10 h-10 border border-luxury-beige/25 hover:border-luxury-beige/80 rounded-full flex items-center justify-center text-luxury-stone transition-colors bg-luxury-black/90 cursor-pointer"
                aria-label="Previous Review"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Visual pager indicator */}
              <div className="flex gap-1.5 px-2">
                {TESTIMONIALS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentTestimonialIdx(i)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      i === currentTestimonialIdx ? 'bg-luxury-gold w-4' : 'bg-luxury-beige/25 hover:bg-luxury-beige/50'
                    }`}
                    aria-label={`Go to review ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="w-10 h-10 border border-luxury-beige/25 hover:border-luxury-beige/80 rounded-full flex items-center justify-center text-luxury-stone transition-colors bg-luxury-black/90 cursor-pointer"
                aria-label="Next Review"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>
      </section>



      {/* 9. PHYSICAL SHOWROOM COORDINATES + PREMIUM BOOKING FORM */}
      <section id="contact-section" className="py-24 bg-luxury-dark relative overflow-hidden">
        <div id="contact-glow-blur" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-luxury-gold/5 blur-[150px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16 relative z-10">
          
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <span className="text-[10px] sm:text-[11px] tracking-[0.35em] text-luxury-gold uppercase font-sans block">
              HQ CONTACT DETAILS & BOOKINGS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-luxury-stone font-light tracking-wide leading-tight">
              Get In Touch Now
            </h2>
            <div className="h-[1.5px] w-16 bg-luxury-beige mx-auto mt-4" />
            <p className="text-xs text-luxury-stone/60 tracking-widest uppercase font-light font-sans pt-2">
              Visit our gallery in Aundh or reach out directly to book an appointment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto w-full">
            
            {/* Coordinates Card A: Location */}
            <div className="p-6 sm:p-8 bg-luxury-charcoal/50 border border-luxury-beige/10 hover:border-luxury-gold/55 rounded-md space-y-4 transition-all duration-500 hover:shadow-[0_10px_35px_rgba(211,190,146,0.04)]">
              <div className="w-10 h-10 rounded-sm bg-luxury-beige/10 flex items-center justify-center text-luxury-beige border border-luxury-beige/10">
                <MapPin className="w-5 h-5 stroke-[1.25]" />
              </div>
              <div className="space-y-1">
                <strong className="text-luxury-beige uppercase font-semibold text-[11px] sm:text-xs tracking-wider block mb-1">AUNDH HEADQUARTERS</strong>
                <p className="text-xs sm:text-[13px] text-luxury-stone/85 leading-relaxed font-light">
                  Nagras Rd, Shambhu Vihar Society,<br />
                  Opposite CM International School connection road,<br />
                  Aundh, Pune, Maharashtra 411067
                </p>
              </div>
            </div>

            {/* Coordinates Card B: Phone */}
            <div className="p-6 sm:p-8 bg-luxury-charcoal/50 border border-luxury-beige/10 hover:border-luxury-gold/55 rounded-md space-y-4 transition-all duration-500 hover:shadow-[0_10px_35px_rgba(211,190,146,0.04)]">
              <div className="w-10 h-10 rounded-sm bg-luxury-beige/10 flex items-center justify-center text-luxury-beige border border-luxury-beige/10">
                <Phone className="w-5 h-5 stroke-[1.25]" />
              </div>
              <div className="space-y-1">
                <strong className="text-luxury-beige uppercase font-semibold text-[11px] sm:text-xs tracking-wider block mb-1">DIRECT TELECOMM</strong>
                <a href="tel:+919921083184" className="hover:text-luxury-gold transition-colors block text-base sm:text-lg font-mono tracking-wider text-white font-medium mt-1">
                  099210 83184
                </a>
                <span className="text-[10px] text-luxury-stone/50 block mt-1">Supervising Line (10:00 AM — 08:00 PM)</span>
              </div>
            </div>

            {/* Coordinates Card C: Email */}
            <div className="p-6 sm:p-8 bg-luxury-charcoal/50 border border-luxury-beige/10 hover:border-luxury-gold/55 rounded-md space-y-4 transition-all duration-500 hover:shadow-[0_10px_35px_rgba(211,190,146,0.04)]">
              <div className="w-10 h-10 rounded-sm bg-luxury-beige/10 flex items-center justify-center text-luxury-beige border border-luxury-beige/10">
                <Mail className="w-5 h-5 stroke-[1.25]" />
              </div>
              <div className="space-y-1">
                <strong className="text-luxury-beige uppercase font-semibold text-[11px] sm:text-xs tracking-wider block mb-1">ELECTRONIC MAILBOX</strong>
                <a href="mailto:sakodesignstudio@gmail.com" className="hover:text-luxury-gold transition-colors underline block text-sm sm:text-base text-white font-light mt-1">
                  sakodesignstudio@gmail.com
                </a>
              </div>
            </div>

            {/* Coordinates Card D: Working hours */}
            <div className="p-6 sm:p-8 bg-luxury-charcoal/50 border border-luxury-beige/10 hover:border-luxury-gold/55 rounded-md space-y-4 transition-all duration-500 hover:shadow-[0_10px_35px_rgba(211,190,146,0.04)] border border-luxury-beige/10">
              <div className="w-10 h-10 rounded-sm bg-luxury-beige/10 flex items-center justify-center text-luxury-beige border border-luxury-beige/10">
                <Clock className="w-5 h-5 stroke-[1.25]" />
              </div>
              <div className="space-y-1">
                <strong className="text-luxury-beige uppercase font-semibold text-[11px] sm:text-xs tracking-wider block mb-1">OFFICE HOURS</strong>
                <div className="text-xs sm:text-[13px] text-luxury-stone/85 leading-relaxed font-light mt-1">
                  <p>Monday — Saturday: 10:00 AM — 08:00 PM</p>
                  <p className="text-red-400 font-medium">Sunday: Closed (Opens 10 AM Mon)</p>
                </div>
              </div>
            </div>

          </div>

          {/* Embedded luxury colored map of Aundh area */}
          <div id="contact-map-frame" className="relative h-[320px] sm:h-[480px] w-full rounded-md border border-luxury-beige/15 overflow-hidden bg-luxury-black">
            <iframe
              title="Sako Design Studio Showroom Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.172403576441!2d73.80009121!3d18.5651167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf145a05383d%3A0xb14559c1c8ef35bb!2sSako+Design+Studio!5e0!3m2!1sen!2sin!4v1716912345678!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>
      </section>

    </div>
  );
}

// ==========================================
// SUB-COMPONENT: PORTFOLIO CARD
// ==========================================
interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      id={`project-card-${project.id}`}
      initial="initial"
      whileHover="hover"
      className="group relative h-[380px] sm:h-[420px] w-full rounded-md overflow-hidden bg-luxury-charcoal"
    >
      {/* Background Image layer with subtle pan scale */}
      <motion.img
        id={`project-img-${project.id}`}
        src={project.mainImage}
        alt={project.title}
        variants={{
          initial: { scale: 1 },
          hover: { scale: 1.04 }
        }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 w-full h-full object-cover"
        referrerPolicy="no-referrer"
      />

      {/* Elegant constant gold inset frame outline */}
      <div
        id={`project-frame-${project.id}`}
        className="absolute inset-4 border border-luxury-gold/60 group-hover:border-luxury-gold rounded-sm pointer-events-none transition-colors duration-500 shadow-[0_0_15px_rgba(211,190,146,0.15)] group-hover:shadow-[0_0_25px_rgba(211,190,146,0.35)]"
      />
    </motion.div>
  );
}

// ==========================================
// SUB-COMPONENT: WHATSAPP TRIGGER FLOAT
// ==========================================
function WhatsAppButton() {
  const whatsappNumber = '919921083184';
  const customMessage = encodeURIComponent(
    "Hello! I saw the premium Sako Design Studio website and would like to inquire about booking/planning a luxury interior design in Pune."
  );

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${customMessage}`;

  return (
    <div id="whatsapp-widget-container" className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end gap-2.5">
      <motion.a
        id="whatsapp-link-button"
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.95 }}
        className="w-12 h-12 sm:w-14 sm:h-14 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-colors border border-emerald-400/20"
        aria-label="Contact via WhatsApp"
      >
        <svg
          id="whatsapp-svg-logo"
          className="w-6.5 h-6.5 sm:w-7 sm:h-7 fill-white"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.703 1.456h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </motion.a>
    </div>
  );
}

// ==========================================
// SUB-COMPONENT: GEOGRAPHIC FOOTER
// ==========================================
interface FooterProps {
  setCurrentPage: (page: PageType) => void;
  onOpenConsultation: () => void;
}

function Footer({ setCurrentPage, onOpenConsultation }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="studio-footer" className="bg-luxury-black text-luxury-stone font-sans border-t border-luxury-beige/10 pt-16 sm:pt-20 pb-8 relative z-10">
      {/* Background decoration */}
      <div id="footer-bg-glow" className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-luxury-beige/5 blur-[160px] rounded-full pointer-events-none"></div>

      <div id="footer-inner-wrapper" className="max-w-7xl mx-auto px-4 sm:px-8">
        <div id="footer-row" className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand Info */}
          <div id="footer-col-brand" className="space-y-4 sm:space-y-6">
            <div id="footer-logo-block" className="space-y-1">
              <span id="footer-brand-title" className="font-serif text-xl sm:text-2xl font-bold tracking-[0.1em] text-luxury-beige block">
                Sako Design Studio
              </span>
              <span id="footer-brand-tagline" className="text-[9px] tracking-[0.2em] text-luxury-stone/80 uppercase font-light block">
                by Sanjana Chacko
              </span>
            </div>
            <p id="footer-brand-desc" className="text-xs sm:text-sm font-light leading-relaxed text-luxury-stone/80">
              Crafting premium architectural luxury on the solid foundations of geometric contrast, tactile stone materiality, and precise site handovers in Pune.
            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div id="footer-col-links" className="space-y-4 sm:space-y-6">
            <h4 id="links-header" className="font-serif text-base sm:text-lg text-luxury-beige uppercase tracking-[0.15em] font-medium border-b border-luxury-beige/10 pb-2">
              The Studio
            </h4>
            <ul id="links-list" className="space-y-3 text-xs sm:text-sm font-light">
              <li>
                <button onClick={() => setCurrentPage('home')} className="hover:text-luxury-gold transition-colors flex items-center gap-1 group cursor-pointer text-left">
                  <span>Home Experience</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentPage('about')} className="hover:text-luxury-gold transition-colors flex items-center gap-1 group cursor-pointer text-left">
                  <span>Our Heritage & Lead</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentPage('projects')} className="hover:text-luxury-gold transition-colors flex items-center gap-1 group cursor-pointer text-left">
                  <span>Luxury Portfolio</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentPage('testimonials')} className="hover:text-luxury-gold transition-colors flex items-center gap-1 group cursor-pointer text-left">
                  <span>Client Testimonials</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Address */}
          <div id="footer-col-contact" className="space-y-4 sm:space-y-6 md:col-span-2">
            <h4 id="contact-header" className="font-serif text-base sm:text-lg text-luxury-beige uppercase tracking-[0.15em] font-medium border-b border-luxury-beige/10 pb-2">
               Aundh Showroom & Office
            </h4>
            
            <div id="contact-items-wrapper" className="space-y-4 text-xs sm:text-sm font-light-weight">
              <div id="contact-address" className="flex items-start gap-3.5">
                <MapPin id="footer-pin-icon" className="w-5 h-5 text-luxury-beige shrink-0 mt-0.5" />
                <p id="footer-address-text" className="leading-relaxed">
                  Nagras Rd, Shambhu Vihar Society,<br />
                  Aundh, Pune, Maharashtra 411067
                </p>
              </div>

              <div id="contact-phones" className="flex items-center gap-3.5">
                <Phone id="footer-phone-icon" className="w-5 h-5 text-luxury-beige shrink-0" />
                <div>
                  <a id="footer-phone-num" href="tel:+919921083184" className="hover:text-luxury-gold transition-colors font-semibold block text-sm sm:text-base">
                    099210 83184
                  </a>
                  <span id="footer-phone-label" className="text-[10px] sm:text-xs text-luxury-stone/50 block font-light">Direct Studio Consultation</span>
                </div>
              </div>

              <div id="contact-email" className="flex items-center gap-3.5">
                <Mail id="footer-mail-icon" className="w-5 h-5 text-luxury-beige shrink-0" />
                <div>
                  <a id="footer-email-adr" href="mailto:sakodesignstudio@gmail.com" className="hover:text-luxury-gold transition-colors block text-sm sm:text-base underline">
                    sakodesignstudio@gmail.com
                  </a>
                  <span id="footer-email-label" className="text-[10px] sm:text-xs text-luxury-stone/50 block font-light">Sourcing & Private Consultations</span>
                </div>
              </div>
            </div>

            {/* Custom CTA Trigger for Footers */}
            <div id="footer-cta-trigger" className="pt-2">
              <button
                id="footer-instant-cta"
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-2 text-[10px] sm:text-xs uppercase tracking-widest text-luxury-beige border-b-2 border-luxury-beige hover:border-luxury-gold hover:text-luxury-gold py-1 duration-300 font-bold cursor-pointer"
              >
                <span>Draft Your Layout Plans Today</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

        {/* Section bottom detail panel */}
        <div id="footer-bottom" className="border-t border-luxury-beige/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
          <p id="footer-copyright" className="text-xs text-luxury-stone/60 font-light text-center md:text-left">
            © {currentYear} Sako Design Studio. All rights reserved.
          </p>
          <div id="footer-badges" className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-[9px] sm:text-[10px] tracking-wider text-luxury-stone/50 uppercase">
            <span id="badge-pune-local" className="flex items-center gap-1 select-none">
              <CheckCircle className="w-3.5 h-3.5 text-luxury-beige" />
              <span>Pune Local Heritage Studio</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
