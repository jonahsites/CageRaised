import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Builder } from '@builder.io/react';

interface AboutProps {
  title?: string;
  content?: string;
  stats?: { label: string; value: string }[];
  image?: string;
}

export const About = ({
  title = 'MEET COACH MIKE DESMITH',
  content = 'With years of experience and a passion for the game, Coach Mike DeSmith provides personalized 1-on-1 instruction that takes your game to the next level. Located in Belchertown, Massachusetts, Cage Raised is more than just a training facility—it\'s where athletes are built.',
  stats = [
    { label: 'Years Experience', value: '15+' },
    { label: 'Athletes Trained', value: '500+' },
    { label: 'Pro Prospects', value: '25+' },
  ],
  image = 'https://images.unsplash.com/photo-1593784991095-a205069470b6?q=80&w=2070&auto=format&fit=crop',
}: AboutProps) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-5, 5]);

  return (
    <section ref={containerRef} className="py-32 px-6 bg-white overflow-hidden relative">
      <div className="absolute inset-0 bg-cage-grid opacity-[0.03] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <motion.div
          style={{ y, rotate }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-red-600 skew-slant -z-10 opacity-10 blur-2xl" />
          <div className="relative aspect-[4/5] skew-slant overflow-hidden shadow-2xl border-4 border-slate-900">
            <img
              src={image}
              alt="Coach Mike"
              className="w-full h-full object-cover grayscale contrast-125 -skew-x-[-12deg] scale-125"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
            <div className="absolute bottom-12 left-12 -skew-x-[-12deg]">
              <span className="text-white font-display text-4xl italic tracking-tighter">COACH MIKE DESMITH</span>
            </div>
          </div>
          
          {/* Floating Badge */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-10 -right-10 bg-red-600 text-white p-10 skew-slant shadow-2xl z-20 border-b-8 border-red-900"
          >
            <div className="-skew-x-[-12deg]">
              <span className="block text-5xl font-display italic leading-none">1-ON-1</span>
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest">Personalized Protocol</span>
            </div>
          </motion.div>
        </motion.div>

        <div className="flex flex-col gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-1 bg-red-600" />
              <span className="text-red-600 font-mono text-xs font-bold tracking-widest uppercase">The Philosophy</span>
            </div>
            
            <h2 className="text-6xl md:text-8xl font-display text-slate-900 leading-[0.9] mb-12">
              {title}
            </h2>
            <p className="text-xl text-slate-600 font-bold leading-relaxed mb-12 border-l-4 border-red-600 pl-8">
              {content}
            </p>
          </motion.div>

          <div className="grid grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col"
              >
                <span className="text-5xl md:text-6xl font-display text-red-600 italic mb-2 leading-none">{stat.value}</span>
                <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">{stat.label}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="p-10 bg-slate-900 rounded-none skew-slant border-r-8 border-red-600 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-cage-grid opacity-10 pointer-events-none" />
            <p className="text-white font-display italic text-2xl -skew-x-[-12deg] relative z-10">
              "WE DON'T JUST TRAIN PLAYERS; WE RAISE THEM TO BE ELITE. EVERY REP COUNTS, EVERY DETAIL MATTERS."
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

Builder.registerComponent(About, {
  name: 'About',
  inputs: [
    { name: 'title', type: 'string', defaultValue: 'MEET COACH MIKE DESMITH' },
    { name: 'content', type: 'longText', defaultValue: 'With years of experience and a passion for the game...' },
    {
      name: 'stats',
      type: 'list',
      subFields: [
        { name: 'label', type: 'string' },
        { name: 'value', type: 'string' },
      ],
    },
    { name: 'image', type: 'string' },
  ],
});
