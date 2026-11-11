
"use client";

import { motion } from "framer-motion";
import { ArrowUp, Shield, Sword, Heart } from "lucide-react";

const links = [
  { nome: "Início", href: "#inicio" },
  { nome: "História", href: "#historia" },
  { nome: "Personagens", href: "#personagens" },
  { nome: "Titãs", href: "#titas" },
  { nome: "Muralhas", href: "#muralhas" },
];

export default function Footer() {
  const voltarAoTopo = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative isolate w-full overflow-hidden bg-[#0b0609] text-[#f3e4df]">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_0%,rgba(125,22,29,0.16),transparent_65%)]" />

      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#b52b32]/70 to-transparent" />

      <div className="pointer-events-none absolute left-0 top-0 h-56 w-56 rounded-full bg-red-950/10 blur-[100px]" />

      <div className="pointer-events-none absolute bottom-0 right-0 h-56 w-56 rounded-full bg-red-950/10 blur-[100px]" />

      <div className="relative mx-auto max-w-375 px-6 pb-7 pt-16 sm:px-10 lg:px-16 lg:pt-20">
        <div className="grid gap-12 border-b border-[#8b5753]/25 pb-14 md:grid-cols-[1.3fr_1fr_1fr] lg:gap-20">
          <div className="max-w-sm">
            <motion.a
              href="#inicio"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex flex-col"
            >
              <span className="font-serif text-3xl font-semibold uppercase tracking-[0.16em] text-[#f8ebe5] sm:text-4xl">
                Shingeki
              </span>

              <span className="mt-1 font-serif text-[10px] uppercase tracking-[0.48em] text-[#c77873]">
                No Kyojin
              </span>
            </motion.a>

            <div className="mt-7 h-0.5 w-12 bg-[#bb2c34]" />

            <p className="mt-6 font-serif text-sm leading-7 text-[#bca7a0]">
              Além das muralhas, existe um mundo esperando para ser
              descoberto. Explore a história, os personagens e os
              mistérios de Attack on Titan.
            </p>

            <div className="mt-7 flex items-center gap-3 text-[#a87973]">
              <Sword size={17} strokeWidth={1.4} />
              <span className="h-px w-9 bg-[#85514e]" />
              <Shield size={17} strokeWidth={1.4} />
              <span className="h-px w-9 bg-[#85514e]" />
              <Sword
                size={17}
                strokeWidth={1.4}
                className="-scale-x-100"
              />
            </div>
          </div>

          <div>
            <h3 className="font-serif text-sm font-semibold uppercase tracking-[0.2em] text-[#f1ddd5]">
              Explorar
            </h3>

            <div className="mt-4 h-px w-9 bg-[#b82c34]" />

            <nav
              aria-label="Navegação do rodapé"
              className="mt-7 flex flex-col items-start gap-4"
            >
              {links.map((link) => (
                <a
                  key={link.nome}
                  href={link.href}
                  className="group flex items-center gap-3 font-serif text-sm text-[#bda9a2] transition-colors duration-300 hover:text-[#f2e3dc]"
                >
                  <span className="h-px w-0 bg-[#d3343c] transition-all duration-300 group-hover:w-5" />
                  {link.nome}
                </a>
              ))}
            </nav>
          </div>

          <div className="flex flex-col items-start">
            <h3 className="font-serif text-sm font-semibold uppercase tracking-[0.2em] text-[#f1ddd5]">
              Pela liberdade
            </h3>

            <div className="mt-4 h-px w-9 bg-[#b82c34]" />

            <div className="mt-7 border-l-2 border-[#a42b32]/70 pl-5">
              <p className="font-serif text-lg italic leading-relaxed text-[#ead6ce] sm:text-xl">
                “Dedique seu coração.”
              </p>

              <span className="mt-3 block font-serif text-[10px] uppercase tracking-[0.22em] text-[#a77c76]">
                Shinzou wo Sasageyo
              </span>
            </div>

            <button
              onClick={voltarAoTopo}
              className="group mt-9 flex items-center gap-3 rounded-full border border-[#8e4b49]/50 bg-[#1b0b10]/70 px-5 py-3 font-serif text-xs uppercase tracking-widest text-[#e8d4cc] transition-all duration-300 hover:border-[#c32d35] hover:bg-[#45141b]"
            >
              Voltar ao topo

              <ArrowUp
                size={16}
                className="transition-transform duration-300 group-hover:-translate-y-1"
              />
            </button>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-5 pt-7 text-center sm:flex-row sm:text-left">
          <p className="font-serif text-xs text-[#967d77]">
            © {new Date().getFullYear()} Shingeki no Kyojin. Projeto de fã
            não oficial.
          </p>

          <div className="flex items-center gap-2 font-serif text-xs text-[#967d77]">
            Feito com
            <Heart
              size={13}
              className="fill-[#b52c34] text-[#b52c34]"
            />
            pela liberdade
          </div>
        </div>
      </div>

      <div className="h-0.75 w-full bg-linear-to-r from-transparent via-[#a6262e]/65 to-transparent" />
    </footer>
  );
}
