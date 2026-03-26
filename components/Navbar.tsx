'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Ecosystem', href: '#ecosystem' },
    { name: 'Community', href: '#community' },
    { name: 'About', href: '#about' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-4' : 'py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className={`flex items-center justify-between rounded-full px-6 py-3 transition-all duration-500 ${
            isScrolled
              ? 'bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl'
              : 'bg-transparent'
          }`}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <span className="font-display font-bold text-xl tracking-tight">
              NEXUS
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-white/70 hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="#join"
              className="text-sm font-medium text-white/70 hover:text-white transition-colors"
            >
              Log in
            </Link>
            <Link
              href="#join"
              className="px-5 py-2.5 rounded-full bg-white text-black text-sm font-semibold hover:bg-white/90 transition-colors hover:scale-105 active:scale-95 duration-200"
            >
              Join the Waitlist
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white/70 hover:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </motion.div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-6 right-6 mt-2 p-6 rounded-3xl bg-[#111] border border-white/10 shadow-2xl md:hidden flex flex-col gap-6 backdrop-blur-xl"
          >
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-white/80 hover:text-white"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            <div className="h-px w-full bg-white/10" />
            <div className="flex flex-col gap-4">
              <Link
                href="#join"
                className="text-center py-3 rounded-full border border-white/20 text-white font-medium"
              >
                Log in
              </Link>
              <Link
                href="#join"
                className="text-center py-3 rounded-full bg-white text-black font-semibold"
              >
                Join the Waitlist
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
