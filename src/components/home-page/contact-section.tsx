// import Link from "next/link";
// import { MessageCircle } from "lucide-react";

// import { siteLinks } from "@/config/site";
// import { cormorant } from "@/lib/fonts";

// export function ContactSection() {
//   return (
//     <section
//       id="contacto"
//       className="bg-[#173f32] px-5 py-24 text-[#f7fbf3] md:px-10 md:py-32"
//     >
//       <div className="mx-auto grid max-w-360 gap-12 md:grid-cols-[1fr_auto] md:items-end">
//         <div>
//           <p className="eyebrow mb-5 text-[#a9dfba]">
//             Vamos criar o seu
//           </p>

//           <h2 className="max-w-185 text-6xl font-bold leading-[.84] tracking-[-.075em] md:text-8xl">
//             Já sabe o
//             <br />

//             <em
//               className={`${cormorant.className} font-medium italic text-[#a9dfba]`}
//             >
//               encanto?
//             </em>
//           </h2>

//           <p className="mt-7 max-w-105 text-[15px] leading-7 text-[#e4f2e8]/80">
//             Envie uma mensagem e diga-nos o que procura.
//             Estamos em São Tomé.
//           </p>
//         </div>

//         <div className="flex flex-col items-start gap-3 md:items-end">
//           <Link
//             href={siteLinks.whatsapp}
//             target="_blank"
//             rel="noreferrer"
//             data-testid="link-contact-whatsapp"
//             className="inline-flex items-center gap-3 rounded-full bg-[#7ccf9d] px-7 py-4 text-[11px] font-bold uppercase tracking-[.14em] text-[#173f32] hover:bg-[#f7fbf3]"
//           >
//             <MessageCircle size={18} />
//             Falar no WhatsApp
//           </Link>

//           <p className="text-xs text-[#b5d6c0]/75">
//             +239 984 5033
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

import { siteLinks } from "@/config/site";
import { cormorant } from "@/lib/fonts";

export function ContactSection() {
  return (
    <section
      id="contacto"
      className="relative overflow-hidden bg-[#e7f2e8] px-5 py-20 text-[#173f32] md:px-10 md:py-28"
    >
      {/* detalhe de fundo subtil */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-1/2 size-96 -translate-y-1/2 rounded-full bg-[#a9dfba]/20 blur-3xl"
      />

      <div className="relative mx-auto max-w-340">
        <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-end md:gap-16">
          {/* Copy */}
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-[#2a8c60]" />

              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#2a8c60]">
                Fale connosco
              </p>
            </div>

            <h2 className="max-w-3xl text-[clamp(3rem,6vw,5.5rem)] font-bold leading-[0.88] tracking-[-0.065em]">
              Quer oferecer
              <br />
              <em
                className={`${cormorant.className} font-medium italic text-[#2a8c60]`}
              >
                algo especial?
              </em>
            </h2>

            <p className="mt-7 max-w-117.5 text-[15px] leading-7 text-[#526c60]">
              Conte-nos para que ocasião é e o que tinha em mente. Se ainda
              estiver na dúvida, ajudamos a encontrar uma boa opção.
            </p>
          </div>

          {/* CTA */}
          <div className="flex flex-col items-start md:items-end">
            <Link
              href={siteLinks.whatsapp}
              target="_blank"
              rel="noreferrer"
              data-testid="link-contact-whatsapp"
              className="group inline-flex items-center gap-3 rounded-full bg-[#173f32] px-6 py-4 text-sm font-bold text-[#f7fbf3] shadow-[0_10px_30px_rgba(23,63,50,0.14)] transition-all duration-300 hover:bg-[#245c48] hover:shadow-[0_12px_34px_rgba(23,63,50,0.18)]"
            >
              <span className="grid size-8 place-items-center rounded-full bg-[#7ccf9d]/15">
                <FaWhatsapp className="size-4.25 text-[#a9dfba]" />
              </span>

              <span>Falar no WhatsApp</span>

              <ArrowRight
                size={15}
                className="ml-1 transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <p className="mt-3 text-[11px] text-[#526c60]/70">+239 984 5033</p>
          </div>
        </div>

        {/* separador para o footer */}
        <div className="mt-14 h-px w-full bg-[#173f32]/10 md:mt-18" />
      </div>
    </section>
  );
}
