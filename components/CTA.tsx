'use client';

import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section id="join" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-blue-900/10 to-[#050505]" />
        <motion.div
          animate={{
            x: [0, 150, 0],
            y: [0, 100, 0],
            scale: [1, 1.4, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute -top-1/4 -left-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] mix-blend-screen"
        />
        <motion.div
          animate={{
            x: [0, -150, 0],
            y: [0, -100, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute -bottom-1/4 -right-1/4 w-[700px] h-[700px] bg-purple-600/10 rounded-full blur-[150px] mix-blend-screen"
        />
      </div>
      
      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <h2 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-8">
            Ready to join the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              revolution?
            </span>
          </h2>
          <p className="text-xl text-white/60 mb-12 max-w-2xl leading-relaxed">
            Don&apos;t miss out on the next big thing in consumer crypto. Connect your wallet and start building your legacy today.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-6 w-full max-w-md mx-auto">
            <button className="w-full px-8 py-5 rounded-full bg-white text-black font-bold text-lg hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 group shadow-[0_0_40px_rgba(255,255,255,0.3)]">
              Connect Wallet
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          
          <p className="mt-8 text-sm text-white/40 font-medium">
            By connecting, you agree to our Terms of Service and Privacy Policy.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
