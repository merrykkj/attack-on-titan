
"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Filter, X } from "lucide-react";

const personagens = [
  {
    id: 1,
    nome: "Eren Yeager",
    imagem: "/img/eren.png",
    organizacao: "Tropa de Exploração",
    descricao:
      "Determinado a conquistar a liberdade, Eren Yeager enfrenta os maiores desafios da humanidade e se torna uma figura central na luta contra os Titãs.",
    especialidade: "Poder dos Titãs",
    origem: "Shiganshina",
  },
  {
    id: 2,
    nome: "Mikasa Ackerman",
    imagem: "/img/mikasa.png",
    organizacao: "Tropa de Exploração",
    descricao:
      "Uma das guerreiras mais habilidosas da humanidade, conhecida por sua força extraordinária, lealdade e domínio do equipamento de manobra.",
    especialidade: "Combate de elite",
    origem: "Território das Muralhas",
  },
  {
    id: 3,
    nome: "Armin Arlert",
    imagem: "/img/armin.png",
    organizacao: "Tropa de Exploração",
    descricao:
      "Um estrategista brilhante que utiliza sua inteligência e capacidade de observação para superar adversários muito mais poderosos.",
    especialidade: "Estratégia militar",
    origem: "Shiganshina",
  },
  {
    id: 4,
    nome: "Levi Ackerman",
    imagem: "/img/levi.png",
    organizacao: "Tropa de Exploração",
    descricao:
      "Conhecido como o soldado mais forte da humanidade, Levi é um capitão extremamente habilidoso e respeitado.",
    especialidade: "Combate com equipamento de manobra",
    origem: "Cidade Subterrânea",
  },
  {
    id: 5,
    nome: "Erwin Smith",
    imagem: "/img/erwin.png",
    organizacao: "Tropa de Exploração",
    descricao:
      "Comandante da Tropa de Exploração, Erwin é reconhecido por sua liderança, coragem e determinação em descobrir a verdade sobre o mundo.",
    especialidade: "Liderança e estratégia",
    origem: "Território das Muralhas",
  },
  {
    id: 6,
    nome: "Hange Zoë",
    imagem: "/img/hange.png",
    organizacao: "Tropa de Exploração",
    descricao:
      "Uma pesquisadora apaixonada pelo estudo dos Titãs, conhecida por sua curiosidade, inteligência e espírito inovador.",
    especialidade: "Pesquisa sobre Titãs",
    origem: "Território das Muralhas",
  },
  {
    id: 7,
    nome: "Dot Pixis",
    imagem: "/img/pixis.png",
    organizacao: "Guarnição",
    descricao:
      "Comandante da Guarnição responsável pela defesa das muralhas. Conhecido por sua inteligência, experiência militar e capacidade de tomar decisões difíceis em momentos de crise.",
    especialidade: "Comando e estratégia militar",
    origem: "Território das Muralhas",
  },
  {
    id: 8,
    nome: "Rico Brzenska",
    imagem: "/img/rico.png",
    organizacao: "Guarnição",
    descricao:
      "Uma soldado experiente da Guarnição que participou da operação de recuperação do Distrito de Trost. Destaca-se por sua disciplina, coragem e habilidade em combate.",
    especialidade: "Combate e liderança de esquadrão",
    origem: "Território das Muralhas",
  },
  {
    id: 9,
    nome: "Hannes",
    imagem: "/img/hannes.png",
    organizacao: "Guarnição",
    descricao:
      "Soldado da Guarnição que conhecia a família Yeager e teve um papel fundamental na infância de Eren e Mikasa. Apesar de seus medos, demonstrou coragem e lealdade.",
    especialidade: "Defesa e patrulhamento",
    origem: "Distrito de Shiganshina",
  },
  {
    id: 10,
    nome: "Kitz Woermann",
    imagem: "/img/kitz.png",
    organizacao: "Guarnição",
    descricao:
      "Capitão da Guarnição que participou dos acontecimentos no Distrito de Trost. Responsável por comandar soldados e tomar decisões durante situações de emergência.",
    especialidade: "Comando militar e defesa",
    origem: "Território das Muralhas",
  },
  {
    id: 11,
    nome: "Ian Dietrich",
    imagem: "/img/ian.png",
    organizacao: "Guarnição",
    descricao:
      "Líder de esquadrão da Guarnição que participou da missão de recuperação de Trost, demonstrando coragem e confiança em seus companheiros.",
    especialidade: "Liderança e combate",
    origem: "Território das Muralhas",
  },
  {
    id: 12,
    nome: "Mitabi Jarnach",
    imagem: "/img/mitabi.png",
    organizacao: "Guarnição",
    descricao:
      "Soldado experiente e líder de esquadrão da Guarnição que participou da defesa de Trost e enfrentou grandes riscos para proteger a humanidade.",
    especialidade: "Defesa e combate",
    origem: "Território das Muralhas",
  },
  {
    id: 13,
    nome: "Anka Rheinberger",
    imagem: "/img/anka.png",
    organizacao: "Guarnição",
    descricao:
      "Integrante da Guarnição e assistente de Dot Pixis, responsável por auxiliar o comandante nas operações e decisões militares.",
    especialidade: "Apoio ao comando",
    origem: "Território das Muralhas",
  },
  {
    id: 14,
    nome: "Gustav",
    imagem: "/img/gustav.png",
    organizacao: "Guarnição",
    descricao:
      "Integrante da Guarnição que atua ao lado de Dot Pixis, auxiliando na coordenação e organização das operações militares.",
    especialidade: "Coordenação militar",
    origem: "Território das Muralhas",
  },
  {
    id: 15,
    nome: "Nile Dok",
    imagem: "/img/nile.png",
    organizacao: "Polícia Militar",
    descricao:
      "Comandante da Polícia Militar, responsável por supervisionar as operações da organização e manter a ordem dentro das muralhas. Conhecido por sua experiência e por suas decisões diante dos conflitos políticos e militares.",
    especialidade: "Comando e administração militar",
    origem: "Território das Muralhas",
  },
  {
    id: 16,
    nome: "Annie Leonhart",
    imagem: "/img/annie.png",
    organizacao: "Polícia Militar",
    descricao:
      "Uma combatente extremamente habilidosa, conhecida por sua personalidade reservada e seu domínio das técnicas de luta corporal. Ingressou na Polícia Militar após concluir seu treinamento.",
    especialidade: "Combate corpo a corpo",
    origem: "Marley",
  },
  {
    id: 17,
    nome: "Hitch Dreyse",
    imagem: "/img/hitch.png",
    organizacao: "Polícia Militar",
    descricao:
      "Integrante da Polícia Militar conhecida por seu comportamento descontraído e suas observações sarcásticas. Apesar de sua aparente despreocupação, demonstra empatia e responsabilidade.",
    especialidade: "Patrulhamento e segurança interna",
    origem: "Território das Muralhas",
  },
  {
    id: 18,
    nome: "Marlowe Freudenberg",
    imagem: "/img/marlowe.png",
    organizacao: "Polícia Militar",
    descricao:
      "Soldado idealista que ingressou na Polícia Militar com o desejo de combater a corrupção e transformar a organização. Posteriormente, decidiu integrar a Tropa de Exploração.",
    especialidade: "Investigação e disciplina militar",
    origem: "Território das Muralhas",
  },
  {
    id: 19,
    nome: "Boris Feulner",
    imagem: "/img/boris.png",
    organizacao: "Polícia Militar",
    descricao:
      "Integrante da Polícia Militar que serviu ao lado de Annie Leonhart, Hitch Dreyse e Marlowe Freudenberg. Participou das atividades de patrulhamento e manutenção da segurança interna.",
    especialidade: "Patrulhamento e segurança",
    origem: "Território das Muralhas",
  },
  {
    id: 20,
    nome: "Djel Sannes",
    imagem: "/img/djel.png",
    organizacao: "Polícia Militar",
    descricao:
      "Integrante da Primeira Divisão Interior da Polícia Militar, envolvido em operações secretas destinadas a proteger os interesses do governo dentro das muralhas.",
    especialidade: "Interrogatório e operações secretas",
    origem: "Território das Muralhas",
  },
  {
    id: 21,
    nome: "Kenny Ackerman",
    imagem: "/img/kenny.png",
    organizacao: "Polícia Militar",
    descricao:
      "Conhecido como Kenny, o Estripador, liderou o Esquadrão de Controle Antipessoal da Primeira Divisão Interior. Era um combatente extremamente perigoso e habilidoso.",
    especialidade: "Combate armado e operações especiais",
    origem: "Cidade Subterrânea",
  },
  {
    id: 22,
    nome: "Traute Caven",
    imagem: "/img/traute.png",
    organizacao: "Polícia Militar",
    descricao:
      "Integrante do Esquadrão de Controle Antipessoal e uma das principais subordinadas de Kenny Ackerman. Destacava-se por sua disciplina e habilidade em operações militares.",
    especialidade: "Combate armado e operações especiais",
    origem: "Território das Muralhas",
  },
];

