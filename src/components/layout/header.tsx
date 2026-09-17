"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import { BrandMark } from "../brand/brand-mark";
import { siteLinks } from "@/config/site";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed left-1/2 top-4 z-40 w-[calc(100%-2rem)] max-w-340 -translate-x-1/2 rounded-full bg-white/90 shadow-2xl backdrop-blur-md md:top-6 md:w-[calc(100%-4rem)] lg:w-[calc(100%-6rem)]">
      <nav className="flex items-center justify-between px-5 py-3 md:px-12 lg:px-16">
        <Link
          href="#inicio"
          data-testid="link-logo"
          aria-label="Encantos Monte Verde, início"
          onClick={closeMenu}
        >
          <BrandMark />
        </Link>

        <div className="hidden items-center gap-9 md:flex">
          <Link
            href="#sobre"
            data-testid="link-nav-sobre"
            className="text-sm font-medium text-[#193b31] hover:text-[#193b31]/80"
          >
            A nossa história
          </Link>

          <Link
            href="#produtos"
            data-testid="link-nav-produtos"
            className="text-sm font-medium text-[#193b31] hover:text-[#193b31]/80"
          >
            Catálogo
          </Link>

          <Link
            href="#contacto"
            data-testid="link-nav-contacto"
            className="text-sm font-medium text-[#193b31] hover:text-[#193b31]/80"
          >
            Onde estamos
          </Link>

          <Link
            href={siteLinks.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-full border border-[#a9dfba] bg-[#193b31] px-7 py-3 text-sm font-semibold text-[#f7fbf3] hover:bg-[#193b31]/90"
          >
            Quero oferecer
          </Link>
        </div>

        <button
          type="button"
          data-testid="button-toggle-menu"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          onClick={() => setMenuOpen(!menuOpen)}
          className="focus-ring grid h-10 w-10 place-items-center rounded-full border border-[#193b31]/20 text-[#193b31] md:hidden"
        >
          {menuOpen ? <X size={19} /> : <Menu size={19} />}
        </button>
      </nav>
    </header>
  );
}