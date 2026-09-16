"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import {
  ArrowDown,
  ArrowRight,
  Facebook,
  Instagram,
  MapPin,
  Menu,
  MessageCircle,
  MoveUpRight,
  X,
} from "lucide-react";
import productBlueBouquet from "@/assets/products/product-blue-bouquet.png";
import productCandyBouquet from "@/assets/products/product-candy-bouquet.png";
import productGiftBox from "@/assets/products/product-gift-box.png";
import productPinkBouquet from "@/assets/products/product-pink-bouquet.png";
import productRedWhite from "@/assets/products/product-red-white.png";
import productRoseHeart from "@/assets/products/product-rose-heart.png";
import avatar from "@/assets/reference/brand-avatar.png";
import Link from "next/link";

const bouquetHero = "/bouquet-hero-scroll.mp4";

const instagramUrl = "https://www.instagram.com/encan_tosmonteverde/";
const facebookUrl = "https://www.facebook.com/profile.php?id=61578135116547";
const whatsappUrl = "https://wa.me/2399845033";

const products = [
  {
    image: productRoseHeart,
    label: "Coração de rosas",
    category: "Buquês florais",
    tone: "bg-[#b8dec6]",
  },
  {
    image: productRedWhite,
    label: "Vermelho & branco",
    category: "Buquês florais",
    tone: "bg-[#c7dfc9]",
  },
  {
    image: productPinkBouquet,
    label: "Arranjo cor-de-rosa",
    category: "Arranjos",
    tone: "bg-[#acd9bf]",
  },
  {
    image: productBlueBouquet,
    label: "Azul intenso",
    category: "Buquês florais",
    tone: "bg-[#a7c9bb]",
  },
  {
    image: productCandyBouquet,
    label: "Buquê de oferta",
    category: "Peças para oferta",
    tone: "bg-[#d0dfb8]",
  },
  {
    image: productGiftBox,
    label: "Caixa presente",
    category: "Presentes",
    tone: "bg-[#b7d2c3]",
  },
];

const fadeUp = { hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } };
const transition = { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const };

