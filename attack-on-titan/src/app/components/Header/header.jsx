
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { name: "Início", href: "#inicio" },
  { name: "História", href: "#historia" },
  { name: "Personagens", href: "#personagens" },
  { name: "Titãs", href: "#titas" },
  { name: "Muralhas", href: "#muralhas" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const position = window.scrollY + window.innerHeight * 0.35;
      let current = "inicio";

      links.forEach((link) => {
        const section = document.getElementById(
          link.href.replace("#", "")
        );

        if (section && position >= section.offsetTop) {
          current = section.id;
        }
      });

      setActiveSection(current);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1],
        }}
        className={`fixed inset-x-0 top-0 z-50 w-full transition-all duration-500 ${
          scrolled || isOpen
            ? "border-b border-[#b72c27]/20 bg-[#10080c]/95 shadow-[0_8px_30px_rgba(0,0,0,0.3)] backdrop-blur-xl"
            : "bg-linear-to-b from-[#10080c]/80 to-transparent"
        }`}
      >
        <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6 md:px-10 lg:px-12">
          <Link
            href="#inicio"
            onClick={() => setIsOpen(false)}
            className="group flex flex-col items-start"
          >
            <span
              className="font-[family-name:var(--font-cinzel)] text-xl font-bold tracking-[0.12em] text-[#f4e8e1] transition-colors duration-300 group-hover:text-[#e35a4c] sm:text-2xl"
            >
              SHINGEKI
            </span>

            <span className="mt-0.5 text-[9px] font-medium uppercase tracking-[0.42em] text-[#c67a6d]">
              NO KYOJIN
            </span>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex xl:gap-10">
            {links.map((link) => {
              const isActive =
                activeSection === link.href.replace("#", "");

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`group relative py-2 font-[family-name:var(--font-cinzel)] text-[12px] font-medium tracking-[0.06em] transition-colors duration-300 ${
                    isActive
                      ? "text-[#f1b1a5]"
                      : "text-[#e9ddd8]/80 hover:text-[#f1b1a5]"
                  }`}
                >
                  {link.name}

                  <span
                    className={`absolute bottom-0 left-1/2 h-px -translate-x-1/2 bg-[#d34437] transition-all duration-300 ${
                      isActive
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <span className="h-px w-8 bg-[#b94b3d]/60" />

            <span className="font-[family-name:var(--font-cinzel)] text-[10px] tracking-[0.18em] text-[#d6a296]">
              自由の翼
            </span>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isOpen}
            className="flex items-center justify-center rounded-md border border-[#b94b3d]/30 bg-[#1c0e11]/60 p-2.5 text-[#f4e8e1] transition-colors hover:border-[#d34437] hover:text-[#e35a4c] lg:hidden"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden border-t border-[#b94b3d]/15 bg-[#10080c]/98 lg:hidden"
            >
              <div className="flex flex-col px-6 py-5 md:px-10">
                {links.map((link, index) => {
                  const isActive =
                    activeSection === link.href.replace("#", "");

                  return (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: -15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.3,
                        delay: index * 0.06,
                      }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center justify-between border-b border-white/5 py-4 font-[family-name:var(--font-cinzel)] text-sm tracking-wider transition-colors ${
                          isActive
                            ? "text-[#e35a4c]"
                            : "text-[#e9ddd8] hover:text-[#e35a4c]"
                        }`}
                      >
                        {link.name}

                        {isActive && (
                          <span className="h-1.5 w-1.5 rotate-45 bg-[#d34437]" />
                        )}
                      </Link>
                    </motion.div>
                  );
                })}

                <div className="mt-6 flex items-center justify-center gap-3">
                  <span className="h-px w-10 bg-[#b94b3d]/50" />

                  <span className="text-[11px] tracking-[0.25em] text-[#c67a6d]">
                    心臓を捧げよ
                  </span>

                  <span className="h-px w-10 bg-[#b94b3d]/50" />
                </div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
