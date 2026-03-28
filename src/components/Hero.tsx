import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Builder } from '@builder.io/react';

interface HeroProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  backgroundImage?: string;
}

export const Hero = ({
  title = 'TRAIN HARD. PLAY CONFIDENT.',
  subtitle = 'GET CAGE RAISED',
  ctaText = 'Start Your Journey',
  backgroundImage = 'https://images.unsplash.com/photo-1508344928928-7165b67de128?q=80&w=2070&auto=format&fit=crop',
}: HeroProps) => {
  const { scrollYProgress } = useScroll();
  
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 500]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.2]);
  const rotateX = useTransform(scrollYProgress, [0, 0.5], [0, 10]);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-slate-950">
      {/* Background Layer */}
      <motion.div
        style={{ y: y1, scale }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-cage-grid opacity-20 z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-transparent to-slate-950 z-20" />
        <img
          src={backgroundImage}
          alt="Baseball Training"
          className="w-full h-full object-cover opacity-40 grayscale contrast-125"
          referrerPolicy="no-referrer"
        />
      </motion.div>

      {/* Content Layer */}
      <motion.div
        style={{ y: y2, opacity, rotateX }}
        className="relative z-30 text-center px-6 max-w-7xl"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 100 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-block bg-red-600 text-white font-mono text-xs md:text-sm font-bold tracking-[0.4em] uppercase py-2 px-6 skew-slant mb-8 border-b-4 border-red-900">
            <span className="-skew-x-[-12deg] block">EST. BELCHERTOWN MA</span>
          </div>

          <div className="mb-8 flex justify-center">
            <img 
              src="https://image2url.com/r2/default/images/1774729235190-a0f74ad9-8905-4e58-b824-e95158bb9a7b.png" 
              alt="Cage Raised Logo" 
              className="h-32 md:h-48 w-auto object-contain drop-shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </div>
          
          <h1 className="text-[12vw] md:text-[10vw] font-display text-white leading-[0.85] mb-12">
            <span className="block text-stroke-red">CAGE</span>
            <span className="block -mt-4">RAISED</span>
          </h1>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <button className="group relative bg-red-600 text-white px-12 py-6 font-display text-2xl italic uppercase tracking-widest overflow-hidden transition-all skew-slant border-b-8 border-red-900 active:translate-y-1 active:border-b-4">
              <span className="relative z-10 -skew-x-[-12deg] block">{ctaText}</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
            
            <div className="flex flex-col items-start gap-1">
              <span className="text-red-600 font-mono text-[10px] font-bold tracking-widest uppercase">Available Now</span>
              <button className="text-white font-display text-xl italic uppercase tracking-widest border-b-2 border-white/20 hover:border-red-600 transition-colors py-1">
                View Programs
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Technical Accents */}
      <div className="absolute bottom-12 left-12 z-40 hidden lg:block">
        <div className="flex items-center gap-4">
          <div className="w-12 h-[1px] bg-red-600" />
          <span className="text-white/40 font-mono text-[10px] uppercase tracking-[0.5em]">42.2765° N, 72.4009° W</span>
        </div>
      </div>
      
      <div className="absolute top-1/2 right-12 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className="w-1 h-1 bg-red-600" />
        ))}
      </div>
    </section>
  );
};

Builder.registerComponent(Hero, {
  name: 'Hero',
  inputs: [
    { name: 'title', type: 'string', defaultValue: 'TRAIN HARD. PLAY CONFIDENT.' },
    { name: 'subtitle', type: 'string', defaultValue: 'GET CAGE RAISED' },
    { name: 'ctaText', type: 'string', defaultValue: 'Start Your Journey' },
    { name: 'backgroundImage', type: 'string', defaultValue: 'https://images.unsplash.com/photo-1508344928928-7165b67de128?q=80&w=2070&auto=format&fit=crop' },
  ],
});
