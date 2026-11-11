"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Crown,
  Flame,
  Shield,
  Swords,
  PawPrint,
  Zap,
  Hammer,
  Box,
  Slash,
} from "lucide-react";

const titans = [
  {
    nome: "Titã de Ataque",
    imagem: "/img/tita-ataque.png",
    icone: Swords,
    cor: "#ef4444",
    descricao:
      "Força, velocidade e resistência extraordinárias, além da capacidade de acessar memórias de futuros portadores.",
    portadores: [
      { nome: "Eren Kruger", imagem: "/img/eren-kruger.png" },
      { nome: "Grisha Yeager", imagem: "/img/grisha-yeager.png" },
      { nome: "Eren Yeager", imagem: "/img/eren-yeager.png" },
    ],
  },
  {
    nome: "Titã Colossal",
    imagem: "/img/tita-colossal.png",
    icone: Flame,
    cor: "#fb923c",
    descricao:
      "Tamanho gigantesco, poder de destruição massivo e capacidade de liberar vapor extremamente quente.",
    portadores: [
      { nome: "Bertholdt Hoover", imagem: "/img/bertholdt.png" },
      { nome: "Armin Arlert", imagem: "/img/armin.png" },
    ],
  },
  {
    nome: "Titã Blindado",
    imagem: "/img/tita-blindado.png",
    icone: Shield,
    cor: "#d6a15d",
    descricao:
      "Armadura endurecida que cobre grande parte do corpo, proporcionando defesa e um poderoso impacto.",
    portadores: [
      { nome: "Reiner Braun", imagem: "/img/reiner.png" },
    ],
  },
  {
    nome: "Titã Fêmea",
    imagem: "/img/tita-femea.png",
    icone: Slash,
    cor: "#e879a8",
    descricao:
      "Grande agilidade, resistência, capacidade de endurecimento e habilidade de atrair Titãs.",
    portadores: [
      { nome: "Annie Leonhart", imagem: "/img/annie.png" },
    ],
  },
  {
    nome: "Titã Bestial",
    imagem: "/img/tita-bestial.png",
    icone: PawPrint,
    cor: "#4ade80",
    descricao:
      "Força devastadora, lançamento preciso de objetos e características animais que variam conforme o portador.",
    portadores: [
      { nome: "Zeke Yeager", imagem: "/img/zeke.png" },
    ],
  },
  {
    nome: "Titã Mandíbula",
    imagem: "/img/tita-mandibula.png",
    icone: Zap,
    cor: "#f59e0b",
    descricao:
      "Velocidade extrema, agilidade e mandíbulas poderosas capazes de destruir materiais resistentes.",
    portadores: [
      { nome: "Marcel Galliard", imagem: "/img/marcel.png" },
      { nome: "Ymir", imagem: "/img/ymir.png" },
      { nome: "Porco Galliard", imagem: "/img/porco.png" },
      { nome: "Falco Grice", imagem: "/img/falco.png" },
    ],
  },
  {
    nome: "Titã Quadrúpede",
    imagem: "/img/tita-quadrupede.png",
    icone: Box,
    cor: "#38bdf8",
    descricao:
      "Resistência excepcional, mobilidade em quatro patas e capacidade de transportar equipamentos e armamentos.",
    portadores: [
      { nome: "Pieck Finger", imagem: "/img/pieck.png" },
    ],
  },
  {
    nome: "Titã Martelo de Guerra",
    imagem: "/img/tita-martelo.png",
    icone: Hammer,
    cor: "#a78bfa",
    descricao:
      "Capacidade de criar armas e estruturas resistentes através do endurecimento, controlando-as à distância.",
    portadores: [
      { nome: "Lara Tybur", imagem: "/img/lara.png" },
      { nome: "Eren Yeager", imagem: "/img/eren-yeager.png" },
    ],
  },
  {
    nome: "Titã Fundador",
    imagem: "/img/tita-fundador.png",
    icone: Crown,
    cor: "#22d3ee",
    descricao:
      "Poder de controlar Titãs, modificar memórias dos Eldianos e influenciar seus corpos e características.",
    portadores: [
      { nome: "Ymir Fritz", imagem: "/img/ymir-fritz.png" },
      { nome: "Karl Fritz", imagem: "/img/karl-fritz.png" },
      { nome: "Eren Yeager", imagem: "/img/eren-yeager.png" },
    ],
  },
];

