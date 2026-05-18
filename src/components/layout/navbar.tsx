"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;

    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }

    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  const links = [
    { name: "Collections", href: "#collections" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={cn(
        "fixed left-0 right-0 top-0 z-50 flex w-full items-center justify-between px-6 py-6 transition-all duration-300 md:px-12",
        isScrolled ? "bg-[#F4F1EA]/80 backdrop-blur-md" : "bg-transparent"
      )}
    >
      <Link href="/" className="font-serif text-xl tracking-wider text-foreground">
        K.A. HARSHITA
      </Link>

      <nav className="hidden items-center gap-8 md:flex">
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="text-sm uppercase tracking-widest text-foreground/80 transition-colors hover:text-foreground"
          >
            {link.name}
          </Link>
        ))}
      </nav>

      {/* Mobile Menu Button - Minimal */}
      <button className="flex flex-col gap-1.5 md:hidden">
        <span className="h-[1px] w-6 bg-foreground" />
        <span className="h-[1px] w-4 self-end bg-foreground" />
      </button>
    </motion.header>
  );
}
