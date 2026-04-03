import { motion } from 'motion/react';
import { ShieldCheck, Zap, Clock } from 'lucide-react';

const features = [
  {
    title: "Precision-Engineered Clean Code",
    description: "We don’t just write software; we architect it. Our codebases are modular, maintainable, and built to scale, ensuring your technical debt stays low while your performance stays high.",
    icon: ShieldCheck,
    color: "text-blue-400"
  },
  {
    title: "True Agile Velocity",
    description: "Our process is built on transparency and rapid iteration. We work in disciplined sprints, providing consistent visibility and ensuring that the product we build today is ready for tomorrow.",
    icon: Zap,
    color: "text-yellow-400"
  },
  {
    title: "Commitment to Deadlines",
    description: "In tech, time-to-market is the ultimate competitive advantage. We leverage a rigorous CI/CD pipeline and proactive project management to ensure every milestone is met.",
    icon: Clock,
    color: "text-green-400"
  }
];

export default function WhyUs() {
  return (
    <section id="why-us" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Beyond Development.<br />
            <span className="text-brand-primary">Engineering Excellence.</span>
          </h2>
          <p className="text-gray-400 text-lg">
            We move beyond "we code" to "we solve." Our pillars of engineering excellence 
            ensure that every line of code serves a strategic business outcome.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 group hover:border-white/20 transition-all"
            >
              <div className={`w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${feature.color}`}>
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
