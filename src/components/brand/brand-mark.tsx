import Image from "next/image";

import avatar from "@/assets/reference/brand-avatar.png";
import { cormorant } from "@/lib/fonts";

type BrandMarkProps = {
  dark?: boolean;
};

export function BrandMark({ dark = false }: BrandMarkProps) {
  return (
    <span
      className={`flex items-center gap-3 ${
        dark ? "text-[#f7fbf3]" : "text-[#f7fbf3]"
      }`}
    >
      <span className="relative grid h-10 w-10 shrink-0 place-items-center overflow-hidden rounded-full border border-[#a9dfba]/75 bg-[#173f32]">
        <Image
          src={avatar}
          alt=""
          fill
          sizes="48px"
          className="object-cover"
        />
      </span>

      <span className="leading-none">
        <strong
          className={`${cormorant.className} block text-[20px] font-semibold tracking-tight`}
        >
          Encantos
        </strong>

        <small className="mt-1 block text-[9px] font-bold uppercase tracking-[.22em] text-[#a9dfba]">
          Monte Verde
        </small>
      </span>
    </span>
  );
}