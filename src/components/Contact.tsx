import React from 'react';
import { motion } from 'motion/react';
import { Builder } from '@builder.io/react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

interface ContactProps {
  title?: string;
  phone?: string;
  location?: string;
  email?: string;
}

export const Contact = ({
  title = 'READY TO GET CAGE RAISED?',
  phone = '413-285-4219',
  location = 'Belchertown, Massachusetts',
  email = 'training@cageraised.com',
}: ContactProps) => {
  return (
    <section id="contact" className="py-32 px-6 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-cage-grid opacity-[0.03] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-1 bg-red-600" />
              <span className="text-red-600 font-mono text-xs font-bold tracking-widest uppercase">Transmission</span>
            </div>
            
            <h2 className="text-6xl md:text-9xl font-display text-slate-900 leading-[0.85] mb-12">
              {title}
            </h2>
            
            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-16 h-16 bg-slate-900 text-white skew-slant flex items-center justify-center group-hover:bg-red-600 transition-all duration-300 border-b-4 border-red-900">
                  <Phone size={28} className="-skew-x-[-12deg]" />
                </div>
                <div>
                  <span className="block text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest mb-1">Comm Link</span>
                  <span className="text-3xl font-display text-slate-900 italic tracking-tight">{phone}</span>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-16 h-16 bg-slate-900 text-white skew-slant flex items-center justify-center group-hover:bg-red-600 transition-all duration-300 border-b-4 border-red-900">
                  <MapPin size={28} className="-skew-x-[-12deg]" />
                </div>
                <div>
                  <span className="block text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest mb-1">Base Ops</span>
                  <span className="text-3xl font-display text-slate-900 italic tracking-tight">{location}</span>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-slate-900 p-12 rounded-none skew-slant border-r-8 border-red-600 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-cage-grid opacity-10 pointer-events-none" />
            
            <form className="space-y-6 relative z-10 -skew-x-[-12deg]" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-mono font-bold text-white/40 uppercase tracking-widest">Athlete Name</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-none px-4 py-4 focus:outline-none focus:border-red-600 transition-all font-bold text-white" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-mono font-bold text-white/40 uppercase tracking-widest">Contact Signal</label>
                  <input type="tel" className="w-full bg-white/5 border border-white/10 rounded-none px-4 py-4 focus:outline-none focus:border-red-600 transition-all font-bold text-white" placeholder="(413) 000-0000" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-mono font-bold text-white/40 uppercase tracking-widest">Training Protocol</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-none px-4 py-4 focus:outline-none focus:border-red-600 transition-all font-bold text-white appearance-none">
                  <option className="bg-slate-900">Hitting</option>
                  <option className="bg-slate-900">Pitching</option>
                  <option className="bg-slate-900">Fielding</option>
                  <option className="bg-slate-900">Fundamentals</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-mono font-bold text-white/40 uppercase tracking-widest">Mission Brief</label>
                <textarea className="w-full bg-white/5 border border-white/10 rounded-none px-4 py-4 focus:outline-none focus:border-red-600 transition-all font-bold text-white h-32 resize-none" placeholder="Target goals..." />
              </div>

              <button className="w-full bg-red-600 text-white py-6 rounded-none font-display text-2xl italic uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-white hover:text-red-600 transition-all border-b-8 border-red-900">
                Initiate Protocol <Send size={24} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

Builder.registerComponent(Contact, {
  name: 'Contact',
  inputs: [
    { name: 'title', type: 'string', defaultValue: 'READY TO GET CAGE RAISED?' },
    { name: 'phone', type: 'string', defaultValue: '413-285-4219' },
    { name: 'location', type: 'string', defaultValue: 'Belchertown, Massachusetts' },
    { name: 'email', type: 'string', defaultValue: 'training@cageraised.com' },
  ],
});
