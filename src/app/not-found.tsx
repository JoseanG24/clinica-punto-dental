import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0F2044] flex flex-col items-center justify-center px-6 text-center">
      <p className="text-[#93B4F0] text-[11px] font-bold tracking-[0.22em] uppercase mb-6">
        Error 404
      </p>
      <h1 className="text-[clamp(5rem,18vw,12rem)] font-bold text-white leading-none tracking-tight mb-4">
        404
      </h1>
      <p className="text-white/60 text-lg max-w-[360px] leading-relaxed mb-10">
        La página que buscas no existe o fue movida.
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 bg-[#2563EB] text-white font-semibold px-7 py-3.5 rounded-md hover:bg-[#1D4ED8] transition-colors text-sm tracking-wide"
        >
          Volver al inicio
        </Link>
        <a
          href="https://wa.me/50252084159"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 border border-white/25 text-white font-medium px-7 py-3.5 rounded-md hover:border-white/50 transition-colors text-sm tracking-wide"
        >
          Contactar por WhatsApp
        </a>
      </div>
    </div>
  );
}
