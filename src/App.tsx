import React, { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { About } from './components/About';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { motion, useScroll, useSpring } from 'motion/react';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Smooth scroll behavior
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <main className="bg-white selection:bg-red-600 selection:text-white overflow-x-hidden">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-red-600 z-[60] origin-left"
        style={{ scaleX }}
      />

      <Navbar />
      
      <div className="relative">
        <Hero />
        
        {/* Transition Overlay */}
        <div className="h-32 bg-gradient-to-b from-slate-900 to-white relative z-10" />
        
        <div id="training">
          <Services />
        </div>

        <div id="about">
          <About />
        </div>

        <div id="results">
          <Testimonials />
        </div>

        <Contact />
        
        <Footer />
      </div>

      {/* Global 3D/Ambient Elements */}
      <div className="fixed inset-0 pointer-events-none z-40">
        {/* Subtle noise texture */}
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        
        {/* Floating particles or ambient light */}
        <motion.div
          animate={{ 
            x: [0, 100, 0],
            y: [0, 50, 0],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[120px]"
        />
      </div>
    </main>
  );
}
