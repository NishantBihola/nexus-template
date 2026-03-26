'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

const logos = [
  'Solana',
  'Ethereum',
  'Polygon',
  'Arbitrum',
  'Optimism',
  'Base',
  'ZkSync',
  'Starknet',
];

export default function Marquee() {
  return (
    <section className="py-20 border-y border-white/5 bg-white/[0.02] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-10 text-center">
        <p className="text-sm font-medium text-white/40 uppercase tracking-widest">
          Trusted by the best in Web3
        </p>
      </div>

      <div className="relative flex overflow-x-hidden group">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#050505] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-10" />

        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="flex items-center gap-16 md:gap-24 whitespace-nowrap"
        >
          {[...logos, ...logos, ...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex items-center gap-4 opacity-50 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
            >
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <Image
                  src={`https://picsum.photos/seed/${logo}/40/40`}
                  alt={logo}
                  width={40}
                  height={40}
                  className="rounded-full"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="text-xl md:text-2xl font-display font-bold text-white">
                {logo}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
