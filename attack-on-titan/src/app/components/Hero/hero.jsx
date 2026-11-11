
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative isolate flex min-h-svh w-full items-center justify-center overflow-hidden bg-[#160d10] text-white"
    >
      <div className="pointer-events-none absolute inset-0 z-0">
        <Image
          src="/img/banner-hero3.png"
          alt="Muralhas de Attack on Titan"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-[#10080c]/25 via-transparent to-[#10080c]/40" />

      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-r from-[#10080c]/20 via-transparent to-[#10080c]/10" />

      <div className="pointer-events-none absolute right-[-2%] top-[-2%] z-[2] h-[68%] w-[48%] sm:w-[45%] lg:h-[70%] lg:w-[43%] xl:w-[40%]">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.div
            initial={{
              y: "40%",
            }}
            animate={{
              y: "30%",
            }}
            transition={{
              duration: 7,
              delay: 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute right-[2%] top-[-13%] h-[82%] w-[72%]"
          >
            <Image
              src="/img/titã.png"
              alt="Titã Colossal surgindo atrás das nuvens"
              fill
              priority
              sizes="(max-width: 768px) 45vw, 32vw"
              className="object-contain object-right-top drop-shadow-[-15px_15px_30px_rgba(40,5,5,0.35)]"
            />
          </motion.div>
        </div>

        <div className="absolute inset-x-0 bottom-[6%] z-10 h-[68%]">
          <Image
            src="/img/nuvem.png"
            alt=""
            fill
            priority
            sizes="(max-width: 768px) 48vw, 43vw"
            className="object-contain object-right-bottom"
          />
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-[18%] bg-gradient-to-t from-[#32130f]/15 to-transparent blur-xl" />
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-0 z-[8] h-32 bg-gradient-to-b from-[#10080c]/80 to-transparent" />

      <motion.div
        initial={{
          opacity: 0,
          y: 180,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1.5,
          delay: 0.2,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="pointer-events-none absolute bottom-0 left-0 z-10 hidden h-[88%] w-[48%] lg:block xl:h-[94%]"
      >
        <Image
          src="/img/levi-banner2.png"
          alt="Levi Ackerman"
          fill
          priority
          sizes="48vw"
          className="object-contain object-left-bottom drop-shadow-2xl"
        />
      </motion.div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-[35%] bg-gradient-to-t from-[#10080c] via-[#10080c]/75 via-35% to-transparent" />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-24 bg-gradient-to-t from-[#10080c] to-transparent" />

      <div className="relative z-30 mx-auto flex w-full max-w-6xl flex-col items-center justify-center px-6 py-24 text-center lg:pl-[25%]">
        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.9,
            delay: 0.5,
            ease: "easeOut",
          }}
          className="flex w-full flex-col items-center"
        >
          <div className="relative h-28 w-full max-w-[550px] sm:h-36 md:h-44 lg:max-w-[620px]">
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

          <p className="mt-7 max-w-[460px] font-cinzel text-base font-light leading-relaxed tracking-wide text-[#f2e8e2] drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] sm:text-lg md:text-xl">
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
