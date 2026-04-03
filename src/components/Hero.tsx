import { motion } from 'motion/react';
import { ChevronRight, Terminal } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-40 pb-20 px-6 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full -z-10 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-primary/30 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-secondary/30 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-brand-primary mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-primary"></span>
              </span>
              SYSTEM STATUS: OPTIMIZED
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-6 gradient-text">
              Engineering the Architecture of Digital Scale.
            </h1>
            
            <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-xl leading-relaxed">
              We transform complex business challenges into high-performance digital products. 
              From agile startups to enterprise ecosystems, we deliver custom full-stack solutions 
              built on clean code and future-proof logic.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="px-8 py-4 rounded-lg bg-white text-black font-bold flex items-center justify-center gap-2 hover:bg-gray-200 transition-all group">
                Consult Our Engineers
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#case-studies" className="px-8 py-4 rounded-lg bg-white/5 border border-white/10 text-white font-bold flex items-center justify-center gap-2 hover:bg-white/10 transition-all">
                View Case Studies
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="glass-card p-1 bg-white/5">
              <div className="bg-bg-dark rounded-lg overflow-hidden border border-white/5">
                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/5">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                  </div>
                  <div className="text-[10px] font-mono text-gray-500 ml-4">architecture.ts — arch-scale</div>
                </div>
                <div className="p-6 font-mono text-sm leading-relaxed">
                  <div className="text-brand-secondary">import</div> <span className="text-white">{"{ ScalableSystem }"}</span> <div className="text-brand-secondary inline">from</div> <span className="text-brand-primary">"@arch-scale/core"</span>;
                  <br /><br />
                  <span className="text-gray-500">// Initialize high-performance engine</span>
                  <br />
                  <span className="text-brand-secondary">const</span> <span className="text-white">engine</span> = <span className="text-brand-secondary">new</span> <span className="text-brand-primary">ScalableSystem</span>({"{ "}
                  <br />
                  &nbsp;&nbsp;<span className="text-white">architecture</span>: <span className="text-brand-primary">'microservices'</span>,
                  <br />
                  &nbsp;&nbsp;<span className="text-white">velocity</span>: <span className="text-brand-primary">'agile'</span>,
                  <br />
                  &nbsp;&nbsp;<span className="text-white">cleanCode</span>: <span className="text-brand-secondary">true</span>
                  <br />
                  {"}"});
                  <br /><br />
                  <span className="text-white">engine</span>.<span className="text-brand-secondary">deploy</span>().<span className="text-brand-secondary">then</span>(() ={">"} {"{"}
                  <br />
                  &nbsp;&nbsp;<span className="text-white">console</span>.<span className="text-brand-secondary">log</span>(<span className="text-brand-primary">'Scale achieved.'</span>);
                  <br />
                  {"}"});
                </div>
              </div>
            </div>
            
            {/* Floating stats */}
            <div className="absolute -bottom-6 -left-6 glass-card p-4 bg-bg-card/90 backdrop-blur-xl">
              <div className="text-2xl font-bold text-white">99.9%</div>
              <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">System Uptime</div>
            </div>
            <div className="absolute -top-6 -right-6 glass-card p-4 bg-bg-card/90 backdrop-blur-xl">
              <div className="text-2xl font-bold text-brand-primary">150%</div>
              <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Retention Growth</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
