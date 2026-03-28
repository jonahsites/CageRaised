import React from 'react';
import { motion } from 'motion/react';
import { Builder } from '@builder.io/react';
import { Star, Quote } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
}

interface TestimonialsProps {
  headline?: string;
  testimonials?: Testimonial[];
}

export const Testimonials = ({
  headline = 'WHAT OUR ATHLETES SAY',
  testimonials = [
    {
      name: 'Jason R.',
      role: 'High School Pitcher',
      content: 'Coach Mike transformed my mechanics in just 4 sessions. My velocity is up 5mph and my command has never been better.',
      rating: 5,
    },
    {
      name: 'Sarah M.',
      role: 'Parent',
      content: 'The personalized attention my son gets at Cage Raised is unmatched. He loves the sessions and his confidence has skyrocketed.',
      rating: 5,
    },
    {
      name: 'David L.',
      role: 'College Prospect',
      content: 'Elite training with a focus on the mental game. Mike knows exactly how to push you to reach your full potential.',
      rating: 5,
    },
  ],
}: TestimonialsProps) => {
  return (
    <section className="py-32 px-6 bg-slate-900 overflow-hidden relative">
      {/* Background Accents */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-red-600 rounded-full blur-[120px]" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-red-600 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-red-500 font-mono text-xs font-bold tracking-[0.5em] uppercase mb-4 block"
          >
            Verified Intel
          </motion.span>
          <h2 className="text-6xl md:text-9xl font-display text-white leading-none">
            {headline}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.2 }}
              className="bg-white/5 backdrop-blur-xl border-l-4 border-red-600 p-10 rounded-none skew-slant relative group overflow-hidden"
            >
              <div className="absolute inset-0 bg-cage-grid opacity-10 pointer-events-none" />
              <Quote className="absolute top-6 right-6 text-red-600/20 group-hover:text-red-600/40 transition-colors -skew-x-[-12deg]" size={48} />
              
              <div className="flex gap-1 mb-6 -skew-x-[-12deg]">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={14} className="fill-red-600 text-red-600" />
                ))}
              </div>

              <p className="text-white/80 text-lg font-bold italic leading-relaxed mb-8 -skew-x-[-12deg]">
                "{t.content}"
              </p>

              <div className="-skew-x-[-12deg]">
                <span className="block text-white font-display text-2xl italic tracking-tight">{t.name}</span>
                <span className="text-red-500 font-mono text-[10px] font-bold uppercase tracking-widest">{t.role}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

Builder.registerComponent(Testimonials, {
  name: 'Testimonials',
  inputs: [
    { name: 'headline', type: 'string', defaultValue: 'WHAT OUR ATHLETES SAY' },
    {
      name: 'testimonials',
      type: 'list',
      subFields: [
        { name: 'name', type: 'string' },
        { name: 'role', type: 'string' },
        { name: 'content', type: 'longText' },
        { name: 'rating', type: 'number', defaultValue: 5 },
      ],
    },
  ],
});
