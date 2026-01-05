
// src/app/page.tsx

import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      {/* Navbar */}
      <header className="border-b border-zinc-200">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="/" className="flex items-center gap-3">
            <Image
              src="/AURIF-logo.png"  // Cambia esta ruta al logo que tengas
              alt="Aurif Logo"
              width={56}
              height={56}
              priority
            />
            <div className="flex flex-col leading-tight">
              <span className="text-lg font-bold tracking-wide text-zinc-900">
                Aurif Centro Audiofoniátrico
              </span>
              <span className="text-xs text-zinc-500">Escucha, Entiende y Comunícate</span>
            </div>
          </a>
          <nav className="hidden gap-6 text-sm text-zinc-700 md:flex">
            <a className="hover:text-zinc-900" href="#servicios">Servicios</a>
            <a className="hover:text-zinc-900" href="#contacto">Contacto</a>
          </nav>
          <a
            href="#contacto"
            className="rounded-lg bg-purple-700 px-4 py-2 text-sm font-medium text-white hover:bg-purple-800"
          >
            Consulatar disponibilidad
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-linear-to-b from-purple-400 to-purple-600">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center">
          <p className="mx-auto inline-flex items-center rounded-full bg-white/70 px-4 py-2 text-xs font-medium text-zinc-900">
            Atención especializada en audición y foniatría
          </p>

          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white md:text-6xl">
            Centro de atención para problemas de lenguaje, audición
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base text-white/80 md:text-lg">
            Tratamiento especializado para la tartamudez, aprendizaje, voz y audición. Soluciones personalizadas.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#contacto"
              className="rounded-lg bg-purple-400 px-6 py-3 text-sm font-semibold text-white hover:bg-purple-600"
            >
              Solicitar cotización
            </a>
            <a
              href="#servicios"
              className="rounded-lg border border-zinc-900/20 bg-white/70 px-6 py-3 text-sm font-semibold text-zinc-900 hover:bg-white"
            >
              Ver servicios
            </a>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl font-bold">Servicios Especializados</h2>
        <p className="mt-2 text-zinc-600">
          Enfocados en tu salud auditiva y comunicación.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold">Lenguaje</h3>
            <p className="mt-2 text-sm text-zinc-600">
              Diagnóstico y tratamiento de problemas relacionados con el lenguaje.
            </p>
          </div>

          
  
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold">Aprendizaje</h3>
            <p className="mt-2 text-sm text-zinc-600">
              Evaluación y tratamiento de trastornos de aprendizaje y desarrollo.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold">Mareo o Vertigo</h3>
            <p className="mt-2 text-sm text-zinc-600">
              Evaluación y tratamiento de trastornos de aprendizaje y desarrollo.
            </p>
          </div>


          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold">Tartamudez</h3>
            <p className="mt-2 text-sm text-zinc-600">
              Tratamiento especializado para mejorar la fluidez verbal.
            </p>
          </div>

          {/* Agregar más servicios si es necesario */}
        </div>
      </section>

      {/* Información de la doctora */}
      <section className="doctora mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl font-bold">Conoce a la Dra. Antonia Pérez Mandujano</h2>
        <p className="mt-2 text-zinc-600">
          Médico especialista en audición y foniatría, egresada del Instituto Nacional de Rehabilitación.
        </p>
        <div className="mt-8 flex justify-center">
          <img
            src="/doctor-image.jpg" // Cambia esto por la foto de la doctora
            alt="Dra. Antonia Pérez Mandujano"
            className="rounded-full h-40 w-40 object-cover"
          />
        </div>
        <p className="mt-4 text-center text-lg font-semibold">
          Certificada por el Consejo Mexicano de Comunicación Audiológica Otoneurológica y Foniatría.
        </p>
      </section>

      {/* Mapa */}
      <section className="mapa">
        <h3 className="text-center font-bold text-2xl md:text-3xl mb-6"> ¿Cómo Llegar?</h3>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3794.6354749116163!2d-92.91948802505036!3d17.995688682999017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85edd9e4e6fa6d5b%3A0xe8b6d41b800a7b44!2sAurif%20Centro%20audiofoni%C3%A1trico!5e0!3m2!1ses-419!2smx!4v1767568984626!5m2!1ses-419!2smx"
          width="100%"
          height="450"
          style={{ border: "0" }}
          allowFullScreen={true}
          loading="lazy"
        ></iframe>
      </section>
  

  
      {/* Contacto */}
      <section id="contacto" className="bg-zinc-900 text-white">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center">
          <h2 className="text-2xl font-bold">¿Listo para empezar?</h2>
          <p className="mx-auto mt-3 max-w-xl text-white/80">
            Escríbenos y te ayudamos a planear tu tratamiento personalizado.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              className="rounded-lg bg-white px-6 py-3 text-sm font-semibold text-zinc-900 hover:bg-zinc-100"
              href="mailto:centroaurif.com"
            >
              Enviar correo
            </a>
            <a
              className="rounded-lg border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
              href="https://wa.me/5219931062317?text=Hola%20me%20interesa%20una%20cita%20en%20Aurif"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </a>
          </div>

          <p className="mt-10 text-xs text-white/50">
            © {new Date().getFullYear()} Aurif Centro Audiofoniátrico. Todos los derechos reservados.
          </p>
        </div>
      </section>
    </main>
  );
}
