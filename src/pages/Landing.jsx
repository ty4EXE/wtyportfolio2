import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Experience from '../components/sections/Experience';
import Contact from '../components/sections/Contact';

// Register plugin
gsap.registerPlugin(ScrollTrigger);

export default function Landing() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero: fade in on initial load
      gsap.from('#hero', {
        opacity: 0,
        y: 40,
        duration: 1.2,
        ease: 'power3.out',
      });

      // About section
      gsap.from('.about-text', {
        scrollTrigger: {
          trigger: '#about',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
          invalidateOnRefresh: true,
        },
        opacity: 0,
        y: 40,
        duration: 1,
        stagger: 0.15,
        ease: 'power2.out',
      });

      // Experience cards
      gsap.from('.experience-card', {
        scrollTrigger: {
          trigger: '#experience',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
          invalidateOnRefresh: true,
        },
        opacity: 0,
        y: 40,
        duration: 0.9,
        stagger: 0.2,
        ease: 'power2.out',
      });

      // Contact panel
      gsap.from('.contact-panel', {
        scrollTrigger: {
          trigger: '#contact',
          start: 'top 85%',
          toggleActions: 'play none none reverse',
          invalidateOnRefresh: true,
        },
        opacity: 0,
        y: 40,
        duration: 0.9,
        ease: 'power2.out',
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen text-white selection:bg-white selection:text-black relative z-10 font-mono">
      <main>
        <Hero />
        <About />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}