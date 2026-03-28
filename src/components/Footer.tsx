import React from 'react';
import { Builder } from '@builder.io/react';

interface FooterProps {
  companyName?: string;
  tagline?: string;
  logoUrl?: string;
}

export const Footer = ({
  companyName = 'CAGE RAISED BASEBALL TRAINING',
  tagline = 'TRAIN HARD. PLAY CONFIDENT.',
  logoUrl = 'https://image2url.com/r2/default/images/1774729235190-a0f74ad9-8905-4e58-b824-e95158bb9a7b.png',
}: FooterProps) => {
  return (
    <footer className="bg-slate-950 py-20 px-6 border-t border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-cage-grid opacity-10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-16">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-4 mb-6">
              <div className="h-24 w-auto">
                <img 
                  src={logoUrl} 
                  alt={companyName} 
                  className="h-full w-auto object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <p className="text-red-600 font-mono font-bold tracking-[0.4em] uppercase text-xs">{tagline}</p>
          </div>

          <div className="flex gap-16">
            <div className="flex flex-col gap-4">
              <span className="text-white/40 font-mono font-bold uppercase tracking-widest text-[10px]">Navigation</span>
              <a href="#" className="text-white hover:text-red-600 transition-colors font-display italic text-lg uppercase tracking-tight">Home</a>
              <a href="#training" className="text-white hover:text-red-600 transition-colors font-display italic text-lg uppercase tracking-tight">Training</a>
              <a href="#about" className="text-white hover:text-red-600 transition-colors font-display italic text-lg uppercase tracking-tight">About</a>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-white/40 font-mono font-bold uppercase tracking-widest text-[10px]">Social</span>
              <a href="#" className="text-white hover:text-red-600 transition-colors font-display italic text-lg uppercase tracking-tight">Instagram</a>
              <a href="#" className="text-white hover:text-red-600 transition-colors font-display italic text-lg uppercase tracking-tight">Facebook</a>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <span className="text-white/20 font-mono text-[10px] font-bold uppercase tracking-widest">
            © {new Date().getFullYear()} {companyName} // ALL SYSTEMS GO
          </span>
          <div className="flex gap-8">
            <a href="#" className="text-white/20 hover:text-white transition-colors font-mono text-[10px] font-bold uppercase tracking-widest">Privacy</a>
            <a href="#" className="text-white/20 hover:text-white transition-colors font-mono text-[10px] font-bold uppercase tracking-widest">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

Builder.registerComponent(Footer, {
  name: 'Footer',
  inputs: [
    { name: 'companyName', type: 'string', defaultValue: 'CAGE RAISED BASEBALL TRAINING' },
    { name: 'tagline', type: 'string', defaultValue: 'TRAIN HARD. PLAY CONFIDENT.' },
    { name: 'logoUrl', type: 'string', defaultValue: 'https://image2url.com/r2/default/images/1774729235190-a0f74ad9-8905-4e58-b824-e95158bb9a7b.png' },
  ],
});
