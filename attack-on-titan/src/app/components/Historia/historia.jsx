
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Historia() {
  return (
    <section
      id="historia"
      className="relative isolate flex min-h-svh w-full items-center overflow-hidden bg-[#10080c] py-24 text-white lg:py-28"
    >
      <div className="pointer-events-none absolute inset-0 -z-20">
        <Image
          src="/img/banner-muralha.png"
          alt="Muralhas de Attack on Titan"
          fill
          sizes="100vw"
          className="object-cover object-[65%_center] lg:object-center"
        />
      </div>

      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-[#10080c]/95 via-[#10080c]/70 to-[#10080c]/10 lg:from-[#10080c]/95 lg:via-[#10080c]/55 lg:to-transparent" />

      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-40 bg-gradient-to-b from-[#10080c] via-[#10080c]/85 to-transparent sm:h-48 lg:h-56" />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-48 bg-gradient-to-t from-[#10080c] via-[#10080c]/90 to-transparent sm:h-56 lg:h-64" />

      <div className="relative z-20 mx-auto flex w-full max-w-7xl items-center px-6 sm:px-10 lg:px-16 xl:px-20">
        <div className="w-full max-w-[570px]">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mb-5 flex items-center gap-4"
          >
            <span className="h-px w-10 bg-[#a82b30]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[#d18b8b]">
              A história
            </span>
          </motion.div>

          <div className="mb-7 flex w-full items-center justify-start">
            <Image
              src="/img/muralha-logo.png"
              alt="Além das Muralhas"
              width={850}
              height={400}
              priority
              className="relative block h-auto w-full max-w-[520px] object-contain sm:-left-10 lg:-left-14"
            />
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mb-6 font-serif text-lg italic leading-relaxed text-[#e0d2cf] sm:text-xl lg:text-[22px]"
          >
            A verdade está além do que podemos ver.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-7 h-px w-full max-w-[470px] origin-left bg-gradient-to-r from-[#a82b30] via-[#a82b30]/50 to-transparent"
          />

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="max-w-[510px] text-sm leading-[2] text-[#d0c3c1] sm:text-base lg:text-[16px]"
          >
            Durante mais de um século, a humanidade viveu protegida
            por gigantescas muralhas, temendo os titãs que dominavam
            o mundo exterior. Mas, quando a segurança se desfaz,
            uma nova geração de soldados decide enfrentar o
            desconhecido em busca da liberdade.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-9 flex items-center gap-4"
          >
            <span className="h-px w-9 bg-[#a82b30]" />
            <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#b98a88] sm:text-xs">
              Shingeki no Kyojin
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
