import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Builder } from '@builder.io/react';
import { Target, Zap, Shield, Trophy } from 'lucide-react';

interface ServiceItem {
  title: string;
  description: string;
  icon: string;
  image: string;
}

interface ServicesProps {
  headline?: string;
  services?: ServiceItem[];
}

const iconMap: Record<string, any> = {
  Target,
  Zap,
  Shield,
  Trophy,
};

export const Services = ({
  headline = 'ELITE TRAINING PROGRAMS',
  services = [
    {
      title: 'HITTING',
      description: 'Master the mechanics of power and precision. Our hitting program focuses on swing path, timing, and mental approach.',
      icon: 'Target',
      image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?q=80&w=2070&auto=format&fit=crop',
    },
    {
      title: 'PITCHING',
      description: 'Build velocity and command while maintaining arm health. Learn the art of pitch sequencing and mound presence.',
      icon: 'Zap',
      image: 'https://t4.ftcdn.net/jpg/03/82/25/99/360_F_382259953_Zt1nLWCUUwSHtoiJUZqwmcUkjieaXdOw.jpgq=80&w=2070&auto=format&fit=crop',
    },
    {
      title: 'FIELDING',
      description: 'Develop soft hands and elite footwork. We cover everything from infield fundamentals to outfield tracking.',
      icon: 'Shield',
      image: 'https://images.unsplash.com/photo-1562077772-3bd90403f7f0?q=80&w=1931&auto=format&fit=crop',
    },
    {
      title: 'FUNDAMENTALS',
      description: 'The bedrock of greatness. Personalized 1-on-1 instruction for all ages to master the core skills of the game.',
      icon: 'Trophy',
      image: 'https://images.unsplash.com/photo-1508344928928-7165b67de128?q=80&w=2070&auto=format&fit=crop',
    },
  ],
}: ServicesProps) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <section ref={containerRef} className="relative bg-white overflow-hidden">
      {/* Background Watermark/Grid that spans the whole scroll height */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden opacity-[0.03]">
          <span className="text-[30vw] font-display text-slate-900 leading-none select-none">CAGE</span>
        </div>
      </div>

      <div className="sticky top-0 h-screen flex flex-col md:flex-row overflow-hidden z-10">
        {/* Left Side: Text Content */}
        <div className="w-full md:w-1/2 h-1/2 md:h-full flex flex-col justify-center px-8 md:px-24 bg-slate-50/90 backdrop-blur-sm border-r border-slate-200 relative">
          <div className="absolute inset-0 bg-cage-grid opacity-5 pointer-events-none" />
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="w-8 h-8 bg-red-600 skew-slant" />
            <span className="text-red-600 font-mono text-xs font-bold tracking-[0.3em] uppercase">
              System Protocols
            </span>
          </motion.div>

          <h2 className="text-6xl md:text-8xl font-display text-slate-900 leading-none mb-16">
            {headline}
          </h2>

          <div className="relative h-80">
            {services.map((service, index) => {
              const start = index / services.length;
              const end = (index + 1) / services.length;
              const opacity = useTransform(
                scrollYProgress, 
                [
                  index === 0 ? 0 : start, 
                  index === 0 ? 0.05 : start + 0.1, 
                  index === services.length - 1 ? 1 : end - 0.1, 
                  index === services.length - 1 ? 1 : end
                ], 
                [0, 1, 1, 0]
              );
              const x = useTransform(scrollYProgress, [start, start + 0.1, end - 0.1, end], [50, 0, 0, -50]);
              const Icon = iconMap[service.icon] || Target;

              return (
                <motion.div
                  key={index}
                  style={{ opacity, x }}
                  className="absolute inset-0 flex flex-col justify-center"
                >
                  <div className="flex items-center gap-6 mb-6">
                    <div className="p-4 bg-slate-900 text-white skew-slant border-b-4 border-red-600">
                      <Icon size={32} className="-skew-x-[-12deg]" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-red-600 font-mono text-[10px] font-bold uppercase tracking-widest">Module 0{index + 1}</span>
                      <h3 className="text-4xl font-display text-slate-900 italic">{service.title}</h3>
                    </div>
                  </div>
                  <p className="text-lg text-slate-600 font-bold leading-relaxed max-w-md border-l-2 border-slate-200 pl-6">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Right Side: Visuals */}
        <div className="w-full md:w-1/2 h-1/2 md:h-full relative bg-slate-950">
          {services.map((service, index) => {
            const start = index / services.length;
            const end = (index + 1) / services.length;
            const opacity = useTransform(
              scrollYProgress, 
              [
                index === 0 ? 0 : start, 
                index === 0 ? 0.05 : start + 0.1, 
                index === services.length - 1 ? 1 : end - 0.1, 
                index === services.length - 1 ? 1 : end
              ], 
              [0, 1, 1, 0]
            );
            const scale = useTransform(scrollYProgress, [start, end], [1.2, 1]);
            const filter = useTransform(scrollYProgress, [start, start + 0.1, end - 0.1, end], ["grayscale(100%)", "grayscale(0%)", "grayscale(0%)", "grayscale(100%)"]);

            return (
              <motion.div
                key={index}
                style={{ opacity, scale, filter }}
                className="absolute inset-0"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover contrast-125 brightness-75"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-50 via-transparent to-transparent md:block hidden opacity-40" />
                
                {/* Technical Overlay */}
                <div className="absolute top-12 right-12 text-right">
                  <span className="block text-white font-mono text-[10px] font-bold uppercase tracking-[0.3em] opacity-40">Data Stream 0{index + 1}</span>
                  <div className="w-24 h-[1px] bg-red-600 ml-auto mt-2" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
      
      {/* Spacer to allow scrolling - now with a subtle technical line to fill the "blankness" */}
      <div className="h-[300vh] relative">
        <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-slate-200 via-red-600/20 to-slate-200 hidden md:block" />
        <div className="absolute left-12 top-0 bottom-0 w-[1px] bg-slate-100 hidden md:block" />
        <div className="absolute right-12 top-0 bottom-0 w-[1px] bg-slate-100 hidden md:block" />
      </div>
    </section>
  );
};

Builder.registerComponent(Services, {
  name: 'Services',
  inputs: [
    { name: 'headline', type: 'string', defaultValue: 'ELITE TRAINING PROGRAMS' },
    {
      name: 'services',
      type: 'list',
      subFields: [
        { name: 'title', type: 'string' },
        { name: 'description', type: 'longText' },
        { name: 'icon', type: 'string', defaultValue: 'Target' },
        { name: 'image', type: 'string' },
      ],
    },
  ],
});
