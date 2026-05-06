"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section id="about" ref={containerRef} className="relative w-full min-h-screen flex flex-col md:flex-row overflow-hidden">

      {/* ─── LEFT PANEL: Dark cinematic photo ─── */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
        className="relative w-full md:w-[55%] min-h-[70vh] md:min-h-screen bg-[#0e0e0e] overflow-hidden flex-shrink-0"
      >
        {/* Photo */}
        <Image
          src="/images/about.png"
          alt="K.A. Harshita"
          fill
          className="object-cover object-top opacity-75"
          priority
        />

        {/* Directional gradient — fades right into cream panel */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70 md:bg-gradient-to-r md:from-transparent md:to-[#0e0e0e]/80" />

        {/* Bottom-left: name plate */}
        <div className="absolute bottom-10 left-8 z-20 flex flex-col gap-2">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            viewport={{ once: true }}
            className="font-sans text-[10px] uppercase tracking-[0.4em] text-white/50"
          >
            Fashion Designer
          </motion.span>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            viewport={{ once: true }}
            className="font-serif text-3xl md:text-4xl text-white/90 leading-tight"
          >
            K.A. Harshita
          </motion.h3>
        </div>

        {/* Top-left: index number */}
        <div className="absolute top-10 left-8 z-20">
          <span className="font-sans text-[10px] uppercase tracking-[0.35em] text-white/30">01 / About</span>
        </div>
      </motion.div>

      {/* ─── RIGHT PANEL: Editorial text ─── */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: true }}
        className="relative w-full md:w-[45%] bg-background flex flex-col justify-center px-8 md:px-16 xl:px-20 py-20 md:py-0 overflow-hidden"
      >
        {/* Giant decorative letter in the background */}
        <span className="pointer-events-none select-none absolute -right-6 top-1/2 -translate-y-1/2 font-serif text-[28vw] md:text-[15vw] text-foreground/[0.04] leading-none">
          H
        </span>

        <div className="relative z-10 max-w-lg">

          {/* Thin top rule */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
            className="mb-10 h-[1px] w-full bg-foreground/15 origin-left"
          />

          {/* Pull quote */}
          <motion.blockquote
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6 }}
            viewport={{ once: true }}
            className="font-serif text-[1.6rem] md:text-[1.85rem] xl:text-[2.1rem] leading-[1.3] text-foreground italic mb-10"
          >
            &ldquo;Driven by the art of storytelling through style — where elegance meets individuality.&rdquo;
          </motion.blockquote>

          {/* Thin divider */}
          <div className="h-[1px] w-12 bg-muted-beige mb-10" />

          {/* Body text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.8 }}
            viewport={{ once: true }}
            className="space-y-5 font-sans text-sm md:text-[0.9rem] text-foreground/65 leading-[1.9] max-w-sm"
          >
            <p>
              A graduate of the Footwear Design and Development Institute, Hyderabad, I create designs that blend elegance, individuality, and contemporary expression.
            </p>
            <p>
              From an early age, fashion became more than creativity — it became a language of confidence, identity, and emotion. Every silhouette and detail I design is inspired by the idea that style should feel personal and timeless.
            </p>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.0 }}
            viewport={{ once: true }}
            className="mt-14 flex items-center gap-5"
          >
            <div className="h-[1px] w-8 bg-foreground flex-shrink-0" />
            <button className="group relative text-[11px] uppercase tracking-[0.3em] text-foreground pb-1 border-b border-foreground/30 hover:border-foreground transition-colors duration-300">
              Discover Vision
            </button>
          </motion.div>

          {/* Footer tags */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.1 }}
            viewport={{ once: true }}
            className="mt-20 flex items-center justify-between border-t border-foreground/10 pt-6"
          >
            <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-foreground/35">FDDI · Hyderabad</span>
            <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-foreground/35">Fashion Design</span>
          </motion.div>

        </div>
      </motion.div>

    </section>
  );
}
