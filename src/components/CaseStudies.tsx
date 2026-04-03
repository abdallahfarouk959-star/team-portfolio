import { motion } from 'motion/react';
import { ArrowUpRight, Server, Layout, Smartphone, Cloud } from 'lucide-react';

const caseStudies = [
  {
    title: "NexaStream: Optimizing Real-Time Data Throughput",
    problem: "The client faced 40% user churn due to legacy infrastructure latency and an unintuitive mobile UI.",
    solution: "We re-architected the backend into a microservices pattern and deployed a native Flutter application to unify the cross-platform experience.",
    impact: "99.9% uptime achieved and a 150% increase in user retention within the first quarter.",
    stack: {
      backend: ["Node.js", "Go", "PostgreSQL"],
      frontend: ["React", "TypeScript"],
      mobile: ["Flutter", "Dart"],
      infra: ["AWS", "Kubernetes", "Terraform"]
    },
    image: "https://picsum.photos/seed/tech1/800/600"
  },
  {
    title: "QuantumPay: Scaling Fintech Infrastructure",
    problem: "Transaction processing bottlenecks during peak hours led to significant revenue loss and customer frustration.",
    solution: "Implemented a distributed event-driven architecture using Kafka and optimized database indexing for high-concurrency writes.",
    impact: "Reduced processing latency by 85% and handled 10x peak load without performance degradation.",
    stack: {
      backend: ["Java", "Spring Boot", "Kafka"],
      frontend: ["Next.js", "Tailwind"],
      mobile: ["Swift", "Kotlin"],
      infra: ["GCP", "Docker", "Redis"]
    },
    image: "https://picsum.photos/seed/tech2/800/600"
  }
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-32 px-6 bg-white/[0.01]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Proven Track Record.</h2>
            <p className="text-gray-400 text-lg">
              Demonstrating excellence through a logic-first narrative and data-driven results.
            </p>
          </div>
          <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">
            Selected Works / 2024-2025
          </div>
        </div>

        <div className="grid gap-20">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-12 items-start"
            >
              <div className="order-2 lg:order-1">
                <h3 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3">
                  {study.title}
                  <ArrowUpRight className="w-6 h-6 text-brand-primary opacity-50" />
                </h3>
                
                <div className="space-y-8">
                  <div>
                    <h4 className="text-xs font-mono text-brand-primary uppercase tracking-widest mb-3">The Problem</h4>
                    <p className="text-gray-300 leading-relaxed">{study.problem}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-xs font-mono text-brand-primary uppercase tracking-widest mb-3">The Solution</h4>
                    <p className="text-gray-300 leading-relaxed">{study.solution}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-6 pt-4">
                    <div className="flex gap-3">
                      <Server className="w-5 h-5 text-gray-500 shrink-0" />
                      <div>
                        <div className="text-[10px] font-mono text-gray-500 uppercase mb-1">Backend</div>
                        <div className="text-xs text-white">{study.stack.backend.join(", ")}</div>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <Layout className="w-5 h-5 text-gray-500 shrink-0" />
                      <div>
                        <div className="text-[10px] font-mono text-gray-500 uppercase mb-1">Frontend</div>
                        <div className="text-xs text-white">{study.stack.frontend.join(", ")}</div>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <Smartphone className="w-5 h-5 text-gray-500 shrink-0" />
                      <div>
                        <div className="text-[10px] font-mono text-gray-500 uppercase mb-1">Mobile</div>
                        <div className="text-xs text-white">{study.stack.mobile.join(", ")}</div>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <Cloud className="w-5 h-5 text-gray-500 shrink-0" />
                      <div>
                        <div className="text-[10px] font-mono text-gray-500 uppercase mb-1">Infrastructure</div>
                        <div className="text-xs text-white">{study.stack.infra.join(", ")}</div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-white/5">
                    <div className="inline-block px-4 py-2 rounded bg-brand-primary/10 border border-brand-primary/20 text-brand-primary font-bold text-sm">
                      Impact: {study.impact}
                    </div>
                  </div>
                </div>
              </div>

              <div className="order-1 lg:order-2 glass-card aspect-video relative group overflow-hidden">
                <img 
                  src={study.image} 
                  alt={study.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-linear-to-t from-bg-dark/80 to-transparent opacity-60" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
