"use client";

import {
  CakeSlice,
  Gem,
  HandHeart,
  Heart,
  type LucideIcon,
} from "lucide-react";
import {
  motion,
  useReducedMotion,
} from "motion/react";

import { cormorant } from "@/lib/fonts";

type Occasion = {
  title: string;
  description: string;
  icon: LucideIcon;
  iconColor: string;
  iconBackground: string;
};

const occasions: Occasion[] = [
  {
    title: "Aniversários",
    description:
      "Um detalhe especial para tornar o dia ainda mais bonito.",
    icon: CakeSlice,
    iconColor: "#9f6276",
    iconBackground:
      "linear-gradient(145deg, #fff8f9 0%, #f5e1e6 52%, #eacdd6 100%)",
  },
  {
    title: "Dia dos Namorados",
    description:
      "Para surpreender quem gosta com algo pensado para esse momento.",
    icon: Heart,
    iconColor: "#b75266",
    iconBackground:
      "linear-gradient(145deg, #fff7f7 0%, #f5dadd 52%, #e9c2c9 100%)",
  },
  {
    title: "Casamentos",
    description:
      "Uma forma delicada de acompanhar um dia tão importante.",
    icon: Gem,
    iconColor: "#648574",
    iconBackground:
      "linear-gradient(145deg, #fbfdf9 0%, #e3eee5 52%, #cee0d3 100%)",
  },
  {
    title: "Agradecimentos",
    description:
      "Um gesto simples para dizer obrigado de uma forma especial.",
    icon: HandHeart,
    iconColor: "#877954",
    iconBackground:
      "linear-gradient(145deg, #fffdf6 0%, #f1ead5 52%, #e1d5ae 100%)",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export function OccasionsSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="ocasioes"
      className="relative overflow-hidden bg-[#cae8d5] px-5 py-20 text-[#193b31] md:px-10 md:py-24 lg:py-28"
    >
      {/* textura de fundo muito subtil */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.35),transparent_28%),radial-gradient(circle_at_85%_75%,rgba(42,140,96,0.08),transparent_28%)]"
      />

      <div className="relative mx-auto max-w-310">
        <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-start lg:gap-20">
          {/* Introdução */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{
              duration: 0.65,
              ease,
            }}
            className="max-w-117.5 lg:sticky lg:top-32"
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-[#2a8c60]" />

              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#24563e]">
                Para cada ocasião
              </p>
            </div>

            <h2 className="text-[44px] font-bold leading-[0.92] tracking-[-0.055em] sm:text-5xl md:text-[58px]">
              Há sempre um
              <br />

              <em
                className={`${cormorant.className} font-medium italic text-[#2a8c60]`}
              >
                bom motivo.
              </em>
            </h2>

            <p className="mt-6 max-w-97.5 text-[15px] leading-7 text-[#456353]">
              Seja para celebrar alguém, agradecer ou simplesmente
              fazer uma surpresa, há momentos que merecem um gesto
              especial.
            </p>
          </motion.div>

          {/* Ocasiões */}
          <div className="grid gap-3 sm:grid-cols-2 md:gap-4">
            {occasions.map((occasion, index) => {
              const Icon = occasion.icon;

              return (
                <motion.article
                  key={occasion.title}
                  initial={{
                    opacity: 0,
                    y: 14,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.25,
                  }}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.055,
                    ease,
                  }}
                  className="group relative overflow-hidden rounded-3xl border border-[#285b44]/10 bg-[#f2f8f2]/45 p-5 backdrop-blur-[2px] transition-[background-color,border-color,transform] duration-500 hover:-translate-y-0.5 hover:border-[#285b44]/15 hover:bg-[#f5faf5]/60 md:p-6"
                >
                  {/* brilho subtil no hover */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-14 -top-14 size-32 rounded-full bg-white/35 blur-3xl opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                  />

                  <div className="relative flex items-start gap-5">
                    {/* Ícone */}
                    <div className="shrink-0">
                      <motion.div
                        animate={
                          reduceMotion
                            ? undefined
                            : {
                                y: [0, -1.75, 0],
                              }
                        }
                        transition={
                          reduceMotion
                            ? undefined
                            : {
                                duration: 6.5 + index * 0.35,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: index * 0.6,
                              }
                        }
                        className="relative grid size-14.5 place-items-center rounded-[19px]"
                        style={{
                          background:
                            occasion.iconBackground,
                          boxShadow:
                            "0 10px 24px rgba(23,63,50,0.09), inset 0 1px 1px rgba(255,255,255,0.9)",
                        }}
                      >
                        {/* luz */}
                        <span
                          aria-hidden="true"
                          className="absolute left-[15%] top-[12%] h-[23%] w-[45%] rounded-full bg-white/60 blur-[5px]"
                        />

                        {/* sombra inferior */}
                        <span
                          aria-hidden="true"
                          className="absolute bottom-[10%] left-1/2 h-2.5 w-[58%] -translate-x-1/2 rounded-full bg-[#173f32]/6 blur-[5px]"
                        />

                        <Icon
                          size={25}
                          strokeWidth={1.55}
                          className="relative z-10"
                          style={{
                            color: occasion.iconColor,
                            filter:
                              "drop-shadow(0 2px 2px rgba(23,63,50,0.10))",
                          }}
                        />

                        <span
                          aria-hidden="true"
                          className="pointer-events-none absolute inset-0 rounded-[19px] ring-1 ring-inset ring-white/50"
                        />
                      </motion.div>
                    </div>

                    {/* Texto */}
                    <div className="pt-1">
                      <h3
                        className={`${cormorant.className} text-[26px] font-semibold leading-none tracking-[-0.02em] text-[#193b31]`}
                      >
                        {occasion.title}
                      </h3>

                      <p className="mt-3 max-w-67.5 text-[13px] leading-6 text-[#456353]/80">
                        {occasion.description}
                      </p>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}