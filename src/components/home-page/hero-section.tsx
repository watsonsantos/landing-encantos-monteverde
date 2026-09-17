"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowDown, ArrowRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { bouquetHero, siteLinks } from "@/config/site";
import { fadeUp } from "@/lib/animations";
import { cormorant } from "@/lib/fonts";

export function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const heroVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    const video = heroVideoRef.current;

    if (!hero || !video) return;

    let rafId = 0;
    let targetProgress = 0;
    let smoothProgress = 0;
    let lastTimestamp = performance.now();
    let lastSeekTime = -1;

    const SMOOTHING_MS = 85;
    const MIN_SEEK_DELTA = 1 / 45;

    const clamp01 = (value: number) =>
      Math.min(1, Math.max(0, value));

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

      const deltaTime = Math.min(
        timestamp - lastTimestamp,
        50,
      );

      lastTimestamp = timestamp;

      const alpha =
        1 - Math.exp(-deltaTime / SMOOTHING_MS);

      smoothProgress +=
        (targetProgress - smoothProgress) * alpha;

      if (
        Math.abs(targetProgress - smoothProgress) <
        0.00015
      ) {
        smoothProgress = targetProgress;
      }

      const desiredTime =
        clamp01(smoothProgress) * duration;

      if (
        !video.seeking &&
        video.readyState >=
          HTMLMediaElement.HAVE_METADATA &&
        Math.abs(desiredTime - lastSeekTime) >=
          MIN_SEEK_DELTA
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

      const initialTime =
        targetProgress * video.duration;

      video.currentTime = initialTime;
      lastSeekTime = initialTime;
    };

    const handleScroll = () => {
      readScrollProgress();
    };

    video.pause();

    video.addEventListener(
      "loadedmetadata",
      handleMetadata,
    );

    window.addEventListener(
      "scroll",
      handleScroll,
      { passive: true },
    );

    window.addEventListener(
      "resize",
      readScrollProgress,
    );

    readScrollProgress();

    if (
      video.readyState >=
      HTMLMediaElement.HAVE_METADATA
    ) {
      handleMetadata();
    }

    rafId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(rafId);

      video.removeEventListener(
        "loadedmetadata",
        handleMetadata,
      );

      window.removeEventListener(
        "scroll",
        handleScroll,
      );

      window.removeEventListener(
        "resize",
        readScrollProgress,
      );
    };
  }, []);

  return (
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
            aria-label="Vídeo de um bouquet artesanal Encantos Monte Verde"
            className="h-full w-full object-contain object-center mix-blend-multiply brightness-125 saturate-125 md:object-right"
          >
            <source
              src={bouquetHero}
              type="video/mp4"
            />
          </video>
        </div>

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,42,32,.99)_0%,rgba(17,56,43,.94)_72%,rgba(23,63,50,.62)_100%)] md:bg-[linear-gradient(90deg,rgba(8,42,32,.99)_0%,rgba(17,56,43,.94)_34%,rgba(23,63,50,.54)_58%,rgba(23,63,50,.08)_100%)]" />

        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(7,35,27,.82),transparent_44%)]" />

        <div className="relative z-10 mx-auto flex min-h-190 w-[calc(100%-2rem)] max-w-340 flex-col justify-center px-5 pb-28 pt-32 md:min-h-screen md:w-[calc(100%-4rem)] lg:w-[calc(100%-6rem)]">
          <div className="max-w-[calc(100vw-2.5rem)] pt-8 md:max-w-175 md:pt-4">
            <motion.h1
              initial={false}
              animate="show"
              variants={fadeUp}
              className="max-w-175 text-[clamp(2.35rem,6.2vw,6.4rem)] font-bold leading-[.88] tracking-[-.07em]"
            >
              <span className="block whitespace-nowrap">
                Seu momento
              </span>

              <em
                className={`${cormorant.className} block whitespace-nowrap font-medium italic text-[#a9dfba]`}
              >
                mais encantador.
              </em>
            </motion.h1>

            <motion.p
              initial={false}
              animate="show"
              variants={fadeUp}
              className="mt-8 max-w-[min(420px,calc(100vw-2.5rem))] text-[15px] leading-7 text-[#e4f2e8]/85"
            >
              Buquês, arranjos e presentes feitos à mão
              em São Tomé para transformar um momento
              simples numa memória bonita.
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
                className="inline-flex min-w-52 items-center justify-between gap-5 rounded-full bg-[#7ccf9d] px-7 py-4 text-sm font-bold text-[#173f32] shadow-[0_0_18px_rgba(124,207,157,0.45),0_0_40px_rgba(124,207,157,0.22)] transition-all duration-300 hover:bg-[#7ccf9d]/90 hover:shadow-[0_0_24px_rgba(124,207,157,0.55),0_0_52px_rgba(124,207,157,0.28)]"
              >
                Ver catálogo
                <ArrowRight size={19} />
              </Link>

              <Link
                href={siteLinks.whatsapp}
                target="_blank"
                rel="noreferrer"
                data-testid="link-hero-whatsapp"
                className="group inline-flex items-center gap-3 whitespace-nowrap text-sm font-semibold text-[#f7fbf3] transition-colors duration-300 hover:text-[#a9dfba]"
              >
                <FaWhatsapp className="size-7 shrink-0" />

                <span className="border-b border-[#a9dfba]/70 pb-1 transition-colors duration-300 group-hover:border-[#a9dfba]">
                  Pedir pelo WhatsApp
                </span>
              </Link>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-16 left-1/2 z-20 flex -translate-x-1/2 items-center justify-center">
          <span
            title="Rolar para próxima secção!"
            className="grid size-8 place-items-center rounded-full border border-[#a9dfba]/35 bg-[#a9dfba]/10 text-[#d4efdc] backdrop-blur-sm"
          >
            <ArrowDown
              size={14}
              className="motion-safe:animate-[scrollHint_1.8s_ease-in-out_infinite]"
            />
          </span>
        </div>
      </div>

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-20 overflow-hidden leading-0"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 1440 150"
          preserveAspectRatio="none"
          className="block h-22.5 w-full md:h-31.25 lg:h-37.5"
        >
          <path
            d="M0,38 C150,86 290,105 430,84 C565,64 670,26 805,30 C955,35 1050,94 1190,88 C1300,84 1372,54 1440,38 L1440,150 L0,150 Z"
            fill="#a9dfba"
            opacity="0.14"
            transform="translate(0 -10)"
          />

          <path
            d="M0,38 C150,86 290,105 430,84 C565,64 670,26 805,30 C955,35 1050,94 1190,88 C1300,84 1372,54 1440,38 L1440,150 L0,150 Z"
            fill="#f5f7ef"
          />

          <path
            d="M0,38 C150,86 290,105 430,84 C565,64 670,26 805,30 C955,35 1050,94 1190,88 C1300,84 1372,54 1440,38"
            fill="none"
            stroke="#a9dfba"
            strokeOpacity="0.26"
            strokeWidth="1.5"
          />
        </svg>
      </div>
    </section>
  );
}