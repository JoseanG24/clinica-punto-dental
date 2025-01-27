export const clinicSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Punto Dental",
    "image": "https://www.tusitio.com/images/logo.png",
    "description": "Clínica dental especializada en odontología general, ortodoncia, implantes dentales y más.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "GGCH+XJ6, Unnamed Road, San Jorge Muxbal",
      "addressLocality": "Ciudad de Guatemala",
      "addressRegion": "Guatemala",
      "postalCode": "01010",
      "addressCountry": "GT"
    },
    "telephone": "+502 5208 4159",
    "email": "puntodentalgt@gmail.com",
    "url": "https://www.tusitio.com",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:30",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Saturday"],
        "opens": "09:00",
        "closes": "12:00"
      }
    ],
    "priceRange": "$$",
    "service": [
      {
        "@type": "Service",
        "name": "Odontología General"
      },
      {
        "@type": "Service",
        "name": "Ortodoncia"
      },
      {
        "@type": "Service",
        "name": "Implantes Dentales"
      },
      {
        "@type": "Service",
        "name": "Estética Dental"
      },
      {
        "@type": "Service",
        "name": "Periodoncia"
      }
    ]
  };