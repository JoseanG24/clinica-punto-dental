"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Script from "next/script";

gsap.registerPlugin(ScrollTrigger);

const INSTAGRAM_URL = "https://www.instagram.com/puntodentalguate/";
const HANDLE = "@puntodentalguate";

const POST_URLS: string[] = [
  "https://www.instagram.com/p/DYYJ94JGXMF/",
  "https://www.instagram.com/reel/DYsQoiUOVmr/",
  "https://www.instagram.com/reel/DDAvusESbQf/",
];

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function EmbedCard({ url }: { url: string }) {
  return (
    <div className="ig-card rounded-2xl overflow-hidden w-full flex flex-col shadow-[0_2px_24px_rgba(15,32,68,0.08)] min-h-135">

      {/* Embed de Instagram — el script lo convierte en iframe; su interior no es estilizable */}
      <blockquote
        className="instagram-media !m-0 !min-w-0 !w-full !rounded-none !shadow-none !border-0"
        data-instgrm-captioned
        data-instgrm-permalink={url}
        data-instgrm-version="14"
        style={{
          background: "#FFF",
          border: 0,
          borderRadius: 0,
          boxShadow: "none",
          margin: 0,
          maxWidth: "100%",
          minWidth: 0,
          padding: 0,
          width: "100%",
        }}
      />
    </div>
  );
}

export default function InstagramFeed() {
  const sectionRef = useRef<HTMLElement>(null);

  const handleScriptLoad = () => {
    if (
      typeof window !== "undefined" &&
      (window as { instgrm?: { Embeds: { process: () => void } } }).instgrm
    ) {
      (
        window as { instgrm?: { Embeds: { process: () => void } } }
      ).instgrm!.Embeds.process();
    }
  };

  useGSAP(
    () => {
      gsap.from(".ig-head > *", {
        opacity: 0,
        y: 28,
        stagger: 0.1,
        duration: 0.75,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".ig-head",
          start: "top 87%",
          once: true,
        },
      });

      gsap.from(".ig-card", {
        opacity: 0,
        y: 52,
        stagger: 0.18,
        duration: 0.9,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".ig-grid",
          start: "top 83%",
          once: true,
        },
      });

      gsap.from(".ig-cta", {
        opacity: 0,
        y: 20,
        duration: 0.65,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".ig-cta",
          start: "top 92%",
          once: true,
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-[#F7F8FA]">
      <Script
        src="https://www.instagram.com/embed.js"
        strategy="lazyOnload"
        onLoad={handleScriptLoad}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="ig-head flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mb-12 lg:mb-14">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <InstagramIcon className="w-3.75 h-3.75 text-[#2563EB]" />
              <span className="text-[#2563EB] text-[11px] font-bold tracking-[0.22em] uppercase">
                Instagram
              </span>
            </div>
            <h2 className="text-[clamp(2rem,3.5vw,2.8rem)] font-bold text-[#0F2044] leading-[1.1]">
              Síguenos y descubre<br className="hidden sm:block" /> más resultados
            </h2>
          </div>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="self-start sm:self-auto shrink-0 flex items-center gap-2 text-sm font-semibold text-[#2563EB] border-b border-[#2563EB] pb-0.5 hover:text-[#1D4ED8] hover:border-[#1D4ED8] transition-colors"
          >
            {HANDLE}
          </a>
        </div>

        {/* Grid de posts */}
        <div className="ig-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {POST_URLS.map((url) => (
            <EmbedCard key={url} url={url} />
          ))}
        </div>

        {/* CTA */}
        <div className="ig-cta mt-10 sm:mt-12 flex justify-center">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-[#0F2044] text-white text-sm font-semibold px-7 py-3.5 rounded-md hover:bg-[#1a3a6e] transition-colors"
          >
            <InstagramIcon className="w-4 h-4" />
            Ver perfil completo
          </a>
        </div>

      </div>
    </section>
  );
}
