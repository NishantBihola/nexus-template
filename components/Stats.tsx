'use client';

import { motion } from 'motion/react';
import { Users, Activity, Wallet } from 'lucide-react';

const stats = [
  {
    label: 'Active Users',
    value: '2.5M+',
    icon: <Users className="w-8 h-8 text-blue-400" />,
    description: 'Growing community members',
  },
  {
    label: 'Total Volume',
    value: '$1.2B',
    icon: <Activity className="w-8 h-8 text-purple-400" />,
    description: 'Traded across the ecosystem',
  },
  {
    label: 'Wallets Connected',
    value: '500K+',
    icon: <Wallet className="w-8 h-8 text-pink-400" />,
    description: 'Securely interacting daily',
  },
];

export default function Stats() {
  return (
    <section id="community" className="py-32 relative border-y border-white/5 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-20 h-20 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-300">
                {stat.icon}
              </div>
              <h3 className="text-5xl md:text-6xl font-display font-bold text-white mb-4 tracking-tight">
                {stat.value}
              </h3>
              <p className="text-xl font-medium text-white/80 mb-2">
                {stat.label}
              </p>
              <p className="text-white/50">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
