import { motion } from 'motion/react';
import { Terminal, Code2, Cpu, Database, Globe, Layers } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-bg-dark/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded bg-brand-primary flex items-center justify-center">
            <Cpu className="text-white w-5 h-5" />
          </div>
          <span className="font-mono font-bold text-white tracking-tighter text-xl">AO-Nexus</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#why-us" className="text-sm font-medium hover:text-white transition-colors">Strategy</a>
          <a href="#team" className="text-sm font-medium hover:text-white transition-colors">Team</a>
          <a href="#case-studies" className="text-sm font-medium hover:text-white transition-colors">Case Studies</a>
          <a href="#contact" className="px-5 py-2.5 rounded-full bg-white text-black text-sm font-bold hover:bg-gray-200 transition-all">
            Consult Our Engineers
          </a>
        </div>
      </div>
    </nav>
  );
}
