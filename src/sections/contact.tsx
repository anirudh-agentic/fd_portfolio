"use client";

import { motion } from "framer-motion";

export function ContactSection() {
  return (
    <section id="contact" className="relative w-full bg-midnight-navy text-[#F4F1EA] py-32 md:py-48 overflow-hidden">
      <div className="absolute inset-0 z-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay" />
      
      <div className="container relative z-10 mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center justify-center text-center">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <span className="text-xs uppercase tracking-[0.4em] opacity-60">
              Open for Collaborations
            </span>
          </motion.div>

          <motion.a
            href="mailto:hello@harshita.design"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, type: "spring", stiffness: 100 }}
            viewport={{ once: true }}
            className="group relative mb-24"
          >
            <h2 className="font-serif text-5xl md:text-8xl lg:text-[9rem] leading-none transition-transform duration-500 group-hover:scale-105">
              Let's Talk
            </h2>
            <div className="absolute -bottom-4 left-1/2 h-[1px] w-0 -translate-x-1/2 bg-current transition-all duration-500 group-hover:w-full" />
          </motion.a>

          <div className="grid w-full grid-cols-2 gap-y-12 md:flex md:justify-between text-sm uppercase tracking-widest opacity-80">
            {["Instagram", "Behance", "LinkedIn", "Email"].map((link, i) => (
              <motion.a
                key={link}
                href="#"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                viewport={{ once: true }}
                className="hover:text-white transition-colors hover:underline underline-offset-4"
              >
                {link}
              </motion.a>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
