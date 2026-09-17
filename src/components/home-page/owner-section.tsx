import Image, { StaticImageData } from "next/image";

import { cormorant } from "@/lib/fonts";

type OwnerSectionProps = {
  image: StaticImageData;
  name: string;
};

export function OwnerSection({
  image,
  name,
}: OwnerSectionProps) {
  return (
    <section
      id="sobre"
      className="bg-[#f5f7ef] px-5 py-20 text-[#193b31] md:px-10 md:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-300">
        <div className="grid items-center gap-14 md:grid-cols-[minmax(380px,470px)_1fr] md:gap-16 lg:gap-24">
          {/* Retrato */}
          <div className="relative mx-auto w-full max-w-117.5 md:mx-0">
            <div className="relative pb-9 pl-5 pt-5 sm:pl-7 sm:pt-7">
              {/* Plano de fundo */}
              <div
                aria-hidden="true"
                className="absolute bottom-0 left-0 top-0 w-[78%] rounded-[30px] bg-[#dcebe0]"
              />

              {/* Detalhe subtil */}
              <div
                aria-hidden="true"
                className="absolute right-2 top-0 flex items-center gap-2"
              >
                <span className="h-px w-8 bg-[#2a8c60]/45" />
                <span className="size-1.5 rounded-full bg-[#7ccf9d]" />
              </div>

              {/* Fotografia */}
              <div className="relative ml-auto w-[94%]">
                <div className="relative aspect-4/5 overflow-hidden rounded-3xl bg-[#dfe9e1] shadow-[0_18px_45px_rgba(23,63,50,0.10)]">
                  <Image
                    src={image}
                    alt={`${name}, responsável pela Encantos Monte Verde`}
                    fill
                    sizes="(max-width: 768px) 92vw, 450px"
                    className="object-cover object-center"
                  />

                  {/* Profundidade suave na base */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-[#173f32]/18 to-transparent"
                  />
                </div>

                {/* Legenda sobreposta */}
                <div className="absolute -bottom-6 -left-5 max-w-57.5 rounded-2xl border border-[#193b31]/8 bg-[#f8faf5] px-4 py-3.5 shadow-[0_12px_30px_rgba(23,63,50,0.08)] sm:-left-7">
                  <div className="flex items-center gap-2">
                    <span className="h-px w-5 bg-[#2a8c60]" />

                    <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-[#2a8c60]">
                      Encantos Monte Verde
                    </span>
                  </div>

                  <p
                    className={`${cormorant.className} mt-1.5 text-[20px] font-medium italic leading-tight text-[#193b31]`}
                  >
                    Por {name}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Conteúdo */}
          <div className="max-w-147.5">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-[#2a8c60]" />

              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#2a8c60]">
                Quem está por trás
              </p>
            </div>

            <h2 className="text-[44px] font-bold leading-[0.92] tracking-[-0.055em] sm:text-[52px] lg:text-[62px]">
              Conheça a{" "}
              <em
                className={`${cormorant.className} font-medium italic text-[#2a8c60]`}
              >
                {name}.
              </em>
            </h2>

            <div className="mt-7 max-w-135 space-y-4 text-[15px] leading-7 text-[#526c60]">
              <p>
                É a {name} quem está à frente da Encantos Monte Verde e
                acompanha de perto cada pedido.
              </p>

              <p>
                Desde a escolha das cores até aos últimos detalhes, cada peça
                é preparada com atenção para combinar com a ocasião e com
                aquilo que cada cliente procura.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}