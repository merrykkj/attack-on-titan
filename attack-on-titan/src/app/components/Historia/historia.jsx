
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Historia() {
  return (
    <section
      id="historia"
      className="relative isolate flex min-h-svh w-full items-center overflow-hidden bg-[#10080c] py-28 text-white sm:py-32 lg:py-36"
    >
      <div className="pointer-events-none absolute inset-0 z-0">
        <Image
          src="/img/banner-muralha2.png"
          alt="Muralhas de Attack on Titan"
          fill
          unoptimized
          sizes="100vw"
          className="object-cover object-[65%_center] lg:object-center"
        />
      </div>

      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-r from-[#10080c]/95 via-[#10080c]/65 to-[#10080c]/10 lg:from-[#10080c]/95 lg:via-[#10080c]/55 lg:to-transparent" />

      <div className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-t from-[#10080c]/30 via-transparent to-[#10080c]/20" />

      <div className="pointer-events-none absolute inset-x-0 top-0 z-[3] h-32 bg-gradient-to-b from-[#10080c] via-[#10080c]/80 to-transparent sm:h-44 lg:h-52" />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[3] h-40 bg-gradient-to-t from-[#10080c] via-[#10080c]/85 to-transparent sm:h-52 lg:h-64" />

      <div className="relative z-10 mx-auto flex w-full max-w-[1440px] items-center px-6 sm:px-10 lg:px-20 xl:px-28">
        <div className="w-full max-w-[620px]">
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="mb-8 flex items-center gap-4"
          >
            <span className="h-px w-12 bg-[#bd353b]" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.4em] text-[#d78a8d] sm:text-xs">
              O início de tudo
            </span>

            <span className="ml-2 text-[10px] tracking-[0.2em] text-white/35">
              01 / HISTÓRIA
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="relative mb-4"
          >
            <Image
              src="/img/muralha-logo.png"
              alt="Além das Muralhas"
              width={850}
              height={400}
              sizes="(max-width: 640px) 100vw, 580px"
              className="relative -left-5 block h-auto w-full max-w-[570px] object-contain sm:-left-9 lg:-left-12"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mb-9"
          >
            <p className="max-w-[540px] font-serif text-xl italic leading-relaxed text-[#f1ded9] sm:text-2xl lg:text-[27px]">
              "A verdade está além do que podemos ver."
            </p>

            <div className="mt-7 h-px w-full max-w-[460px] bg-gradient-to-r from-[#b72d36] via-[#b72d36]/50 to-transparent" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="relative pl-6 sm:pl-8"
          >
            <div className="absolute bottom-0 left-0 top-0 w-px bg-gradient-to-b from-[#b72d36] via-[#b72d36]/50 to-transparent" />

            <span className="mb-5 block text-[10px] font-semibold uppercase tracking-[0.3em] text-[#c87379]">
              A humanidade atrás das muralhas
            </span>

            <p className="max-w-[500px] text-[14px] leading-[2.1] text-[#e0d3d0] sm:text-[16px]">
              Durante mais de um século, a humanidade viveu
              protegida por gigantescas muralhas, temendo os
              titãs que dominavam o mundo exterior.
            </p>

            <p className="mt-5 max-w-[500px] text-[14px] leading-[2.1] text-[#d4c4c1] sm:text-[16px]">
              Mas quando a segurança se desfaz, uma nova
              geração de soldados decide desafiar o medo,
              enfrentar o desconhecido e lutar por aquilo
              que sempre lhes foi negado:
              <span className="font-semibold text-[#e6a4a5]">
                {" "}a liberdade.
              </span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-12 flex items-center gap-5"
          >
            <div className="flex h-10 w-10 items-center justify-center border border-[#a63238]/40 bg-[#a63238]/10">
              <span className="font-serif text-lg text-[#dc777c]">
                自
              </span>
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-semibold uppercase tracking-[0.27em] text-[#d19a98] sm:text-xs">
                Shingeki no Kyojin
              </span>

              <span className="text-[10px] uppercase tracking-[0.16em] text-white/40">
                A luta pela liberdade
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.5 }}
        className="pointer-events-none absolute bottom-10 right-10 z-10 hidden items-center gap-3 lg:flex"
      >
        <span className="h-px w-10 bg-white/30" />
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/50">
          Para além das muralhas
        </span>
      </motion.div>
    </section>
  );
}
