import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Builder } from '@builder.io/react';

interface NavbarProps {
  logoText?: string;
  logoUrl?: string;
  navItems?: { label: string; href: string }[];
}

export const Navbar = ({
  logoText = 'CAGE RAISED',
  logoUrl = 'https://image2url.com/r2/default/images/1774729235190-a0f74ad9-8905-4e58-b824-e95158bb9a7b.png',
  navItems = [
    { label: 'Training', href: '#training' },
    { label: 'About', href: '#about' },
    { label: 'Results', href: '#results' },
    { label: 'Contact', href: '#contact' },
  ],
}: NavbarProps) => {
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.8)']
  );
  const backdropBlur = useTransform(scrollY, [0, 100], ['blur(0px)', 'blur(12px)']);
  const borderBottom = useTransform(
    scrollY,
    [0, 100],
    ['1px solid rgba(255, 255, 255, 0)', '1px solid rgba(229, 231, 235, 0.5)']
  );

  return (
    <motion.nav
      style={{ backgroundColor, backdropBlur, borderBottom }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between transition-all duration-300"
    >
      <div className="flex items-center gap-4">
        <div className="h-16 w-auto">
          <img 
            src={logoUrl} 
            alt={logoText} 
            className="h-full w-auto object-contain"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>

      <div className="hidden md:flex items-center gap-6">
        {navItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="text-xs font-mono font-bold uppercase tracking-widest text-slate-600 hover:text-red-600 transition-colors"
          >
            [{item.label}]
          </a>
        ))}
        <a
          href="#contact"
          className="bg-slate-900 text-white px-8 py-3 font-display italic uppercase tracking-widest hover:bg-red-600 transition-all skew-slant border-b-4 border-red-800"
        >
          <span className="-skew-x-[-12deg] block">Book Session</span>
        </a>
      </div>
    </motion.nav>
  );
};

Builder.registerComponent(Navbar, {
  name: 'Navbar',
  inputs: [
    { name: 'logoText', type: 'string', defaultValue: 'CAGE RAISED' },
    { name: 'logoUrl', type: 'string', defaultValue: 'https://image2url.com/r2/default/images/1774729235190-a0f74ad9-8905-4e58-b824-e95158bb9a7b.png' },
    {
      name: 'navItems',
      type: 'list',
      subFields: [
        { name: 'label', type: 'string' },
        { name: 'href', type: 'string' },
      ],
    },
  ],
});
