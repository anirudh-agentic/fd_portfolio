"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const illustrations = Array.from({ length: 19 }, (_, i) => `/images/illus${i + 1}.png`);

export function IllustrationsSection() {
  return (
    <section className="w-full bg-background py-32">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="mb-24 md:w-1/2">
          <h2 className="font-serif text-5xl md:text-7xl text-foreground mb-6 text-balance">
            Digital Fashion &<br />Illustrations
          </h2>
          <p className="font-sans text-sm md:text-base text-foreground/80 leading-relaxed max-w-sm">
            A comprehensive gallery of digital fashion illustrations, moodboards, and conceptual collections showcasing a minimalist and expressive aesthetic.
          </p>
        </div>

        {/* Masonry Layout */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {illustrations.map((src, index) => (
            <motion.div 
              key={src}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: (index % 3) * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="break-inside-avoid relative overflow-hidden bg-white/50 group"
            >
              <div className="relative w-full h-auto">
                <Image
                  src={src}
                  alt={`Fashion Illustration ${index + 1}`}
                  width={800}
                  height={1200}
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105 w-full h-auto"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="font-serif text-white text-lg drop-shadow-md">Artwork {index + 1}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
