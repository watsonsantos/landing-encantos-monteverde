// import Link from "next/link";

// import { siteLinks } from "@/config/site";
// import { BrandMark } from "../brand/brand-mark";

// export function Footer() {
//   return (
//     <footer className="bg-[#0f2c23] px-5 py-8 text-[#d8eee0] md:px-10">
//       <div className="mx-auto flex max-w-360 flex-col gap-7 md:flex-row md:items-center md:justify-between">
//         <Link
//           href="#inicio"
//           data-testid="link-footer-logo"
//           aria-label="Voltar ao início"
//         >
//           <BrandMark dark />
//         </Link>

//         <div className="flex flex-wrap items-center gap-5 text-[10px] font-bold uppercase tracking-[.16em]">
//           <Link
//             href={siteLinks.instagram}
//             target="_blank"
//             rel="noreferrer"
//             data-testid="link-footer-instagram"
//             className="hover:text-[#a9dfba]"
//           >
//             Instagram
//           </Link>

//           <Link
//             href={siteLinks.facebook}
//             target="_blank"
//             rel="noreferrer"
//             data-testid="link-footer-facebook"
//             className="hover:text-[#a9dfba]"
//           >
//             Facebook
//           </Link>

//           <span className="text-[#8ab49a]">
//             São Tomé · Feito com amor
//           </span>
//         </div>
//       </div>
//     </footer>
//   );
// }

import Link from "next/link";
import { ArrowUp, Facebook, Instagram } from "lucide-react";

import { siteLinks } from "@/config/site";
import Image from "next/image";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/6 bg-[#0f2c23] text-[#d8eee0]">
      <div className="mx-auto max-w-340 px-5 py-8 md:px-10">
        <div className="flex flex-col gap-7 md:flex-row md:items-center md:justify-between">
          {/* Marca */}
          <div className="flex flex-col gap-2">
            <Link
              href="#inicio"
              data-testid="link-footer-logo"
              aria-label="Encantos Monte Verde — voltar ao início"
              className="w-fit"
            >
              <Image
                src="/images/logo.webp"
                alt="Logotipo Encantos Monte Verde"
                width={1000}
                height={1000}
                unoptimized
                priority
                quality={100}
                className="h-10 w-40"
              />
            </Link>

            <p className="max-w-[320px] text-[11px] leading-5 text-[#a9c8b2]/80">
              {/* Criações feitas à mão para momentos que merecem ser lembrados. */}
              Feito com amor
            </p>
          </div>

          {/* Navegação */}
          <nav
            aria-label="Navegação do rodapé"
            className="flex flex-wrap items-center gap-x-6 gap-y-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#bfd5c5]/65"
          >
            <Link
              href="#produtos"
              className="transition-colors duration-300 hover:text-[#a9dfba]"
            >
              Catálogo
            </Link>

            <Link
              href="#sobre"
              className="transition-colors duration-300 hover:text-[#a9dfba]"
            >
              A nossa história
            </Link>

            <Link
              href="#contacto"
              className="transition-colors duration-300 hover:text-[#a9dfba]"
            >
              Contacto
            </Link>
          </nav>

          {/* Redes */}
          <div className="flex items-center gap-2">
            <Link
              href={siteLinks.instagram}
              target="_blank"
              rel="noreferrer"
              data-testid="link-footer-instagram"
              aria-label="Instagram da Encantos Monte Verde"
              className="grid size-9 place-items-center rounded-full border border-white/8 text-[#b7cebd]/70 transition-all duration-300 hover:border-[#a9dfba]/30 hover:text-[#a9dfba]"
            >
              <Instagram size={15} />
            </Link>

            <Link
              href={siteLinks.facebook}
              target="_blank"
              rel="noreferrer"
              data-testid="link-footer-facebook"
              aria-label="Facebook da Encantos Monte Verde"
              className="grid size-9 place-items-center rounded-full border border-white/8 text-[#b7cebd]/70 transition-all duration-300 hover:border-[#a9dfba]/30 hover:text-[#a9dfba]"
            >
              <Facebook size={15} />
            </Link>

            <Link
              href="#inicio"
              aria-label="Voltar ao topo"
              className="ml-1 grid size-9 place-items-center rounded-full border border-white/8 text-[#b7cebd]/70 transition-all duration-300 hover:border-[#a9dfba]/30 hover:text-[#a9dfba]"
            >
              <ArrowUp size={15} />
            </Link>
          </div>
        </div>

        {/* Linha inferior */}
        <div className="mt-7 flex flex-col gap-2 border-t border-white/6 pt-5 text-[9px] uppercase tracking-[0.12em] text-[#789686]/55 sm:flex-row sm:items-center sm:justify-between">
          <span>© {currentYear} Encantos Monte Verde</span>

          <span>São Tomé e Príncipe</span>
        </div>
      </div>
    </footer>
  );
}
