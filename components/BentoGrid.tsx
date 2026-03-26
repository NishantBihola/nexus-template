'use client';

import { motion } from 'motion/react';
import { Sparkles, Zap, Shield, Globe, Users, Coins } from 'lucide-react';
import Image from 'next/image';

const features = [
  {
    title: 'Global Community',
    description: 'Connect with millions of users worldwide in real-time.',
    icon: <Globe className="w-6 h-6 text-blue-400" />,
    colSpan: 'md:col-span-2 lg:col-span-2',
    rowSpan: 'row-span-1',
    image: 'https://picsum.photos/seed/community/800/400?blur=2',
  },
  {
    title: 'Lightning Fast',
    description: 'Built on the fastest L2s for instant transactions.',
    icon: <Zap className="w-6 h-6 text-yellow-400" />,
    colSpan: 'md:col-span-1 lg:col-span-1',
    rowSpan: 'row-span-1',
    image: 'https://picsum.photos/seed/fast/400/400?blur=2',
  },
  {
    title: 'Bank-grade Security',
    description: 'Your assets are protected by industry-leading security protocols.',
    icon: <Shield className="w-6 h-6 text-green-400" />,
    colSpan: 'md:col-span-1 lg:col-span-1',
    rowSpan: 'row-span-2',
    image: 'https://picsum.photos/seed/security/400/800?blur=2',
  },
  {
    title: 'Creator Economy',
    description: 'Monetize your content and build your brand seamlessly.',
    icon: <Coins className="w-6 h-6 text-purple-400" />,
    colSpan: 'md:col-span-2 lg:col-span-2',
    rowSpan: 'row-span-1',
    image: 'https://picsum.photos/seed/creator/800/400?blur=2',
  },
];

export default function BentoGrid() {
  return (
    <section id="ecosystem" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6"
          >
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-medium text-white/80">
              The Ecosystem
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-display font-bold leading-tight mb-6"
          >
            Everything you need to <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              scale your vision.
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-white/60 max-w-2xl"
          >
            Nexus provides a comprehensive suite of tools designed to help you build, grow, and monetize your community onchain.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 auto-rows-[300px]">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={`relative group rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl p-8 flex flex-col justify-end ${feature.colSpan} ${feature.rowSpan}`}
            >
              <Image
                src={feature.image}
                alt={feature.title}
                fill
                className="object-cover opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/50 to-transparent" />
              
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center mb-6 group-hover:-translate-y-2 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-display font-bold mb-3 text-white">
                  {feature.title}
                </h3>
                <p className="text-white/60 font-medium leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
