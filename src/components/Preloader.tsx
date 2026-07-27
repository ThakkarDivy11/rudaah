"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setLoading(false), 400);
          return 100;
        }
        return prev + 5;
      });
    }, 40);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-paper-texture text-[#2A1613]"
        >
          {/* Animated Gold Glowing Ring */}
          <div className="relative flex items-center justify-center mb-8">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
              className="absolute w-44 h-44 rounded-full border border-[#7A1B0C]/40 border-t-[#B8860B]"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
              className="absolute w-52 h-52 rounded-full border border-[#D6B26E]/50 border-b-[#7A1B0C]"
            />

            {/* Rudaah Logo Center */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="relative w-36 h-36 rounded-full bg-[#E8DCCB] p-2 border border-[#7A1B0C]/40 flex items-center justify-center shadow-lg"
            >
              <Image
                src="/images/rudaah-logo.png"
                alt="Rudaah Garba Logo"
                width={140}
                height={140}
                className="object-contain"
                priority
              />
            </motion.div>

          </div>

          {/* Text & Progress */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center space-y-2"
          >
            <h2 className="font-playfair text-2xl tracking-wider text-[#7A1B0C] font-bold">
              Rudaah GARBA
            </h2>
            <p className="font-cormorant text-lg text-[#8B6914] italic">
              Where Nature Becomes Celebration
            </p>

            {/* Progress Bar */}
            <div className="w-48 h-1.5 bg-[#E6DBCB] rounded-full overflow-hidden mx-auto mt-4 border border-[#7A1B0C]/20">
              <motion.div
                className="h-full bg-gradient-to-r from-[#7A1B0C] to-[#B8860B]"
                style={{ width: `${progress}%` }}
              />
            </div>
            <span className="text-xs font-mono text-[#7A1B0C] font-bold tracking-widest block pt-1">
              {progress}%
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

}
