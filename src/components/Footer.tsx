import { Cpu } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-20 px-6 border-t border-white/5">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-white/5 text-[10px] font-mono text-gray-600 uppercase tracking-widest">
          <div>© 2026 AO Nexus. ALL RIGHTS RESERVED.</div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
    </footer>
  );
}