const filtros = [
  "Todos",
  "Tropa de Exploração",
  "Guarnição",
  "Polícia Militar",
];

export default function Personagens() {
  const [filtro, setFiltro] = useState("Todos");
  const [selecionado, setSelecionado] = useState(null);
  const [indice, setIndice] = useState(0);
  const [visiveis, setVisiveis] = useState(6);
  const [largura, setLargura] = useState(0);
  const carrosselRef = useRef(null);

  const filtrados = personagens.filter(
    (personagem) =>
      filtro === "Todos" || personagem.organizacao === filtro
  );

  const maxIndice = Math.max(0, filtrados.length - visiveis);
  const espaco = 16;

  const larguraCard =
    largura > 0
      ? (largura - (visiveis - 1) * espaco) / visiveis
      : 0;

  useEffect(() => {
    const elemento = carrosselRef.current;
    if (!elemento) return;

    const atualizar = () => {
      const larguraTela = window.innerWidth;

      if (larguraTela >= 1280) {
        setVisiveis(6);
      } else if (larguraTela >= 640) {
        setVisiveis(3);
      } else {
        setVisiveis(2);
      }

      setLargura(elemento.clientWidth);
    };

    atualizar();

    const observer = new ResizeObserver(atualizar);
    observer.observe(elemento);
    window.addEventListener("resize", atualizar);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", atualizar);
    };
  }, []);

  useEffect(() => {
    setIndice((atual) => Math.min(atual, maxIndice));
  }, [maxIndice]);

  useEffect(() => {
    if (!selecionado) return;

    const overflowAnterior = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const fechar = (event) => {
      if (event.key === "Escape") {
        setSelecionado(null);
      }
    };

    window.addEventListener("keydown", fechar);

    return () => {
      document.body.style.overflow = overflowAnterior;
      window.removeEventListener("keydown", fechar);
    };
  }, [selecionado]);

  const mudarFiltro = (novoFiltro) => {
    setFiltro(novoFiltro);
    setIndice(0);
  };

  const navegar = (direcao) => {
    setIndice((atual) =>
      Math.max(0, Math.min(maxIndice, atual + direcao))
    );
  };

  return (
    <section
      id="personagens"
      className="relative isolate w-full overflow-hidden bg-[#10080c] text-[#f6e8e2]"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-20 h-275 overflow-hidden">
        <Image
          src="/img/banner-personagens2.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-top"
        />
      </div>

      <div className="pointer-events-none absolute inset-0 -z-10 bg-[#10080c]/10" />

      <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-36 bg-linear-to-b from-[#10080c] to-transparent" />

      <div className="pointer-events-none absolute inset-x-0 top-175 -z-10 h-112.5 bg-linear-to-b from-transparent to-[#10080c]" />

      <div className="relative z-10 mx-auto w-full max-w-[1700px] px-5 pt-20 sm:px-8 lg:px-12 lg:pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <h2 className="font-serif text-[clamp(2.2rem,4.1vw,5.2rem)] font-normal uppercase leading-[1.05] tracking-[0.035em] text-[#f8e8e2] drop-shadow-[0_3px_12px_rgba(0,0,0,0.7)]">
            Aqueles que desafiaram
          </h2>

          <div className="mt-1 flex items-center justify-center gap-4 sm:gap-7">
            <span className="h-px w-12 bg-[#e7cfc8] sm:w-28 lg:w-40" />

            <h3 className="font-serif text-[clamp(2.8rem,5vw,6rem)] uppercase leading-none">
              <span className="mr-3 text-[#f6e8e2]">
                O
              </span>

              <span className="font-bold italic tracking-wide text-[#c91c22] drop-shadow-[0_0_18px_rgba(185,28,28,0.3)]">
                Destino
              </span>
            </h3>

            <span className="h-px w-12 bg-[#e7cfc8] sm:w-28 lg:w-40" />
          </div>

          <p className="mx-auto mt-5 max-w-4xl font-serif text-sm leading-relaxed text-[#eadbd6] sm:text-lg lg:text-xl">
            Conheça os soldados, guerreiros e figuras que marcaram a
            história da humanidade.
          </p>
        </motion.div>

        <div className="mt-10 flex flex-col items-center justify-center gap-5 lg:mt-12 lg:flex-row lg:gap-7">
          <div className="flex shrink-0 items-center gap-3 font-serif text-base text-[#f0e4df]">
            <Filter size={19} className="text-red-600" />
            <span>Filtrar por organização:</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {filtros.map((item) => {
              const ativo = filtro === item;

              return (
                <button
                  key={item}
                  onClick={() => mudarFiltro(item)}
                  aria-pressed={ativo}
                  className={`relative flex min-h-11 items-center justify-center gap-2 rounded-full border px-5 py-2 font-serif text-sm transition-colors duration-200 sm:px-7 sm:text-base ${ativo
                      ? "border-red-600 bg-red-950/60 text-white shadow-[0_0_18px_rgba(220,38,38,0.4)]"
                      : "border-[#b5a29e]/50 bg-[#13090c]/65 text-[#eadbd6] hover:border-red-600 hover:bg-red-950/30"
                    }`}
                >
                  {item === "Tropa de Exploração" && (
                    <span className="text-lg">⚔</span>
                  )}

                  {item === "Guarnição" && (
                    <span className="text-lg">♜</span>
                  )}

                  {item === "Polícia Militar" && (
                    <span className="text-lg">♞</span>
                  )}

                  {item}
                </button>
              );
            })}
          </div>
        </div>

        <div className="relative mt-10 lg:mt-12">
          {filtrados.length > visiveis && (
            <>
              <button
                onClick={() => navegar(-1)}
                disabled={indice === 0}
                aria-label="Personagens anteriores"
                className="absolute -left-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-red-700/70 bg-[#18090e]/95 text-white shadow-lg transition-colors hover:bg-red-900 disabled:cursor-not-allowed disabled:opacity-30 sm:-left-5"
              >
                <ChevronLeft size={25} />
              </button>

              <button
                onClick={() => navegar(1)}
                disabled={indice >= maxIndice}
                aria-label="Próximos personagens"
                className="absolute -right-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-red-700/70 bg-[#18090e]/95 text-white shadow-lg transition-colors hover:bg-red-900 disabled:cursor-not-allowed disabled:opacity-30 sm:-right-5"
              >
                <ChevronRight size={25} />
              </button>
            </>
          )}

          <div
            ref={carrosselRef}
            className="relative w-full overflow-hidden"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none invisible aspect-[3/5.2]"
              style={{
                width:
                  larguraCard > 0
                    ? `${larguraCard}px`
                    : `calc((100% - ${(visiveis - 1) * espaco}px) / ${visiveis})`,
              }}
            />

            {larguraCard > 0 && (
              <motion.div
                initial={false}
                animate={{
                  x: -(indice * (larguraCard + espaco)),
                }}
                transition={{
                  type: "tween",
                  duration: 0.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute inset-x-0 top-0 flex gap-4"
              >
                {filtrados.map((personagem) => (
                  <button
                    key={personagem.id}
                    onClick={() => setSelecionado(personagem)}
                    style={{
                      flex: `0 0 ${larguraCard}px`,
                    }}
                    className="group relative aspect-[3/5.2] shrink-0 overflow-hidden rounded-[17px] border border-red-700/80 bg-[#1a0c10] text-center shadow-[0_0_15px_rgba(90,0,0,0.25)] transition-[border-color,box-shadow] duration-300 hover:border-red-500 hover:shadow-[0_0_24px_rgba(220,38,38,0.4)]"
                  >
                    <Image
                      src={personagem.imagem}
                      alt={personagem.nome}
                      fill
                      unoptimized
                      sizes="(max-width: 640px) 50vw, (max-width: 1280px) 33vw, 17vw"
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-linear-to-t from-[#100508] via-[#100508]/15 via-50% to-transparent" />

                    <div className="absolute inset-x-0 bottom-0 flex flex-col items-center px-2 pb-3 sm:px-3 sm:pb-4">
                      <h3 className="min-h-14 font-serif text-[clamp(1.1rem,1.65vw,1.8rem)] uppercase leading-[1.05] text-[#f9e9e2] drop-shadow-[0_2px_5px_rgba(0,0,0,0.9)]">
                        {personagem.nome.split(" ")[0]}

                        <span className="block">
                          {personagem.nome
                            .split(" ")
                            .slice(1)
                            .join(" ")}
                        </span>
                      </h3>

                      <div className="my-3 flex w-full items-center justify-center gap-2">
                        <span className="h-px flex-1 bg-linear-to-r from-transparent to-[#e8c5bc]" />
                        <span className="text-[10px] text-[#f1d5cc]">
                          ✧
                        </span>
                        <span className="h-px flex-1 bg-linear-to-l from-transparent to-[#e8c5bc]" />
                      </div>

                      <p className="flex min-h-10 items-center justify-center gap-2 font-serif text-[10px] text-[#eee0d9] sm:text-xs xl:text-[13px]">
                        <span className="text-base text-[#d4c9c5]">
                          {personagem.organizacao === "Guarnição"
                            ? "♜"
                            : personagem.organizacao === "Polícia Militar"
                              ? "♞"
                              : "⚔"}
                        </span>

                        {personagem.organizacao}
                      </p>

                      <span className="mt-3 flex h-9 w-12 items-center justify-center rounded-md border border-red-700/80 bg-red-950/70 text-[#f4e6e1] transition-colors duration-300 group-hover:border-red-500 group-hover:bg-red-800">
                        <ChevronRight size={22} strokeWidth={2} />
                      </span>
                    </div>
                  </button>
                ))}
              </motion.div>
            )}
          </div>

          <div className="mt-6 flex h-5 items-center justify-center gap-2">
            {filtrados.length > visiveis &&
              Array.from(
                { length: maxIndice + 1 },
                (_, posicao) => (
                  <button
                    key={posicao}
                    onClick={() => setIndice(posicao)}
                    aria-label={`Ir para posição ${posicao + 1}`}
                    aria-current={
                      indice === posicao ? "true" : undefined
                    }
                    className={`h-1.5 rounded-full transition-all duration-300 ${indice === posicao
                        ? "w-8 bg-red-600"
                        : "w-2 bg-stone-500/60 hover:bg-red-400"
                      }`}
                  />
                )
              )}
          </div>
        </div>
      </div>

      <div className="pointer-events-none relative z-10 mx-auto -mt-2 w-full max-w-[1700px] sm:-mt-5">
        <div className="relative aspect-3/1 w-full sm:aspect-4/1 lg:aspect-5/1">
          <Image
            src="/img/reconhecimento-banner.png"
            alt="Soldados da Tropa de Exploração"
            fill
            sizes="100vw"
            className="object-contain object-bottom"
          />
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-20 bg-linear-to-t from-[#10080c] to-transparent" />

      <AnimatePresence>
        {selecionado && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-100 flex items-center justify-center bg-black/85 p-4 backdrop-blur-md"
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) {
                setSelecionado(null);
              }
            }}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label={selecionado.nome}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.2 }}
              className="relative grid max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-xl border border-red-800/70 bg-[#14090d] shadow-[0_0_60px_rgba(0,0,0,0.8)] md:grid-cols-2"
            >
              <button
                onClick={() => setSelecionado(null)}
                aria-label="Fechar"
                className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-red-800 bg-[#10080c]/80 text-white transition-colors hover:bg-red-800"
              >
                <X size={20} />
              </button>

              <div className="relative min-h-75 md:min-h-125">
                <Image
                  src={selecionado.imagem}
                  alt={selecionado.nome}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center"
                />

                <div className="absolute inset-0 bg-linear-to-t from-[#14090d] via-transparent to-transparent md:bg-linear-to-r md:from-transparent md:to-[#14090d]/50" />
              </div>

              <div className="flex flex-col justify-center p-7 sm:p-10">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-red-500">
                  {selecionado.organizacao}
                </p>

                <h3 className="font-serif text-4xl uppercase leading-tight text-[#f6e8e2] sm:text-5xl">
                  {selecionado.nome}
                </h3>

                <div className="my-6 h-px w-full bg-linear-to-r from-red-700 to-transparent" />

                <p className="font-serif text-sm leading-7 text-stone-300 sm:text-base">
                  {selecionado.descricao}
                </p>

                <div className="mt-8 space-y-5">
                  <div>
                    <span className="text-xs uppercase tracking-widest text-red-500">
                      Especialidade
                    </span>

                    <p className="mt-2 font-serif text-stone-200">
                      {selecionado.especialidade}
                    </p>
                  </div>

                  <div>
                    <span className="text-xs uppercase tracking-widest text-red-500">
                      Origem
                    </span>

                    <p className="mt-2 font-serif text-stone-200">
                      {selecionado.origem}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setSelecionado(null)}
                  className="mt-9 flex w-fit items-center gap-2 rounded-md border border-red-700 bg-red-950/40 px-5 py-3 font-serif text-sm text-white transition-colors hover:bg-red-800"
                >
                  Voltar aos personagens
                  <ChevronRight size={17} />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
