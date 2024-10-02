import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

const serviceData = {
  "odontologia-general": {
    title: "Odontología General",
    description: "Cuidado dental preventivo y tratamientos para mantener tu boca sana.",
    images: [
      "/images/odontologia-general1.jpg",
      "/images/odontologia-general2.jpg",
      "/images/odontologia-general3.jpg",
    ],
    details: "Nuestros servicios de odontología general incluyen chequeos dentales, limpiezas, tratamientos de caries y otras necesidades preventivas para mantener tu salud dental óptima.",
  },
  "ortodoncia": {
    title: "Ortodoncia",
    description: "Corrección de maloclusiones y alineación de los dientes para una sonrisa perfecta.",
    images: [
      "/images/ortodoncia1.jpg",
      "/images/ortodoncia2.jpg",
      "/images/ortodoncia3.jpg",
    ],
    details: "Ofrecemos tratamientos de ortodoncia para corregir la alineación de los dientes y mejorar la mordida. Utilizamos métodos tradicionales y modernos para lograr una sonrisa perfecta.",
  },
  "implantes-dentales": {
    title: "Implantes Dentales",
    description: "Reemplazo de dientes perdidos con implantes duraderos y de aspecto natural.",
    images: [
      "/images/implantes-dentales1.jpg",
      "/images/implantes-dentales2.jpg",
      "/images/implantes-dentales3.jpg",
    ],
    details: "Nuestros implantes dentales son una solución duradera y estética para reemplazar dientes perdidos. Utilizamos materiales de alta calidad para garantizar un aspecto natural y funcionalidad.",
  },
  "estetica-dental": {
    title: "Estética Dental",
    description: "Mejora la apariencia de tu sonrisa con tratamientos estéticos personalizados.",
    images: [
      "/images/estetica-dental1.jpg",
      "/images/estetica-dental2.jpg",
      "/images/estetica-dental3.jpg",
    ],
    details: "Ofrecemos una variedad de tratamientos estéticos para mejorar tu sonrisa, incluyendo blanqueamiento dental, carillas y remodelación de encías.",
  },
  "periodoncia": {
    title: "Periodoncia",
    description: "Tratamientos especializados para las encías y el soporte de los dientes.",
    images: [
      "/images/periodoncia1.jpg",
      "/images/periodoncia2.jpg",
      "/images/periodoncia3.jpg",
    ],
    details: "Nuestros servicios de periodoncia se enfocan en el tratamiento de enfermedades de las encías y otros problemas relacionados con el soporte de los dientes. Mantenemos tus encías saludables para una sonrisa duradera.",
  },
};

export default function ServiceDetailPage({ params }) {
  const { id } = params;
  const service = serviceData[id];

  if (!service) return <p>Servicio no encontrado</p>;

  return (
    <>
      <Head>
        <title>{`${service.title} - Clínica Punto Dental`}</title>
        <meta name="description" content={service.description} />
        <meta property="og:title" content={`${service.title} - Clínica Punto Dental`} />
        <meta property="og:description" content={service.description} />
        <meta property="og:image" content={service.images[0]} />
        <meta property="og:url" content={`https://tudominio.com/servicios/${id}`} />
      </Head>

      <section className="bg-[#05192e] text-gray-100 py-32">
        <div className="container mx-auto px-4 md:px-10">
          {/* Título del Servicio */}
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
            {service.title}
          </h1>

          {/* Galería de Imágenes */}
          {service.images && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {service.images.map((image, index) => (
                <div key={index} className="flex justify-center">
                  <Image
                    src={image}
                    alt={`${service.title} - imagen ${index + 1}`}
                    width={400}
                    height={300}
                    className="rounded-lg shadow-lg object-cover"
                  />
                </div>
              ))}
            </div>
          )}

          {/* Descripción del Servicio */}
          <p className="text-lg md:text-xl text-center mb-6">
            {service.description}
          </p>

          {/* Detalles del Servicio */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              Detalles del Servicio
            </h2>
            <p className="text-base md:text-lg text-gray-300">
              {service.details}
            </p>
          </div>

          {/* Botón para volver a la página principal */}
          <div className="mt-8 text-center">
            <Link href="/">
              <button className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300">
                Volver a la página principal
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
