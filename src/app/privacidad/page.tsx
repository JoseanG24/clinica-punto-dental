import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description:
    "Política de privacidad de Punto Dental. Conoce cómo recopilamos, usamos y protegemos tus datos personales.",
  alternates: {
    canonical: "https://puntodentalguate.com/privacidad",
  },
  robots: { index: false, follow: false },
};

export default function PrivacidadPage() {
  const year = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
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
          Política de Privacidad
        </h1>
        <p className="text-sm text-gray-400 mb-10">
          Última actualización: {year}
        </p>

        <div className="prose prose-slate max-w-none text-[#374151] leading-relaxed space-y-8">

          <section>
            <h2 className="text-xl font-bold text-[#0F2044] mb-3">
              1. Responsable del tratamiento de datos
            </h2>
            <p>
              <strong>Punto Dental</strong> (en adelante, &ldquo;la Clínica&rdquo;), con
              dirección en Km 19.5 Carretera a El Salvador, Tecniscan Plaza
              Minuto, Clínica 6, Guatemala, es responsable del tratamiento de
              los datos personales que usted nos proporciona a través de este
              sitio web y nuestros canales de contacto.
            </p>
            <p className="mt-3">
              Correo de contacto:{" "}
              <a
                href="mailto:puntodentalgt@gmail.com"
                className="text-[#2563EB] underline"
              >
                puntodentalgt@gmail.com
              </a>
              <br />
              Teléfono:{" "}
              <a href="tel:+50252084159" className="text-[#2563EB] underline">
                +502 5208-4159
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0F2044] mb-3">
              2. Datos que recopilamos
            </h2>
            <p>
              Recopilamos únicamente los datos que usted nos proporciona de
              forma voluntaria al contactarnos:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-1">
              <li>Nombre completo</li>
              <li>Número de teléfono (a través de WhatsApp)</li>
              <li>Dirección de correo electrónico (si la comparte)</li>
              <li>Consulta o motivo de contacto</li>
            </ul>
            <p className="mt-3">
              No recopilamos datos sensibles de salud sin su consentimiento
              explícito y por los medios adecuados.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0F2044] mb-3">
              3. Finalidad del tratamiento
            </h2>
            <p>Sus datos se utilizan exclusivamente para:</p>
            <ul className="list-disc pl-6 mt-3 space-y-1">
              <li>Responder a sus consultas y agendar citas</li>
              <li>Enviar confirmaciones y recordatorios de citas</li>
              <li>Brindar seguimiento post-tratamiento</li>
              <li>Mejorar nuestros servicios</li>
            </ul>
            <p className="mt-3">
              No utilizamos sus datos para marketing sin su consentimiento, ni
              los vendemos ni cedemos a terceros.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0F2044] mb-3">
              4. Base legal del tratamiento
            </h2>
            <p>
              El tratamiento de sus datos se basa en su consentimiento voluntario
              al contactarnos, y en la necesidad de ejecutar la prestación del
              servicio médico solicitado.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0F2044] mb-3">
              5. Plazo de conservación
            </h2>
            <p>
              Conservamos sus datos durante el tiempo necesario para la
              prestación del servicio y el período legal aplicable para registros
              de salud en Guatemala. Una vez cumplida la finalidad, los datos
              son eliminados de forma segura.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0F2044] mb-3">
              6. Sus derechos
            </h2>
            <p>
              Usted tiene derecho a acceder, rectificar, cancelar u oponerse al
              tratamiento de sus datos personales. Para ejercer estos derechos,
              contáctenos en:
            </p>
            <p className="mt-3">
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
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0F2044] mb-3">
              7. Cookies y tecnologías de seguimiento
            </h2>
            <p>
              Este sitio web puede utilizar cookies técnicas necesarias para su
              correcto funcionamiento. No utilizamos cookies de seguimiento
              publicitario de terceros sin su consentimiento.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0F2044] mb-3">
              8. Seguridad
            </h2>
            <p>
              Adoptamos medidas técnicas y organizativas para proteger sus datos
              contra el acceso no autorizado, pérdida o divulgación. El sitio
              opera bajo protocolo HTTPS cifrado.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0F2044] mb-3">
              9. Servicios de terceros
            </h2>
            <p>
              El sitio integra los siguientes servicios de terceros, cada uno
              con su propia política de privacidad:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-1">
              <li>
                <strong>WhatsApp</strong> (Meta Platforms) — para comunicación y
                agendamiento
              </li>
              <li>
                <strong>Google Maps</strong> — para mostrar nuestra ubicación
              </li>
              <li>
                <strong>Instagram</strong> (Meta Platforms) — para mostrar
                contenido de redes sociales
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0F2044] mb-3">
              10. Cambios a esta política
            </h2>
            <p>
              Nos reservamos el derecho de actualizar esta política de
              privacidad. La versión vigente siempre estará disponible en esta
              página con su fecha de última actualización.
            </p>
          </section>

        </div>

        <div className="mt-12 p-5 bg-[#F7F8FA] rounded-xl border border-gray-100 text-sm text-gray-500">
          Si tiene dudas sobre esta política, escríbanos a{" "}
          <a
            href="mailto:puntodentalgt@gmail.com"
            className="text-[#2563EB] underline"
          >
            puntodentalgt@gmail.com
          </a>{" "}
          o por WhatsApp al +502 5208-4159.
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
