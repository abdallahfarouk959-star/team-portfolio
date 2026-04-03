import { motion } from 'motion/react';

const brands = [
  'Abdallah Farouk', 'Omar Fathy', 'Omar Mostafa', 'Ahmed Mostafa', 'Mostafa Khaled', 'Omar Wannas', 'Adham Ashraf', 'Mohamed Ghanem'
];

export default function TrustedBy() {
  return (
    <section className="py-12 border-y border-white/5 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-[10px] font-mono text-gray-500 uppercase tracking-[0.3em] mb-8">
          Trusted by Industry Leaders
        </p>
        
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
          {brands.map((brand) => (
            <div key={brand} className="text-xl font-mono font-bold tracking-tighter text-white">
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
