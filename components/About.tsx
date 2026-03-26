'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { gsap } from 'gsap';
import Image from 'next/image';

export default function About() {
  const imageRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const image = imageRef.current;
    const container = containerRef.current;

    if (!image || !container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = container.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;

      gsap.to(image, {
        rotateX: -y * 20,
        rotateY: x * 20,
        x: x * 30,
        y: y * 30,
        duration: 0.5,
        ease: 'power2.out',
        transformPerspective: 1000,
      });
    };

    const handleMouseLeave = () => {
      gsap.to(image, {
        rotateX: 0,
        rotateY: 0,
        x: 0,
        y: 0,
        duration: 0.8,
        ease: 'elastic.out(1, 0.5)',
      });
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section id="about" className="py-32 relative overflow-hidden bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          {/* Interactive Image Container */}
          <div 
            ref={containerRef}
            className="relative group cursor-pointer"
          >
            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-[3rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div 
              ref={imageRef}
              className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-3xl shadow-2xl"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <Image
                src="https://picsum.photos/seed/about-nexus/1200/1500"
                alt="Nexus Ecosystem"
                fill
                className="object-cover scale-110 group-hover:scale-100 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60" />
              
              <div className="absolute bottom-10 left-10 right-10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="p-6 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20"
                >
                  <h4 className="text-white font-bold text-xl mb-2">The Nexus Vision</h4>
                  <p className="text-white/60 text-sm leading-relaxed">
                    We&apos;re building more than just a platform; we&apos;re creating a digital home for the next billion onchain citizens.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-blue-400 font-mono text-sm tracking-widest uppercase mb-4 block">
                01 // Our Mission
              </span>
              <h2 className="text-5xl md:text-6xl font-display font-bold leading-tight mb-6">
                Redefining the <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Digital Frontier.
                </span>
              </h2>
              <p className="text-xl text-white/60 leading-relaxed max-w-xl">
                Nexus is a decentralized ecosystem designed to bridge the gap between complex blockchain technology and everyday human interaction. We focus on design, speed, and community.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 gap-8 pt-4">
              {[
                { label: 'Decentralized', value: '100%' },
                { label: 'Uptime', value: '99.9%' },
                { label: 'Community', value: '50k+' },
                { label: 'Transactions', value: '1M+' },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex flex-col"
                >
                  <span className="text-3xl font-display font-bold text-white mb-1">
                    {stat.value}
                  </span>
                  <span className="text-white/40 text-sm uppercase tracking-wider">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