export default function Titans() {
  return (
    <section
      id="titas"
      className="relative isolate min-h-screen w-full overflow-hidden bg-[#100708] py-24 text-white lg:py-32"
    >
      <div className="pointer-events-none absolute inset-0 -z-20">
        <Image
          src="/img/banner-titã.png"
          alt="Cenário de Attack on Titan"
          fill
          unoptimized
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      <div className="pointer-events-none absolute inset-0 -z-10 bg-[#100708]/35" />

      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-[#100708]/85 via-transparent to-[#100708]/95" />

      <div className="pointer-events-none absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-[#100708] to-transparent" />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#100708] to-transparent" />

      <div className="relative z-10 mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="mx-auto mb-14 max-w-4xl text-center"
        >
          <div className="mb-5 flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#c79a76]" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.55em] text-[#e4c4aa] sm:text-xs">
              Attack on Titan
            </span>

            <span className="h-px w-12 bg-gradient-to-l from-transparent to-[#c79a76]" />
          </div>

          <h2 className="font-serif text-4xl font-bold uppercase leading-[1.05] tracking-[0.06em] text-[#f5e5d6] drop-shadow-[0_5px_15px_rgba(0,0,0,0.8)] sm:text-6xl lg:text-7xl">
            O Poder dos
            <span className="mt-2 block bg-gradient-to-b from-[#fff2e4] via-[#e4b58f] to-[#a33b30] bg-clip-text text-transparent">
              Nove Titãs
            </span>
          </h2>

          <div className="mx-auto my-6 h-[2px] w-52 bg-gradient-to-r from-transparent via-[#e23b30] to-transparent shadow-[0_0_18px_#e23b30]" />

          <p className="font-serif text-base italic tracking-wide text-[#f1d5c3] sm:text-xl">
            Nove poderes capazes de mudar o destino da humanidade.
          </p>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#d4c5c0] sm:text-base">
            Conheça os nove Titãs Originais, seres que possuem habilidades
            extraordinárias e desempenham papéis fundamentais nos conflitos
            que definem o destino da humanidade.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 justify-items-center gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-9">
          {titans.map((titan, index) => {
            const Icone = titan.icone;

            return (
              <motion.article
                key={titan.nome}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration: 0.65,
                  delay: (index % 5) * 0.08,
                }}
                whileHover={{ y: -10 }}
                style={{
                  "--titan-color": titan.cor,
                }}
                className="group relative flex h-[570px] w-full max-w-[330px] flex-col overflow-hidden border border-[var(--titan-color)]/60 bg-[#0d080a]/95 shadow-[0_15px_35px_rgba(0,0,0,0.6)] transition-all duration-500 hover:border-[var(--titan-color)] hover:shadow-[0_0_30px_var(--titan-color)]/30 sm:h-[590px] xl:h-[560px] 2xl:h-[610px]"
              >
                <div className="pointer-events-none absolute inset-0 z-20 border-[3px] border-transparent transition-colors duration-500 group-hover:border-[var(--titan-color)]/20" />

                <div
                  className="pointer-events-none absolute inset-x-0 top-0 z-30 h-[2px]"
                  style={{
                    background: `linear-gradient(to right, transparent, ${titan.cor}, transparent)`,
                    boxShadow: `0 0 15px ${titan.cor}`,
                  }}
                />

                <div className="relative h-[245px] w-full shrink-0 overflow-hidden sm:h-[265px] xl:h-[235px] 2xl:h-[250px]">
                  <Image
                    src={titan.imagem}
                    alt={titan.nome}
                    fill
                    unoptimized
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, (max-width: 1536px) 20vw, 12vw"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d080a] via-[#0d080a]/10 to-transparent" />

                  <div
                    className="absolute inset-x-0 bottom-0 h-20"
                    style={{
                      background: `linear-gradient(to top, ${titan.cor}18, transparent)`,
                    }}
                  />
                </div>

                <div className="relative z-10 -mt-9 flex min-h-0 flex-1 flex-col items-center px-3 pb-4 text-center">
                  <div
                    className="mb-3 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border bg-[#120b0d]/95 shadow-lg"
                    style={{
                      borderColor: `${titan.cor}80`,
                      boxShadow: `0 0 20px ${titan.cor}35`,
                    }}
                  >
                    <Icone
                      size={23}
                      strokeWidth={1.6}
                      style={{ color: titan.cor }}
                    />
                  </div>

                  <h3 className="min-h-[48px] font-serif text-lg font-bold uppercase leading-tight tracking-wide text-[#f5e1cf] xl:text-base 2xl:text-sm">
                    {titan.nome}
                  </h3>

                  <div
                    className="my-3 h-[2px] w-16 shrink-0"
                    style={{
                      background: titan.cor,
                      boxShadow: `0 0 12px ${titan.cor}`,
                    }}
                  />

                  <p className="line-clamp-5 text-xs leading-[1.65] text-[#d7cbc6] xl:text-[11px] 2xl:text-[10px]">
                    {titan.descricao}
                  </p>

                  <div className="mt-auto w-full pt-4">
                    <div
                      className="mb-3 flex items-center justify-center gap-2 border-y py-2"
                      style={{
                        borderColor: `${titan.cor}40`,
                        backgroundColor: `${titan.cor}10`,
                      }}
                    >
                      <span
                        className="text-[10px] font-bold uppercase tracking-[0.12em]"
                        style={{ color: titan.cor }}
                      >
                        Portadores
                      </span>
                    </div>

                    <div className="flex min-h-[68px] flex-wrap items-start justify-center gap-x-2 gap-y-3">
                      {titan.portadores.map((portador) => (
                        <div
                          key={portador.nome}
                          className="flex w-[54px] flex-col items-center gap-1.5"
                        >
                          <div
                            className="relative h-10 w-10 overflow-hidden border bg-[#211718] transition-transform duration-300 group-hover:scale-105"
                            style={{
                              borderColor: `${titan.cor}90`,
                              clipPath:
                                "polygon(20% 0, 80% 0, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0 80%, 0 20%)",
                            }}
                          >
                            <Image
                              src={portador.imagem}
                              alt={portador.nome}
                              fill
                              unoptimized
                              sizes="40px"
                              className="object-cover object-top"
                            />
                          </div>

                          <span className="text-center text-[9px] leading-[1.2] text-[#ead7ca]">
                            {portador.nome}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div
                  className="pointer-events-none absolute bottom-0 left-0 z-30 h-9 w-9 border-b-2 border-l-2"
                  style={{ borderColor: titan.cor }}
                />

                <div
                  className="pointer-events-none absolute right-0 top-0 z-30 h-9 w-9 border-r-2 border-t-2"
                  style={{ borderColor: titan.cor }}
                />

                <div
                  className="pointer-events-none absolute inset-x-0 bottom-0 z-30 h-[2px]"
                  style={{
                    background: `linear-gradient(to right, transparent, ${titan.cor}, transparent)`,
                    boxShadow: `0 0 15px ${titan.cor}`,
                  }}
                />
              </motion.article>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 flex flex-col items-center justify-center text-center"
        >
          <div className="mb-5 flex w-full max-w-xl items-center justify-center gap-5">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#ad6552]/60" />

            <Swords size={24} className="text-[#d9ad91]" />

            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#ad6552]/60" />
          </div>

          <p className="font-serif text-xs uppercase tracking-[0.3em] text-[#dcb69b] sm:text-sm">
            Uma herança de poder. Um destino em suas mãos.
          </p>
        </motion.div>
      </div>
    </section>
  );
}