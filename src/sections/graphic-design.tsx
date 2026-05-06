"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function GraphicDesignSection() {
  return (
    <section className="w-full bg-muted-beige py-32">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="mb-24 flex flex-col items-center text-center">
          <span className="mb-4 text-xs uppercase tracking-[0.3em] text-foreground/60">
            Brand Identity
          </span>
          <h2 className="font-serif text-5xl md:text-7xl text-foreground">
            Graphic Design
          </h2>
          <p className="mt-6 font-sans text-sm md:text-base text-foreground/80 leading-relaxed max-w-xl">
            Exploring visual communication through logo design, product mockups, and cohesive brand identities for modern brands like Glowmist Organic and Fuzonics.
          </p>
        </div>

        <div className="w-full max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative w-full aspect-video overflow-hidden bg-white group shadow-2xl"
          >
            <Image
              src="/images/fuzonics.png"
              alt="Graphic Design & Branding"
              fill
              className="object-contain object-center p-4 transition-transform duration-700 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-black/5 pointer-events-none" />
          </motion.div>
        </div>

      </div>
    </section>
  );
}
