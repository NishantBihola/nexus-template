import { Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#050505] pt-32 pb-12 border-t border-white/10 relative overflow-hidden">
      <div className="absolute inset-x-0 bottom-0 h-[500px] bg-gradient-to-t from-blue-600/10 via-purple-600/5 to-transparent blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 group mb-6 w-fit">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="font-display font-bold text-2xl tracking-tight">
                NEXUS
              </span>
            </Link>
            <p className="text-white/60 text-lg max-w-sm mb-8 leading-relaxed">
              Building the largest onchain community, driving the consumer crypto revolution forward.
            </p>
            <div className="flex gap-4">
              {['Twitter', 'Discord', 'Telegram', 'GitHub'].map((social) => (
                <Link
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all duration-300"
                >
                  <span className="sr-only">{social}</span>
                  <div className="w-4 h-4 bg-current rounded-sm" />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-6 text-white">Ecosystem</h4>
            <ul className="flex flex-col gap-4">
              {['Marketplace', 'Launchpad', 'Governance', 'Tokenomics'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-white/60 hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-6 text-white">Resources</h4>
            <ul className="flex flex-col gap-4">
              {['Documentation', 'Whitepaper', 'Blog', 'Careers'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-white/60 hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 text-sm text-white/40">
          <p>© {new Date().getFullYear()} Nexus Inc. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