function BrandMark({ dark = false }: { dark?: boolean }) {
  return (
    <span
      className={`flex items-center gap-3 ${dark ? "text-[#f7fbf3]" : "text-[#f7fbf3]"}`}
    >
      <span className="relative grid h-10 w-10 shrink-0 place-items-center overflow-hidden rounded-full border border-[#a9dfba]/75 bg-[#173f32]">
        <Image src={avatar} alt="" fill sizes="48px" className="object-cover" />
      </span>
      <span className="leading-none">
        <strong className="block font-display text-[18px] font-semibold tracking-[-.03em]">
          Encantos
        </strong>
        <small className="mt-1 block text-[9px] font-bold uppercase tracking-[.22em] text-[#a9dfba]">
          Monte Verde
        </small>
      </span>
    </span>
  );
}

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const heroVideoRef = useRef<HTMLVideoElement>(null);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const hero = heroRef.current;
    const video = heroVideoRef.current;
    if (!hero || !video) return;

    let rafId = 0;
    let targetProgress = 0;
    let smoothProgress = 0;
    let lastTimestamp = performance.now();
    let lastSeekTime = -1;

    // A smaller value follows the scroll more closely.
    // 70–100ms gives a smooth, natural feeling without making the video lag.
    const SMOOTHING_MS = 85;

    // Avoid asking the decoder for essentially the same frame over and over.
    const MIN_SEEK_DELTA = 1 / 45;

    const clamp01 = (value: number) => Math.min(1, Math.max(0, value));

    const readScrollProgress = () => {
      const scrollDistance = Math.max(
        1,
        hero.offsetHeight - window.innerHeight,
      );

      targetProgress = clamp01(
        -hero.getBoundingClientRect().top / scrollDistance,
      );
    };

    const render = (timestamp: number) => {
      const duration = video.duration;

      if (!Number.isFinite(duration) || duration <= 0) {
        rafId = requestAnimationFrame(render);
        return;
      }

      const deltaTime = Math.min(timestamp - lastTimestamp, 50);
      lastTimestamp = timestamp;

      // Frame-rate-independent exponential smoothing.
      const alpha = 1 - Math.exp(-deltaTime / SMOOTHING_MS);
      smoothProgress += (targetProgress - smoothProgress) * alpha;

      if (Math.abs(targetProgress - smoothProgress) < 0.00015) {
        smoothProgress = targetProgress;
      }

      const desiredTime = clamp01(smoothProgress) * duration;

      // Do not pile up seeks while the previous one is still being decoded.
      if (
        !video.seeking &&
        video.readyState >= HTMLMediaElement.HAVE_METADATA &&
        Math.abs(desiredTime - lastSeekTime) >= MIN_SEEK_DELTA
      ) {
        video.currentTime = desiredTime;
        lastSeekTime = desiredTime;
      }

      rafId = requestAnimationFrame(render);
    };

    const handleMetadata = () => {
      video.pause();
      readScrollProgress();

      smoothProgress = targetProgress;
      const initialTime = targetProgress * video.duration;

      video.currentTime = initialTime;
      lastSeekTime = initialTime;
    };

    const handleScroll = () => {
      // Scroll handler only reads layout and updates the target.
      // All visual work stays inside one RAF loop.
      readScrollProgress();
    };

    video.pause();
    video.addEventListener("loadedmetadata", handleMetadata);
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", readScrollProgress);

    readScrollProgress();

    if (video.readyState >= HTMLMediaElement.HAVE_METADATA) {
      handleMetadata();
    }

    rafId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(rafId);
      video.removeEventListener("loadedmetadata", handleMetadata);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", readScrollProgress);
    };
  }, []);

  return (
    <main className="page-grain overflow-x-clip bg-[#f5f7ef] text-[#193b31]">
      <header className="inset-x-0 top-4 shadow-2xl md:top-6 z-40 bg-white/90 fixed mx-auto md:rounded-full md:w-[80%]">
        <nav className="mx-auto flex max-w-384 items-center justify-between px-5 py-3 md:px-12 lg:px-16">
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
              Criações
            </Link>
            <Link
              href="#contacto"
              data-testid="link-nav-contacto"
              className="text-sm font-medium text-[#193b31] hover:text-[#193b31]/80"
            >
              Onde estamos
            </Link>
            <Link
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full border border-[#a9dfba] px-7 py-3 text-sm font-semibold text-[#f7fbf3] bg-[#193b31] hover:bg-[#193b31]/90"
            >
              Quero oferecer
            </Link>
          </div>
          <button
            type="button"
            data-testid="button-toggle-menu"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            onClick={() => setMenuOpen(!menuOpen)}
            className="focus-ring grid h-10 w-10 place-items-center rounded-full border border-[#f7fbf3]/40 text-[#f7fbf3] md:hidden"
          >
            {menuOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </nav>
      </header>

      <section
        ref={heroRef}
        id="inicio"
        className="hero-stage relative h-[500vh] bg-[#173f32] text-[#f7fbf3]"
      >
        <div className="sticky top-0 h-screen min-h-155 overflow-hidden bg-white">
          <div className="absolute inset-x-0 top-[25%] right-[8%] h-[65%]">
            <video
              ref={heroVideoRef}
              muted
              playsInline
              preload="auto"
              // poster={productRoseHeart.src}
              aria-label="Vídeo de um bouquet artesanal Encantos Monte Verde"
              className="h-full w-full object-contain object-center mix-blend-multiply brightness-125 saturate-125 md:object-right"
            >
              <source src={bouquetHero} type="video/mp4" />
            </video>
          </div>
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,42,32,.99)_0%,rgba(17,56,43,.94)_72%,rgba(23,63,50,.62)_100%)] md:bg-[linear-gradient(90deg,rgba(8,42,32,.99)_0%,rgba(17,56,43,.94)_34%,rgba(23,63,50,.54)_58%,rgba(23,63,50,.08)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(7,35,27,.82),transparent_44%)]" />
          <div className="relative mx-auto flex min-h-190 max-w-384 flex-col justify-center px-5 pb-20 pt-32 md:min-h-screen md:px-12 lg:px-16">
            <div className="max-w-[calc(100vw-2.5rem)] pt-8 md:max-w-175 md:pt-4">
              <motion.h1
                initial={false}
                animate="show"
                variants={fadeUp}
                className="max-w-175 font-sans text-[clamp(2.35rem,6.2vw,6.4rem)] font-bold leading-[.88] tracking-[-.07em]"
              >
                <span className="block whitespace-nowrap">Seu momento</span>
                <em className="block whitespace-nowrap font-display font-medium text-[#a9dfba]">
                  mais encantador.
                </em>
              </motion.h1>
              <motion.p
                initial={false}
                animate="show"
                variants={fadeUp}
                className="mt-8 max-w-[min(420px,calc(100vw-2.5rem))] text-[15px] leading-7 text-[#e4f2e8]/85"
              >
                Buquês, arranjos e presentes feitos à mão em São Tomé para
                transformar um momento simples numa memória bonita.
              </motion.p>
              <motion.div
                initial={false}
                animate="show"
                variants={fadeUp}
                className="mt-10 flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:gap-7"
              >
                <Link
                  href="#produtos"
                  data-testid="link-hero-produtos"
                  className="inline-flex min-w-52 items-center justify-between gap-5 rounded-full bg-[#7ccf9d] px-7 py-4 text-sm font-bold text-[#173f32] shadow-[0_14px_40px_rgba(5,33,24,.25)] hover:-translate-y-0.5 hover:bg-[#f7fbf3]"
                >
                  Ver criações <ArrowRight size={19} />
                </Link>
                <Link
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  data-testid="link-hero-whatsapp"
                  className="group inline-flex items-center gap-3 whitespace-nowrap border-b border-[#a9dfba]/70 pb-2 text-sm font-semibold text-[#f7fbf3] hover:border-[#f7fbf3] hover:text-[#a9dfba]"
                >
                  <Link href={whatsappUrl} target="_blank" rel="noreferrer">
                    <MessageCircle size={22} /> Pedir pelo WhatsApp
                  </Link>
                </Link>
              </motion.div>
              <div className="mt-11 flex items-center gap-2 text-xs text-[#d4efdc]/75">
                <MapPin size={15} className="text-[#a9dfba]" /> Entregas em São
                Tomé
              </div>
            </div>
          </div>
           <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 items-center justify-center gap-3 text-[10px] uppercase tracking-[.18em] text-[#d4efdc]/75">
            <span className="grid h-8 w-5 place-items-center rounded-full border border-[#d4efdc]/65">
              <ArrowDown size={13} />
            </span>{" "}
            Role para descobrir
          </div>
        </div>
      </section>

      <section
        id="produtos"
        className="bg-[#f5f7ef] px-5 py-20 md:px-10 md:py-28"
      >
        <div className="mx-auto max-w-360">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            transition={transition}
            className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end"
          >
            <div>
              <p className="eyebrow mb-4 text-[#2a8c60]">A nossa montra</p>
              <h2 className="font-sans text-5xl font-bold leading-[.88] tracking-[-.065em] md:text-7xl">
                Escolha um
                <br />
                <em className="font-display font-medium text-[#2a8c60]">
                  encanto.
                </em>
              </h2>
            </div>
            <p className="max-w-[320px] text-sm leading-6 text-[#526c60]">
              Algumas criações para inspirar a sua oferta. Fale connosco para
              encontrar a combinação certa.
            </p>
          </motion.div>
          <div className="grid grid-cols-2 gap-x-3 gap-y-9 md:grid-cols-3 md:gap-x-5 md:gap-y-12">
            {products.map((product, index) => (
              <motion.article
                key={product.label}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.16 }}
                variants={fadeUp}
                transition={{ ...transition, delay: index * 0.05 }}
                className="product-card group"
              >
                <Link
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  data-testid={`link-product-${index}`}
                  className="block focus-ring"
                >
                  <div
                    className={`relative aspect-[.86] overflow-hidden rounded-[28px] ${product.tone}`}
                  >
                    <Image
                      src={product.image}
                      alt={product.label}
                      fill
                      sizes="(max-width: 768px) 50vw, 33vw"
                      className="product-image object-cover"
                    />
                    <span className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-[#f7fbf3]/90 text-[#193b31] opacity-0 transition-opacity group-hover:opacity-100">
                      <MoveUpRight size={16} />
                    </span>
                  </div>
                  <div className="flex items-start justify-between gap-2 border-b border-[#193b31]/15 py-4">
                    <div>
                      <p className="eyebrow text-[#2a8c60]">
                        {product.category}
                      </p>
                      <h3 className="mt-1 font-display text-xl leading-none md:text-2xl">
                        {product.label}
                      </h3>
                    </div>
                    <ArrowRight
                      size={17}
                      className="mt-1 shrink-0 text-[#2a8c60] transition-transform group-hover:translate-x-1"
                    />
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="sobre"
        className="border-y border-[#285b44]/15 bg-[#cae8d5] px-5 py-20 md:px-10 md:py-24"
      >
        <div className="mx-auto max-w-360">
          <div className="grid gap-10 md:grid-cols-[.8fr_1.2fr] md:items-end">
            <div>
              <p className="eyebrow mb-4 text-[#24563e]">
                Para o que está a celebrar
              </p>
              <h2 className="font-sans text-5xl font-bold leading-[.88] tracking-[-.065em] md:text-6xl">
                Uma oferta
                <br />
                com <em className="font-display font-medium">presença.</em>
              </h2>
            </div>
            <div className="grid border-t border-[#4c7e60]/30 md:grid-cols-3 md:border-t-0">
              {["Aniversários", "Agradecimentos", "Giveaway"].map(
                (occasion, index) => (
                  <Link
                    key={occasion}
                    href={whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    data-testid={`link-occasion-${index}`}
                    className="group flex items-center justify-between border-b border-[#4c7e60]/30 py-5 text-lg md:border-b-0 md:border-l md:px-5 md:py-2"
                  >
                    <span className="font-display">{occasion}</span>
                    <ArrowRight
                      size={18}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </Link>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f5f7ef] px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-360 gap-10 lg:grid-cols-[.6fr_1.4fr]">
          <div className="flex flex-col justify-between">
            <div>
              <p className="eyebrow mb-4 text-[#2a8c60]">Visto de perto</p>
              <h2 className="font-sans text-5xl font-bold leading-[.88] tracking-[-.065em] md:text-6xl">
                A cor é<br />
                <em className="font-display font-medium text-[#2a8c60]">
                  a assinatura.
                </em>
              </h2>
              <p className="mt-6 max-w-75 text-sm leading-7 text-[#526c60]">
                Rosa, vermelho, azul e misturas vivas. Descubra mais criações no
                Instagram e no Facebook.
              </p>
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href={instagramUrl}
                target="_blank"
                rel="noreferrer"
                data-testid="link-lookbook-instagram"
                className="inline-flex items-center gap-2 rounded-full border border-[#285b44]/20 px-4 py-3 text-[11px] font-bold uppercase tracking-[.13em] hover:border-[#2a8c60] hover:text-[#2a8c60]"
              >
                <Instagram size={16} /> Instagram
              </Link>
              <Link
                href={facebookUrl}
                target="_blank"
                rel="noreferrer"
                data-testid="link-lookbook-facebook"
                className="inline-flex items-center gap-2 rounded-full border border-[#285b44]/20 px-4 py-3 text-[11px] font-bold uppercase tracking-[.13em] hover:border-[#2a8c60] hover:text-[#2a8c60]"
              >
                <Facebook size={16} /> Facebook
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-3 grid-rows-2 gap-2 md:gap-3">
            <div className="relative row-span-2 min-h-96 overflow-hidden rounded-[28px] bg-[#9fd1af]">
              <Image
                src={productBlueBouquet}
                alt="Buquê em tons de azul"
                fill
                sizes="33vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="relative min-h-48 overflow-hidden rounded-[28px] bg-[#dfeee3]">
              <Image
                src={productPinkBouquet}
                alt="Arranjo floral para presente"
                fill
                sizes="33vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="relative min-h-48 overflow-hidden rounded-[28px] bg-[#b8d8b5]">
              <Image
                src={productCandyBouquet}
                alt="Buquê de oferta artesanal"
                fill
                sizes="33vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="relative col-span-2 min-h-48 overflow-hidden rounded-[28px] bg-[#dceadd]">
              <Image
                src={productRedWhite}
                alt="Buquê vermelho e branco"
                fill
                sizes="66vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        id="contacto"
        className="bg-[#173f32] px-5 py-24 text-[#f7fbf3] md:px-10 md:py-32"
      >
        <div className="mx-auto grid max-w-360 gap-12 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="eyebrow mb-5 text-[#a9dfba]">Vamos criar o seu</p>
            <h2 className="max-w-185 font-sans text-6xl font-bold leading-[.84] tracking-[-.075em] md:text-8xl">
              Já sabe o<br />
              <em className="font-display font-medium text-[#a9dfba]">
                encanto?
              </em>
            </h2>
            <p className="mt-7 max-w-105 text-[15px] leading-7 text-[#e4f2e8]/80">
              Envie uma mensagem e diga-nos o que procura. Estamos em São Tomé.
            </p>
          </div>
          <div className="flex flex-col items-start gap-3 md:items-end">
            <Link
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              data-testid="link-contact-whatsapp"
              className="inline-flex items-center gap-3 rounded-full bg-[#7ccf9d] px-7 py-4 text-[11px] font-bold uppercase tracking-[.14em] text-[#173f32] hover:bg-[#f7fbf3]"
            >
              <MessageCircle size={18} /> Falar no WhatsApp
            </Link>
            <p className="text-xs text-[#b5d6c0]/75">+239 984 5033</p>
          </div>
        </div>
      </section>

      <footer className="bg-[#0f2c23] px-5 py-8 text-[#d8eee0] md:px-10">
        <div className="mx-auto flex max-w-360 flex-col gap-7 md:flex-row md:items-center md:justify-between">
          <Link
            href="#inicio"
            data-testid="link-footer-logo"
            aria-label="Voltar ao início"
          >
            <BrandMark dark />
          </Link>
          <div className="flex flex-wrap items-center gap-5 text-[10px] font-bold uppercase tracking-[.16em]">
            <Link
              href={instagramUrl}
              target="_blank"
              rel="noreferrer"
              data-testid="link-footer-instagram"
              className="hover:text-[#a9dfba]"
            >
              Instagram
            </Link>
            <Link
              href={facebookUrl}
              target="_blank"
              rel="noreferrer"
              data-testid="link-footer-facebook"
              className="hover:text-[#a9dfba]"
            >
              Facebook
            </Link>
            <span className="text-[#8ab49a]">São Tomé · Feito com amor</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
