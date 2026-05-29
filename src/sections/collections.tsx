"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

const collections = [
  {
    id: "beneath-surface",
    title: "Beneath the Surface",
    theme: "Emotions, grief, hidden truths",
    description: "A profound exploration of the emotional spectrum, conceptualized through complex layering, deep shadows, and visceral fabric manipulation.",
    image: "/images/collection-beneath.png",
    detailImages: [
      "/images/beneath-surface-explore.png",
      "/images/beneath-surface-inspiration.png",
      "/images/beneath-surface-mood-board.png",
      "/images/8.jpg",
      "/images/9.jpg",
      "/images/beneath-surface-illustrations.png",
      "/images/denial.png",
      "/images/anger.png",
      "/images/Bargaining.png",
      "/images/dprsn.png",
      "/images/acpt.png"
    ],
    textColor: "text-[#D8D0C5]",
    bgColor: "bg-[#111111]"
  },
  {
    id: "dwarka",
    title: "Dwarka: The Lost City",
    theme: "Ancient underwater civilization",
    description: "Mystical luxury meets mythological storytelling. Inspired by submerged ancient architecture, featuring fluid silhouettes and aquatic distortions.",
    image: "/images/dwarka.png",
    detailImages: [
      "/images/dwarka.png",
      "/images/dwarka1.png",
      "/images/dwarka2.png",
      "/images/dwarka3.png",
      "/images/dwarka4.png",
      "/images/dwarka5.png",
      "/images/dwarka6.png",
      "/images/dwarka7.png",
      "/images/dwarka8.png",
      "/images/dwarka9.png",
      "/images/dwarka10.png",
      "/images/dwarka11.png",
      "/images/dwarka12.png",
      "/images/dwarka13.png"
    ],
    textColor: "text-[#F4F1EA]",
    bgColor: "bg-[#1D2840]"
  },
  {
    id: "aurora",
    title: "Aurora Night",
    theme: "Northern lights, night luxury",
    description: "A dreamlike translation of atmospheric phenomena into high-end evening wear. Luminous textures and elegant tailoring for the modern night.",
    image: "/images/collection3.png",
    textColor: "text-[#111111]",
    bgColor: "bg-[#D8D0C5]"
  }
];

export function CollectionsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedCollection, setSelectedCollection] = useState<string | null>(null);

  useEffect(() => {
    if (selectedCollection) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [selectedCollection]);

  const activeCollection = collections.find(c => c.id === selectedCollection);

  return (
    <>
      <section id="collections" ref={containerRef} className="relative w-full">
        {collections.map((collection, index) => (
          <CollectionPanel 
            key={collection.id} 
            collection={collection} 
            index={index} 
            onExplore={() => setSelectedCollection(collection.id)}
          />
        ))}
      </section>

      <AnimatePresence>
        {activeCollection && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-12 backdrop-blur-md"
            onClick={() => setSelectedCollection(null)}
          >
            <motion.button 
              className="absolute top-8 right-8 text-white uppercase tracking-[0.2em] text-xs hover:opacity-70 transition-opacity z-[110]"
              onClick={() => setSelectedCollection(null)}
            >
              [ Close ]
            </motion.button>
            
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-7xl h-[90vh] bg-transparent overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
              data-lenis-prevent="true"
            >
              <div className="absolute top-4 left-1/2 -translate-x-1/2 text-white/50 text-xs uppercase tracking-widest pointer-events-none animate-pulse">
                Scroll Down to View More
              </div>
              <div className="flex flex-col gap-16 py-12 items-center min-h-full mt-8">
                {(activeCollection.detailImages || [activeCollection.image]).map((img, idx) => (
                  <div key={idx} className="relative w-full max-w-5xl aspect-video md:aspect-auto md:h-[80vh] flex-shrink-0">
                    <Image 
                      src={img}
                      alt={`${activeCollection.title} Detailed Exploration ${idx + 1}`}
                      fill
                      className="object-contain drop-shadow-2xl"
                      priority={idx === 0}
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function CollectionPanel({ 
  collection, 
  index, 
  onExplore 
}: { 
  collection: typeof collections[0]; 
  index: number;
  onExplore: () => void;
}) {
  const panelRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: panelRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

  return (
    <div 
      ref={panelRef}
      className={`relative flex h-screen w-full items-center justify-center overflow-hidden sticky top-0 ${collection.bgColor}`}
      style={{ zIndex: index }}
    >
      <div className="absolute inset-0 w-full h-full">
        <motion.div style={{ scale, y }} className="relative w-full h-full">
           <Image
            src={collection.image}
            alt={collection.title}
            fill
            className="object-cover opacity-60 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
        </motion.div>
      </div>

      <div className="relative z-10 container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-12 h-full py-24">
        
        <div className={`flex flex-col space-y-6 md:w-1/2 ${collection.textColor}`}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <span className="text-xs uppercase tracking-[0.3em] opacity-70 mb-4 block">
              Collection 0{index + 1}
            </span>
            <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-none mb-6 text-balance">
              {collection.title}
            </h2>
            <div className="space-y-4 max-w-md">
              <p className="font-sans text-sm uppercase tracking-widest opacity-90 border-b border-current/20 pb-4 inline-block">
                {collection.theme}
              </p>
              <p className="font-sans text-sm md:text-base opacity-80 leading-relaxed pt-2">
                {collection.description}
              </p>
            </div>
            
            <button 
              onClick={onExplore}
              className="mt-12 group relative inline-flex items-center gap-4 overflow-hidden border border-current px-8 py-3 text-sm uppercase tracking-widest transition-all hover:bg-current hover:text-black cursor-pointer"
            >
              <span className="relative z-10 transition-colors duration-300">Explore Collection</span>
            </button>
          </motion.div>
        </div>

      </div>
    </div>
  );
}
