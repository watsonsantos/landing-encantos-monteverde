// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { motion } from "motion/react";
// import {
//   ArrowRight,
//   MoveUpRight,
//   Sparkles,
// } from "lucide-react";
// import { FaWhatsapp } from "react-icons/fa";

// import { fadeUp } from "@/lib/animations";
// import { cormorant } from "@/lib/fonts";
// import { products } from "@/data/products";
// import { siteLinks } from "@/config/site";

// const cardTransition = {
//   duration: 0.55,
//   ease: [0.22, 1, 0.36, 1] as const,
// };

// export function ProductsSection() {
//   return (
//     <section
//       id="produtos"
//       className="relative overflow-hidden bg-[#f5f7ef] px-5 py-20 md:px-10 md:py-24"
//     >
//       {/* brilho ambiente subtil */}
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute -right-40 top-16 size-80 rounded-full bg-[#a9dfba]/8 blur-3xl"
//       />

//       <div className="relative mx-auto max-w-340">
//         {/* Cabeçalho */}
//         <motion.div
//           initial="hidden"
//           whileInView="show"
//           viewport={{
//             once: true,
//             amount: 0.25,
//           }}
//           variants={fadeUp}
//           transition={cardTransition}
//           className="mb-10 flex flex-col gap-6 md:mb-12 md:flex-row md:items-end md:justify-between"
//         >
//           <div className="max-w-2xl">
//             <div className="mb-4 flex items-center gap-2">
//               <span className="grid size-7 place-items-center rounded-full bg-[#173f32] text-[#a9dfba]">
//                 <Sparkles size={12} />
//               </span>

//               <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#2a8c60]">
//                 O nosso catálogo
//               </p>
//             </div>

//             <h2 className="text-5xl font-bold leading-[0.9] tracking-[-0.06em] text-[#193b31] md:text-6xl">
//               Escolha o seu
//               <br />

//               <em
//                 className={`${cormorant.className} font-medium italic text-[#2a8c60]`}
//               >
//                 encanto.
//               </em>
//             </h2>
//           </div>

//           <div className="max-w-xs">
//             <p className="text-sm leading-6 text-[#526c60]">
//               Descubra algumas das nossas criações e encontre
//               uma oferta para cada momento especial.
//             </p>

//             <div className="mt-4 flex items-center gap-2 text-[11px] font-semibold text-[#193b31]/55">
//               <span className="size-1.5 rounded-full bg-[#7ccf9d]" />
//               {products.length} criações em destaque
//             </div>
//           </div>
//         </motion.div>

//         {/* Catálogo */}
//         <div className="grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4 xl:gap-5">
//           {products.map((product, index) => {
//             const whatsappMessage = encodeURIComponent(
//               `Olá! Gostaria de saber mais sobre "${product.label}".`,
//             );

//             const whatsappProductUrl =
//               `${siteLinks.whatsapp}?text=${whatsappMessage}`;

//             return (
//               <motion.article
//                 key={product.label}
//                 initial={{
//                   opacity: 0,
//                   y: 12,
//                 }}
//                 whileInView={{
//                   opacity: 1,
//                   y: 0,
//                 }}
//                 viewport={{
//                   once: true,
//                   amount: 0.12,
//                 }}
//                 transition={{
//                   duration: 0.55,
//                   ease: [0.22, 1, 0.36, 1],
//                   delay: index * 0.035,
//                 }}
//                 className="group"
//               >
//                 <div className="overflow-hidden rounded-[22px] border border-[#193b31]/8 bg-white/70 shadow-[0_10px_35px_rgba(23,63,50,0.045)] transition-[border-color,box-shadow] duration-500 ease-out hover:border-[#7ccf9d]/30 hover:shadow-[0_14px_40px_rgba(23,63,50,0.075)]">
//                   {/* Imagem */}
//                   <div
//                     className={`relative aspect-[0.95] overflow-hidden ${product.tone}`}
//                   >
//                     <Image
//                       src={product.image}
//                       alt={product.label}
//                       fill
//                       sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
//                       className="object-cover transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.015]"
//                     />

//                     {/* Categoria */}
//                     <span className="absolute left-3 top-3 rounded-full border border-white/30 bg-white/80 px-2.5 py-1.5 text-[8px] font-bold uppercase tracking-[0.14em] text-[#193b31] backdrop-blur-md">
//                       {product.category}
//                     </span>

//                     {/* Ícone decorativo/interativo */}
//                     <span className="absolute right-3 top-3 grid size-8 place-items-center rounded-full bg-[#173f32]/90 text-[#f7fbf3] opacity-0 transition-all duration-500 ease-out group-hover:opacity-100">
//                       <MoveUpRight size={13} />
//                     </span>
//                   </div>

//                   {/* Conteúdo */}
//                   <div className="p-4">
//                     <p className="mb-1.5 text-[8px] font-bold uppercase tracking-[0.16em] text-[#2a8c60]">
//                       Feito à mão
//                     </p>

//                     <h3
//                       className={`${cormorant.className} text-[23px] font-semibold leading-[0.95] tracking-[-0.02em] text-[#193b31]`}
//                     >
//                       {product.label}
//                     </h3>

//                     <div className="my-4 h-px bg-[#193b31]/8" />

//                     {/* Disponibilidade */}
//                     <div className="mb-3 flex items-center justify-between gap-3">
//                       <div className="min-w-0">
//                         <p className="text-[8px] font-bold uppercase tracking-[0.14em] text-[#526c60]/55">
//                           Disponibilidade
//                         </p>

//                         <p className="mt-1 text-[11px] font-semibold text-[#193b31]">
//                           Consulte antes de encomendar
//                         </p>
//                       </div>

//                       <span className="flex shrink-0 items-center gap-1.5 text-[9px] font-semibold text-[#2a8c60]">
//                         <span className="size-1.5 rounded-full bg-[#7ccf9d]" />
//                         WhatsApp
//                       </span>
//                     </div>

//                     {/* CTA WhatsApp */}
//                     <Link
//                       href={whatsappProductUrl}
//                       target="_blank"
//                       rel="noreferrer"
//                       data-testid={`link-product-${index}`}
//                       aria-label={`Pedir ${product.label} pelo WhatsApp`}
//                       className="group/button flex w-full items-center justify-between rounded-full bg-[#173f32] px-3.5 py-3 text-[#f7fbf3] shadow-[0_8px_20px_rgba(23,63,50,0.12)] transition-[background-color,color,box-shadow] duration-300 ease-out hover:bg-[#245f49] hover:shadow-[0_10px_26px_rgba(23,63,50,0.16)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7ccf9d] focus-visible:ring-offset-2"
//                     >
//                       <span className="flex items-center gap-2.5">
//                         <span className="grid size-7 place-items-center rounded-full bg-[#7ccf9d]/15">
//                           <FaWhatsapp className="size-4 text-[#a9dfba]" />
//                         </span>

//                         <span className="text-[11px] font-bold">
//                           Pedir pelo WhatsApp
//                         </span>
//                       </span>

//                       <ArrowRight
//                         size={14}
//                         className="transition-transform duration-300 ease-out group-hover/button:translate-x-0.5"
//                       />
//                     </Link>
//                   </div>
//                 </div>
//               </motion.article>
//             );
//           })}
//         </div>

//         {/* CTA final */}
//         <motion.div
//           initial={{
//             opacity: 0,
//             y: 12,
//           }}
//           whileInView={{
//             opacity: 1,
//             y: 0,
//           }}
//           viewport={{
//             once: true,
//             amount: 0.35,
//           }}
//           transition={{
//             duration: 0.6,
//             ease: [0.22, 1, 0.36, 1],
//           }}
//           className="mt-12 flex flex-col items-start justify-between gap-5 rounded-3xl border border-[#193b31]/8 bg-[#e7f2e8] px-6 py-6 md:flex-row md:items-center md:px-8"
//         >
//           <div>
//             <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#2a8c60]">
//               Procura algo diferente?
//             </p>

//             <p
//               className={`${cormorant.className} mt-1 text-2xl font-semibold text-[#193b31]`}
//             >
//               Criamos algo especialmente para si.
//             </p>
//           </div>

//           <Link
//             href={siteLinks.whatsapp}
//             target="_blank"
//             rel="noreferrer"
//             className="group inline-flex shrink-0 items-center gap-2.5 rounded-full bg-[#173f32] px-5 py-3 text-xs font-semibold text-[#f7fbf3] transition-all duration-300 hover:bg-[#7ccf9d] hover:text-[#173f32]"
//           >
//             <FaWhatsapp className="size-4" />

//             Falar connosco

//             <ArrowRight
//               size={14}
//               className="transition-transform duration-300 ease-out group-hover:translate-x-0.5"
//             />
//           </Link>
//         </motion.div>
//       </div>
//     </section>
//   );
// }


"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

import { cormorant } from "@/lib/fonts";
import { products } from "@/data/products";
import { siteLinks } from "@/config/site";

const ease = [0.22, 1, 0.36, 1] as const;

export function ProductsSection() {
  return (
    <section
      id="produtos"
      className="relative overflow-hidden bg-[#f5f7ef] px-5 py-20 md:px-10 md:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-310">
        {/* Cabeçalho */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{
            duration: 0.6,
            ease,
          }}
          className="mb-10 md:mb-12"
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-[#2a8c60]" />

                <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#2a8c60]">
                  Catálogo
                </span>
              </div>

              <h2 className="max-w-xl text-[42px] font-bold leading-[0.92] tracking-[-0.055em] text-[#193b31] sm:text-5xl md:text-[56px]">
                Criações para
                <br />

                <em
                  className={`${cormorant.className} font-medium italic text-[#2a8c60]`}
                >
                  momentos especiais.
                </em>
              </h2>
            </div>

            {/* <div className="max-w-85 md:pb-1">
              <p className="text-sm leading-6 text-[#526c60]">
                Escolha uma criação ou fale connosco para
                personalizar a sua oferta.
              </p>

              <Link
                href={siteLinks.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="group mt-4 inline-flex items-center gap-2 text-xs font-bold text-[#193b31]"
              >
                Ver opções personalizadas

                <ArrowRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div> */}
          </div>
        </motion.div>

        {/* Produtos */}
        <div className="grid grid-cols-1 gap-x-5 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product, index) => {
            const message = encodeURIComponent(
              `Olá! Gostaria de saber mais sobre "${product.label}".`,
            );

            const whatsappUrl =
              `${siteLinks.whatsapp}?text=${message}`;

            return (
              <motion.article
                key={product.label}
                initial={{
                  opacity: 0,
                  y: 6,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.55,
                  ease,
                  delay: Math.min(index * 0.035, 0.12),
                }}
                className="group"
              >
                <div className="overflow-hidden rounded-[20px] border border-[#193b31]/[0.07] bg-white/65 transition-colors duration-300 hover:border-[#2a8c60]/20">
                  {/* Imagem */}
                  <div
                    className={`relative aspect-4/3 overflow-hidden ${product.tone}`}
                  >
                    <Image
                      src={product.image}
                      alt={product.label}
                      fill
                      sizes="
                        (max-width: 640px) 100vw,
                        (max-width: 1024px) 50vw,
                        (max-width: 1280px) 33vw,
                        25vw
                      "
                      className="object-cover transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.012]"
                    />

                    {/* Label da categoria */}
                    {/* <span className="absolute left-3 top-3 rounded-full border border-white/10 bg-[#173f32]/75 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.14em] text-[#f7fbf3] shadow-[0_4px_14px_rgba(10,40,30,0.12)] backdrop-blur-md md:left-4 md:top-4">
                      {product.category}
                    </span> */}
                  </div>

                  {/* Conteúdo */}
                  <div className="p-4">
                    <h3
                      className={`${cormorant.className} text-[23px] font-semibold leading-none tracking-[-0.02em] text-[#193b31]`}
                    >
                      {product.label}
                    </h3>

                    <p className="mt-2 text-[11px] leading-5 text-[#526c60]">
                      Uma criação pensada para tornar a sua
                      oferta ainda mais especial.
                    </p>

                    {/* CTA */}
                    <Link
                      href={whatsappUrl}
                      target="_blank"
                      rel="noreferrer"
                      data-testid={`link-product-${index}`}
                      aria-label={`Pedir ${product.label} pelo WhatsApp`}
                      className="group/button mt-4 flex h-11 w-full items-center justify-between rounded-full bg-[#e3f0e7] px-4 text-[#173f32] transition-colors duration-300 hover:bg-[#173f32] hover:text-[#f7fbf3] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7ccf9d] focus-visible:ring-offset-2"
                    >
                      <span className="flex items-center gap-2">
                        <FaWhatsapp
                          size={16}
                          className="text-[#2a8c60] transition-colors duration-300 group-hover/button:text-[#a9dfba]"
                        />

                        <span className="text-[11px] font-bold">
                          Pedir pelo WhatsApp
                        </span>
                      </span>

                      <ArrowRight
                        size={14}
                        className="transition-transform duration-300 group-hover/button:translate-x-0.5"
                      />
                    </Link>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* CTA final */}
        <motion.div
          initial={{
            opacity: 0,
            y: 6,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.4,
          }}
          transition={{
            duration: 0.6,
            ease,
          }}
          className="mt-14 flex flex-col gap-5 border-t border-[#193b31]/10 pt-8 md:mt-16 md:flex-row md:items-center md:justify-between"
        >
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#2a8c60]">
              Não encontrou o que procurava?
            </p>

            <p
              className={`${cormorant.className} mt-2 text-[26px] font-medium leading-none text-[#193b31] md:text-[30px]`}
            >
              Também criamos{" "}
              <em className="italic text-[#2a8c60]">
                baseando nas suas ideias.
              </em>
            </p>
          </div>

          <Link
            href={siteLinks.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex w-fit items-center gap-3 rounded-full bg-[#173f32] px-5 py-3.5 text-xs font-bold text-[#f7fbf3] transition-colors duration-300 hover:bg-[#245c48]"
          >
            <FaWhatsapp
              size={17}
              className="text-[#a9dfba]"
            />

            Falar pelo WhatsApp

            <ArrowRight
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}