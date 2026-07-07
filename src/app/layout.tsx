import type { Metadata, Viewport } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

const BASE_URL = "https://puntodentalguate.com";
const LAST_UPDATED = "2026-06-22";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Punto Dental | Clínica Dental en Guatemala",
    template: "%s | Punto Dental Guatemala",
  },
  description:
    "Clínica dental en Guatemala con más de 20 años de experiencia. Ortodoncia, implantes dentales, estética dental y cirugía maxilofacial. Consulta gratuita: +502 5208-4159.",
  keywords: [
    "clínica dental Guatemala",
    "dentista Guatemala",
    "ortodoncia Guatemala",
    "implantes dentales Guatemala",
    "estética dental Guatemala",
    "cirugía maxilofacial Guatemala",
    "Punto Dental Guatemala",
    "Dr. Ervin Guzmán Morales",
    "dentista Km 19 carretera El Salvador",
  ],
  authors: [{ name: "Dr. Ervin Guzmán Morales" }],
  creator: "Punto Dental",
  publisher: "Punto Dental",
  alternates: {
    canonical: BASE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_GT",
    url: BASE_URL,
    siteName: "Punto Dental Guatemala",
    title: "Punto Dental | Clínica Dental en Guatemala",
    description:
      "Más de 20 años transformando sonrisas en Guatemala. Ortodoncia, implantes, estética dental. Agenda tu consulta gratuita: +502 5208-4159.",
    images: [
      {
        url: `${BASE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Punto Dental — Clínica Dental Guatemala",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Punto Dental | Clínica Dental en Guatemala",
    description:
      "Más de 20 años transformando sonrisas en Guatemala. Ortodoncia, implantes, estética dental.",
    images: [`${BASE_URL}/og-image.jpg`],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

// ── JSON-LD Schemas ──────────────────────────────────────────────────────────

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  "@id": `${BASE_URL}/#dentist`,
  name: "Punto Dental",
  url: BASE_URL,
  logo: `${BASE_URL}/logos/puntodentallogo.webp`,
  image: `${BASE_URL}/images/clinica/imgclinica1.webp`,
  telephone: "+50252084159",
  email: "puntodentalgt@gmail.com",
  dateModified: LAST_UPDATED,
  description:
    "Clínica dental en Guatemala con más de 20 años de experiencia. Especialistas en ortodoncia, implantes dentales, estética dental y cirugía maxilofacial.",
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "Km 19.5 Carretera a El Salvador, Tecniscan Plaza Minuto, Clínica 6",
    addressLocality: "Guatemala",
    addressRegion: "Guatemala",
    addressCountry: "GT",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 14.5372,
    longitude: -90.4613,
  },
  hasMap: "https://maps.google.com/?q=Tecniscan+Plaza+Minuto+Guatemala",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:30",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "09:00",
      closes: "12:00",
    },
  ],
  priceRange: "$$",
  sameAs: ["https://www.instagram.com/puntodentalguate/"],
  employee: {
    "@type": "Person",
    "@id": `${BASE_URL}/#doctor`,
    name: "Dr. Ervin Guzmán Morales",
    jobTitle: "Odontólogo Especialista",
  },
  availableService: [
    { "@type": "MedicalProcedure", name: "Odontología General" },
    { "@type": "MedicalProcedure", name: "Ortodoncia" },
    { "@type": "MedicalProcedure", name: "Implantes Dentales" },
    { "@type": "MedicalProcedure", name: "Estética Dental" },
    { "@type": "MedicalProcedure", name: "Cirugía Maxilofacial" },
    { "@type": "MedicalProcedure", name: "Periodoncia" },
  ],
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${BASE_URL}/#doctor`,
  name: "Dr. Ervin Guzmán Morales",
  jobTitle: "Odontólogo Especialista",
  worksFor: { "@id": `${BASE_URL}/#dentist` },
  knowsAbout: [
    "Odontología General",
    "Estética Dental",
    "Prótesis y Rehabilitación",
    "Ortodoncia",
    "Cirugía Maxilofacial",
  ],
  image: `${BASE_URL}/images/clinica/dr2.png`,
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Ofrecen consulta de evaluación gratuita?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. La primera consulta de evaluación es completamente gratuita. En esa visita revisamos tu salud bucal y te presentamos un plan de tratamiento personalizado.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuáles son sus horarios de atención?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Atendemos de lunes a viernes de 8:30 a 18:00 y los sábados de 9:00 a 12:00. Los domingos permanecemos cerrados.",
      },
    },
    {
      "@type": "Question",
      name: "¿Dónde están ubicados?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nos encontramos en el Km 19.5 de la Carretera a El Salvador, Tecniscan Plaza Minuto, Clínica 6, Guatemala.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué especialidades manejan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Contamos con Odontología General, Ortodoncia, Implantes Dentales, Estética Dental y Periodoncia. Todo bajo un mismo techo.",
      },
    },
    {
      "@type": "Question",
      name: "¿Atienden emergencias dentales?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Si tienes un dolor agudo, fractura o cualquier urgencia dental, escríbenos por WhatsApp al +502 5208 4159 y te atendemos a la brevedad, incluso fuera del horario regular.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cómo puedo agendar una cita?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Puedes contactarnos directamente por WhatsApp al +502 5208 4159. Te respondemos a la brevedad.",
      },
    },
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${BASE_URL}/#website`,
  url: BASE_URL,
  name: "Punto Dental Guatemala",
  description:
    "Clínica dental en Guatemala — Ortodoncia, Implantes y Estética Dental",
  dateModified: LAST_UPDATED,
  publisher: { "@id": `${BASE_URL}/#dentist` },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${BASE_URL}/?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

// ────────────────────────────────────────────────────────────────────────────

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-GT" className={`${dmSans.variable} scroll-smooth`}>
      <head>
        {/* Preload hero background — true LCP element for this page */}
        <link rel="preload" as="image" href="/fondohero.webp" fetchPriority="high" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="min-h-full bg-white text-[#111827] antialiased">
        {children}
      </body>
    </html>
  );
}
