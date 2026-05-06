"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export function AccessoriesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen w-full bg-muted-beige py-32"
    >
      <div className="container mx-auto px-6 md:px-12 h-full flex flex-col justify-center">
        
        <div className="mb-16 flex flex-col items-center text-center">
          <span className="mb-4 text-xs uppercase tracking-[0.3em] text-foreground/60">
            Object Design
          </span>
          <h2 className="font-serif text-4xl md:text-6xl text-foreground">
            Accessories & Forms
          </h2>
        </div>

        <motion.div 
          style={{ scale, opacity }}
          className="relative mx-auto aspect-[16/9] w-full max-w-5xl overflow-hidden group"
        >
          <div className="absolute inset-0 bg-black/5 z-10 transition-colors duration-500 group-hover:bg-transparent" />
          <Image
            src="/images/accessories.png"
            alt="Accessories Showcase"
            fill
            className="object-cover object-center transition-transform duration-1000 group-hover:scale-105"
          />
          
          <div className="absolute bottom-8 left-8 z-20 overflow-hidden">
            <motion.div
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-background/90 backdrop-blur-sm p-6"
            >
              <h3 className="font-serif text-2xl text-foreground mb-2">The Structured Tote</h3>
              <p className="font-sans text-xs uppercase tracking-widest text-foreground/70">
                Calf Leather / Brass Hardware
              </p>
            </motion.div>
          </div>
        </motion.div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
           {[1, 2, 3].map((item) => (
             <div key={item} className="space-y-4 group cursor-pointer">
               <div className="relative aspect-square w-full overflow-hidden bg-white/50">
                  <div className="absolute inset-0 flex items-center justify-center font-serif text-2xl text-foreground/20 group-hover:scale-110 transition-transform duration-500">
                    Detail {item}
                  </div>
               </div>
               <div className="flex justify-between items-center border-b border-foreground/20 pb-2">
                 <span className="font-serif text-lg">Concept {item}</span>
                 <span className="text-xs uppercase tracking-widest text-foreground/50">View</span>
               </div>
             </div>
           ))}
        </div>

      </div>
    </section>
  );
}
