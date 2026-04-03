import { motion } from "motion/react";
import { Github, Linkedin, Twitter } from "lucide-react";
// استيراد صور أعضاء الفريق
import adhamAshraf from "../assets/Adham Ashraf.jpeg";
import ahmedMostafa from "../assets/Ahmed Mostafa.jpeg";
import gHanem from "../assets/GHAnem.jpeg"; // تأكد إنها .jpeg مش .jpg
import mee from "../assets/MEE.png"; // دي .png
import omarFathy from "../assets/Omar Fathy.jpeg";
import omarMosafa from "../assets/Omar Mosafa.jpeg";
import sasa from "../assets/SASA.png"; // دي .png
const team = [
  {
    name: "Abdallah M Farouk",
    role: "Front-End Lead & UI/UX Strategist",
    specialty: "Distributed Systems & Kubernetes",
    image: mee,
    social: {
      linkedin: "https://www.linkedin.com/in/abdallah-m-farouk-8959b1300/",
      github: "https://github.com/abdallahfarouk959-star",
    },
  },
  {
    name: "Omar Fathy",
    role: "Back-End Lead & API Architect",
    specialty: "React Ecosystem & Node.js Optimization",
    image: omarFathy,
    social: {
      linkedin: "https://www.linkedin.com/in/omar-mohamed-61194b361/",
      github: "https://github.com/omar-fathy",
    },
  },
  {
    name: "Omar Mostafa",
    role: "Security Lead",
    specialty: "Native Performance & Flutter Systems",
    image: omarMosafa,
    social: {
      linkedin: "https://www.linkedin.com/in/omar-mostafa-61975b35a/",
      github: "https://github.com/omar-fathy",
    },
  },
  {
    name: "Ahmed Mostafa",
    role: "Artificial Intelligence Lead & Graphic Designer",
    specialty: "CI/CD Automation & Zero-Trust Security",
    image: ahmedMostafa,
    social: {
      linkedin: "https://www.linkedin.com/in/ahmed-mostafa-a96486380/",
      github: "https://github.com/ahmed-mostafa",
    },
  },
  {
    name: "Mostafa Khaled",
    role: "DevOps & Security Lead",
    image: sasa,
    social: {
      linkedin: "https://www.linkedin.com/in/mostafa-khaled-020341388/",
      github: "https://github.com/mostafa-khaled",
    },
  },
  {
    name: "Adham Ashraf",
    role: "Artificial Intelligence Lead & Data Analyst",
    image: adhamAshraf,
    social: {
      linkedin: "https://www.linkedin.com/in/adham0a/",
      github: "https://github.com/adham-ashraf",
    },
  },
  {
    name: "Mohamed Ghanem",
    role: "DevOps & Security Lead",
    specialty: "CI/CD Automation & Zero-Trust Security",
    image: gHanem,
    social: {
      linkedin: "https://www.linkedin.com/in/mohamed-ghanem-051010348/",
      github: "https://github.com/mohamed-ghanem",
    },
  },
];

export default function Team() {
  return (
    <section id="team" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Meet Our Team</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A collective of strategic thinkers and high-performance engineers
            dedicated to technical excellence and business-driven outcomes.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="glass-card p-4 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-500">
                <div className="aspect-square rounded-lg overflow-hidden mb-6 relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6 gap-4">
                    {/* رابط لينكد إن */}
                    <a
                      href={member.social?.linkedin || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-blue-600 transition-colors"
                    >
                      <Linkedin className="w-4 h-4 text-white" />
                    </a>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white mb-1">
                  {member.name}
                </h3>
                <div className="text-xs font-mono text-brand-primary uppercase tracking-widest mb-3">
                  {member.role}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
