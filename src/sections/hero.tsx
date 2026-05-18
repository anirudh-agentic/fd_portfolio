"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden bg-midnight-navy"
    >
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0 h-full w-full"
      >
        <div className="absolute inset-0 z-10 bg-black/30 mix-blend-multiply" />
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/10 via-transparent to-black/60" />
        {/* Film grain overlay */}
        <div className="pointer-events-none absolute inset-0 z-20 opacity-[0.03] mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} />

        <Image
          src="/images/hero.png"
          alt="Fashion Editorial"
          fill
          priority
          className="object-cover object-center"
        />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="relative z-30 flex h-full flex-col items-center justify-center px-4"
      >
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 2.2 }}
            className="text-center font-serif text-5xl uppercase tracking-[0.25em] text-[#F4F1EA]/90 font-light md:text-6xl lg:text-7xl leading-tight drop-shadow-md"
          >
            K.A. Harshita
          </motion.h1>
        </div>

        <div className="overflow-hidden mt-6">
          <motion.p
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 2.4 }}
            className="text-center font-sans text-sm tracking-[0.3em] text-[#F4F1EA]/80 uppercase"
          >
            Fashion Designer
          </motion.p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
        className="absolute bottom-12 left-1/2 z-30 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className="text-xs uppercase tracking-widest text-[#F4F1EA]/60 [writing-mode:vertical-lr]">Scroll</span>
        <motion.div
          className="h-16 w-[1px] bg-[#F4F1EA]/30 origin-top"
          animate={{
            scaleY: [0, 1, 0],
            translateY: ['0%', '0%', '100%']
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>
    </section>
  );
}
