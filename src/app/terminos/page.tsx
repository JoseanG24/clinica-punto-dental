import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Términos y Condiciones",
  description:
    "Términos y condiciones de uso del sitio web de Punto Dental Guatemala.",
  alternates: {
    canonical: "https://puntodentalguate.com/terminos",
  },
  robots: { index: false, follow: false },
};

export default function TerminosPage() {
  const year = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-[#0F2044] text-white py-6 px-6">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <Link
            href="/"
            className="text-white/70 hover:text-white text-sm transition-colors"
          >
            ← Volver al inicio
          </Link>
          <span className="text-sm text-white/40">puntodentalguate.com</span>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold text-[#0F2044] mb-2">
          Términos y Condiciones
        </h1>
        <p className="text-sm text-gray-400 mb-10">
          Última actualización: {year}
        </p>

        <div className="prose prose-slate max-w-none text-[#374151] leading-relaxed space-y-8">

          <section>
            <h2 className="text-xl font-bold text-[#0F2044] mb-3">
              1. Aceptación de los términos
            </h2>
            <p>
              Al acceder y utilizar el sitio web{" "}
              <strong>puntodentalguate.com</strong> (en adelante, &ldquo;el
              Sitio&rdquo;), usted acepta quedar vinculado por los presentes
              términos y condiciones. Si no está de acuerdo con alguno de ellos,
              le pedimos que se abstenga de utilizar el Sitio.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0F2044] mb-3">
              2. Objeto del sitio
            </h2>
            <p>
              Este Sitio tiene como finalidad ofrecer información general sobre
              los servicios odontológicos de <strong>Punto Dental</strong>,
              facilitar el contacto con la clínica y permitir el agendamiento de
              citas. No constituye una plataforma de consulta médica en línea ni
              sustituye la valoración presencial de un profesional de la salud.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0F2044] mb-3">
              3. Información médica — aviso importante
            </h2>
            <p>
              El contenido publicado en este Sitio es de carácter informativo y
              divulgativo. Ninguna información presentada debe interpretarse como
              diagnóstico, tratamiento o recomendación médica individualizada.
              Para cualquier condición de salud bucal, consulte siempre con un
              odontólogo calificado.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0F2044] mb-3">
              4. Uso aceptable
            </h2>
            <p>Al utilizar el Sitio, usted se compromete a:</p>
            <ul className="list-disc pl-6 mt-3 space-y-1">
              <li>No utilizar el Sitio con fines ilícitos o fraudulentos.</li>
              <li>
                No intentar acceder sin autorización a sistemas o datos
                asociados al Sitio.
              </li>
              <li>
                No reproducir, distribuir ni modificar el contenido del Sitio
                sin autorización escrita de Punto Dental.
              </li>
              <li>
                No enviar comunicaciones no solicitadas a través de los canales
                de contacto habilitados.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0F2044] mb-3">
              5. Propiedad intelectual
            </h2>
            <p>
              Todos los contenidos del Sitio (textos, imágenes, logotipos,
              diseño visual) son propiedad de Punto Dental o de sus respectivos
              titulares y están protegidos por las leyes de propiedad intelectual
              aplicables en Guatemala. Queda prohibida su reproducción total o
              parcial sin autorización expresa.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0F2044] mb-3">
              6. Disponibilidad del servicio
            </h2>
            <p>
              Punto Dental no garantiza la disponibilidad continua e
              ininterrumpida del Sitio. Nos reservamos el derecho de suspender,
              modificar o actualizar el Sitio en cualquier momento sin previo
              aviso.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0F2044] mb-3">
              7. Limitación de responsabilidad
            </h2>
            <p>
              Punto Dental no será responsable de daños directos, indirectos o
              consecuentes derivados del uso o la imposibilidad de uso de este
              Sitio, ni de errores u omisiones en su contenido. Los enlaces a
              sitios externos (WhatsApp, Instagram, Google Maps) se ofrecen por
              conveniencia; Punto Dental no controla ni es responsable de su
              contenido.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0F2044] mb-3">
              8. Modificaciones
            </h2>
            <p>
              Punto Dental se reserva el derecho de actualizar estos Términos en
              cualquier momento. La versión vigente siempre estará disponible en
              esta página con su fecha de última actualización. El uso continuado
              del Sitio tras cualquier modificación implica la aceptación de los
              nuevos términos.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0F2044] mb-3">
              9. Legislación aplicable
            </h2>
            <p>
              Estos Términos se rigen por las leyes vigentes de la República de
              Guatemala. Cualquier controversia derivada de su interpretación o
              aplicación se someterá a los tribunales competentes de Guatemala.
            </p>
          </section>

        </div>

        <div className="mt-12 p-5 bg-[#F7F8FA] rounded-xl border border-gray-100 text-sm text-gray-500">
          Para consultas sobre estos términos, contáctenos en{" "}
          <a
            href="mailto:puntodentalgt@gmail.com"
            className="text-[#2563EB] underline"
          >
            puntodentalgt@gmail.com
          </a>{" "}
          o por WhatsApp al{" "}
          <a
            href="https://wa.me/50252084159"
            className="text-[#2563EB] underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            +502 5208-4159
          </a>
          .
        </div>
      </main>

      <footer className="border-t border-gray-100 py-6 px-6 text-center text-xs text-gray-400">
        &copy; {year} Punto Dental. Todos los derechos reservados. ·{" "}
        <Link href="/" className="hover:text-gray-600 transition-colors">
          Volver al sitio
        </Link>
      </footer>
    </div>
  );
}
