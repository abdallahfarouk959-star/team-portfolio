import { motion } from 'motion/react';
import { Mail, MessageSquare, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="glass-card p-12 md:p-20 relative overflow-hidden">
          {/* Background accent */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-primary/5 -skew-x-12 translate-x-1/4 pointer-events-none" />
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold mb-8">
                Ready to Build<br />
                <span className="text-brand-primary">the Future?</span>
              </h2>
              <p className="text-gray-400 text-lg mb-12 leading-relaxed">
                Let’s discuss the technical requirements of your next breakthrough. 
                Whether you are scaling an existing platform or launching a disruptive MVP, 
                our team provides the engineering firepower to bring your vision to life.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-white">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-brand-primary" />
                  </div>
                  <span className="font-mono">eng@arch-scale.tech</span>
                </div>
                <div className="flex items-center gap-4 text-white">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-brand-primary" />
                  </div>
                  <span className="font-mono">Schedule a Technical Audit</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Full Name</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-primary transition-colors text-white" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Email Address</label>
                  <input type="email" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-primary transition-colors text-white" placeholder="john@company.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Project Scope</label>
                <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-primary transition-colors text-white resize-none" placeholder="Briefly describe your technical requirements..." />
              </div>
              <button className="w-full py-4 rounded-lg bg-white text-black font-bold flex items-center justify-center gap-2 hover:bg-gray-200 transition-all group">
                Consult Our Engineers
                <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
