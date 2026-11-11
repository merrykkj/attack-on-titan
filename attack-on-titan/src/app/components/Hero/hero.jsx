
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative isolate flex min-h-svh w-full items-center justify-center overflow-hidden bg-[#160d10] text-white"
    >
      <div className="pointer-events-none absolute inset-0 -z-20">
        <Image
          src="/img/banner-hero.png"
          alt="Muralhas de Attack on Titan com o Titã Colossal"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      <div className="pointer-events-none absolute inset-0 -z-10 bg-linear-to-b from-[#10080c]/50 via-[#170b0d]/20 to-[#10080c]/80" />

      <div className="pointer-events-none absolute inset-0 -z-10 bg-linear-to-r from-[#10080c]/30 via-transparent to-[#10080c]/10" />

      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-32 bg-linear-to-b from-[#10080c]/80 to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 180 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1.5,
          delay: 0.2,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="pointer-events-none absolute bottom-0 left-0 z-10 hidden h-[88%] w-[48%] lg:block xl:h-[94%]"
      >
        <Image
          src="/img/levi-banner.png"
          alt="Levi Ackerman"
          fill
          priority
          sizes="48vw"
          className="object-contain object-left-bottom drop-shadow-2xl"
        />
      </motion.div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-[35%] bg-linear-to-t from-[#10080c] via-[#10080c]/75 via-35% to-transparent" />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-24 bg-linear-to-t from-[#10080c] to-transparent" />

      <div className="relative z-30 mx-auto flex w-full max-w-6xl flex-col items-center justify-center px-6 py-24 text-center lg:pl-[25%]">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.5,
            ease: "easeOut",
          }}
          className="flex w-full flex-col items-center"
        >
          <div className="relative h-28 w-full max-w-137.5 sm:h-36 md:h-44 lg:max-w-155">
            <Image
              src="/img/logo-hero.png"
              alt="Attack on Titan"
              fill
              priority
              sizes="(max-width: 768px) 90vw, 620px"
              className="object-contain drop-shadow-2xl"
            />
          </div>

          <div className="mt-7 h-0.5 w-16 bg-[#c32b26] shadow-[0_0_15px_#c32b26]" />

          <p className="mt-7 max-w-115 font-cinzel text-base font-light leading-relaxed tracking-wide text-[#f2e8e2] drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] sm:text-lg md:text-xl">
            Em um mundo cercado por muralhas, a humanidade luta
            pela sobrevivência e pelo verdadeiro significado
            da liberdade.
          </p>

          <p className="mt-5 text-xs font-medium uppercase tracking-[0.35em] text-[#e5b7a4] sm:text-sm">
            Shinzou wo Sasageyo
          </p>
        </motion.div>
      </div>
    </section>
  );
}
