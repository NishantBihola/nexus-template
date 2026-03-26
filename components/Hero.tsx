'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

    tl.fromTo(badgeRef.current, 
      { opacity: 0, y: 20, filter: 'blur(10px)' }, 
      { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1, delay: 0.2 }
    )
    .fromTo(titleRef.current, 
      { opacity: 0, y: 60, skewY: 5 }, 
      { opacity: 1, y: 0, skewY: 0, duration: 1.5 }, 
      '-=0.8'
    )
    .fromTo(descRef.current, 
      { opacity: 0, y: 30 }, 
      { opacity: 1, y: 0, duration: 1 }, 
      '-=1.2'
    )
    .fromTo(buttonsRef.current, 
      { opacity: 0, y: 20 }, 
      { opacity: 1, y: 0, duration: 0.8 }, 
      '-=0.8'
    )
    .fromTo(socialRef.current, 
      { opacity: 0, scale: 0.9 }, 
      { opacity: 1, scale: 1, duration: 0.8 }, 
      '-=0.6'
    )
    .fromTo(visualRef.current,
      { opacity: 0, x: 100, rotate: 10 },
      { opacity: 1, x: 0, rotate: 0, duration: 1.5 },
      '-=1.5'
    );

    // Floating animation for visual element
    gsap.to(visualRef.current, {
      y: 20,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut'
    });

    // Parallax effect for background blobs
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const xPos = (clientX / window.innerWidth - 0.5) * 60;
      const yPos = (clientY / window.innerHeight - 0.5) * 60;

      gsap.to('.bg-blob', {
        x: (i) => xPos * (i + 1) * 0.4,
        y: (i) => yPos * (i + 1) * 0.4,
        duration: 1.5,
        ease: 'power2.out',
      });
    };

    // Magnetic effect for buttons
    const buttons = buttonsRef.current?.querySelectorAll('button');
    buttons?.forEach(btn => {
      btn.addEventListener('mousemove', (e) => {
        const { left, top, width, height } = btn.getBoundingClientRect();
        const x = (e.clientX - left) / width - 0.5;
        const y = (e.clientY - top) / height - 0.5;
        
        gsap.to(btn, {
          x: x * 20,
          y: y * 20,
          duration: 0.3,
          ease: 'power2.out'
        });
      });
      
      btn.addEventListener('mouseleave', () => {
        gsap.to(btn, {
          x: 0,
          y: 0,
          duration: 0.5,
          ease: 'elastic.out(1, 0.3)'
        });
      });
    });

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20">
      {/* Background Gradients */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div
          className="bg-blob absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] mix-blend-screen"
        />
        <div
          className="bg-blob absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[150px] mix-blend-screen"
        />
        <div
          className="bg-blob absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-pink-600/10 rounded-full blur-[100px] mix-blend-screen"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full grid lg:grid-cols-2 gap-16 items-center">
        {/* Text Content */}
        <div className="flex flex-col gap-8 max-w-2xl">
          <div ref={badgeRef} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md w-fit">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium text-white/80">
              The Next Evolution of Community
            </span>
          </div>

          <h1 ref={titleRef} className="text-6xl md:text-7xl lg:text-8xl font-display font-bold leading-[1.1] tracking-tight">
            Build your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              onchain
            </span>{' '}
            empire.
          </h1>

          <p ref={descRef} className="text-lg md:text-xl text-white/60 font-medium max-w-lg leading-relaxed">
            Nexus is the ultimate platform for creators, brands, and communities to launch, scale, and engage in the Web3 ecosystem.
          </p>

          <div ref={buttonsRef} className="flex flex-col sm:flex-row items-center gap-4 pt-4">
            <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-black font-semibold text-lg hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 group">
              Start Building
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-white font-semibold text-lg hover:bg-white/10 transition-all duration-300">
              Read the Docs
            </button>
          </div>

          {/* Social Proof */}
          <div ref={socialRef} className="flex items-center gap-4 pt-8">
            <div className="flex -space-x-4">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="w-12 h-12 rounded-full border-2 border-[#050505] overflow-hidden relative"
                >
                  <Image
                    src={`https://picsum.photos/seed/avatar${i}/100/100`}
                    alt="User avatar"
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ))}
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold">Join 50,000+</span>
              <span className="text-white/50 text-sm font-medium">
                creators already building
              </span>
            </div>
          </div>
        </div>

        {/* Visual Content */}
        <div
          ref={visualRef}
          className="relative w-full aspect-square max-w-lg mx-auto lg:ml-auto"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-[3rem] blur-3xl" />
          <div
            className="relative w-full h-full rounded-[3rem] border border-white/10 bg-white/5 backdrop-blur-2xl overflow-hidden shadow-2xl flex items-center justify-center p-8"
          >
            {/* Abstract 3D-like Shape Placeholder */}
            <div className="w-full h-full rounded-2xl overflow-hidden relative group">
              <Image
                src="https://picsum.photos/seed/nexus3d/800/800?blur=2"
                alt="Abstract 3D Shape"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60" />
              
              {/* Floating UI Card */}
              <motion.div 
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-bold text-sm">Nexus Pass</p>
                      <p className="text-white/60 text-xs">Minting Live</p>
                    </div>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-green-500/20 border border-green-500/30 text-green-400 text-xs font-bold">
                    Active
                  </div>
                </div>
                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: '75%' }}
                    transition={{ delay: 1.5, duration: 1.5, ease: 'easeOut' }}
                    className="h-full bg-gradient-to-r from-blue-400 to-purple-400"
                  />
                </div>
                <div className="flex justify-between mt-2 text-xs text-white/60 font-medium">
                  <span>7,500 / 10,000</span>
                  <span>75% Minted</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
