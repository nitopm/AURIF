
// src/app/page.tsx
import Link from "next/link";
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
            <a className="hover:text-zinc-900" href="#servicios">conocenos</a>
            <a className="hover:text-zinc-900" href="#contacto">Contacto</a>
            <a className="hover:text-zinc-900" href="#contacto">Ubicación</a>
              
            <Link className="hover:text-zinc-900" href="/portafolios">
            Servicios
            </Link>
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
      {/* HERO con imagen de fondo + doctora */}
      <section className="relative overflow-hidden">
        
        {/* Imagen de fondo */}
        <div
          className="absolute inset-0 bg-cover bg-center blur-sm scale-105"
          style={{ backgroundImage: "url('/images/doctora-hero.jpg')" }}
        />

        {/* Overlay lila */}
        <div className="absolute inset-0 bg-purple-600/70" />

        {/* Contenido */}
        <div className="relative mx-auto max-w-6xl px-6 py-24 grid gap-12 md:grid-cols-2 items-center">

          {/* TEXTO */}
          <div className="text-center md:text-left text-white">
            <span className="inline-flex rounded-full bg-white/80 px-4 py-2 text-xs font-semibold text-purple-800">
              Atención especializada
            </span>

            <h1 className="mt-6 text-4xl md:text-5xl font-extrabold tracking-tight">
              Aurif Centro Audiofoniátrico
            </h1>

            <p className="mt-6 text-white/90 text-base md:text-lg">
              Escucha, entiende y comunícate con atención profesional en lenguaje,
              audición, voz y aprendizaje.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="#contacto"
                className="rounded-lg bg-white px-6 py-3 text-sm font-semibold text-purple-700 hover:bg-zinc-100"
              >
                Agendar cita
              </a>
              <a
                href="#servicios"
                className="rounded-lg border border-white/40 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
              >
                Ver servicios
              </a>
            </div>
          </div>

          {/* IMAGEN DOCTORA GRANDE */}
          <div className="flex justify-center md:justify-end">
            <img
              src="/images/doctora-hero.jpg"
              alt="Doctora Aurif"
              className="max-h-130 w-auto rounded-3xl shadow-2xl"
            />
          </div>

        </div>
      </section>

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
            <h3 className="text-lg font-semibold">Problemas Auditivos</h3>
            <p className="mt-2 text-sm text-zinc-600">
              Evaluación y tratamiento de alteraciones en la audición, como pérdida auditiva leve, moderada o severa. 
              Incluye estudios especializados y seguimiento personalizado para mejorar la calidad de vida del paciente.
            </p>
          </div>

          
  
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold">Rehabilitación Vestibular</h3>
            <p className="mt-2 text-sm text-zinc-600">
              Programa terapéutico especializado para pacientes con alteraciones del equilibrio, mareo crónico o vértigo, 
              enfocado en la recuperación funcional y la estabilidad.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold">Mareo o Vertigo</h3>
            <p className="mt-2 text-sm text-zinc-600">
              Diagnóstico y tratamiento de trastornos del equilibrio que provocan sensación de giro, inestabilidad o mareo.
              Se utilizan pruebas clínicas y terapias específicas para restablecer el equilibrio.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold">Acúfeno</h3>
            <p className="mt-2 text-sm text-zinc-600">
              Atención a la percepción de zumbidos, silbidos o ruidos en los oídos.
              Se realiza una valoración integral para identificar la causa y aplicar estrategias terapéuticas que reduzcan su impacto.
            </p>
          </div>

                    <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold">Problemas en Deglución</h3>
            <p className="mt-2 text-sm text-zinc-600">
              Evaluación y rehabilitación de dificultades para tragar alimentos o líquidos,
              común en pacientes neurológicos o postquirúrgicos, con el objetivo de lograr una deglución segura y funcional.
            </p>
          </div>

                    <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold">Problemas en la Voz</h3>
            <p className="mt-2 text-sm text-zinc-600">
              Atención de alteraciones vocales como ronquera, fatiga vocal o pérdida de la voz.
              Dirigido a profesionales de la voz y público en general, mediante terapia especializada y educación vocal.
            </p>
          </div>

                    <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold">Trastornos de Lenguaje</h3>
            <p className="mt-2 text-sm text-zinc-600">
              Diagnóstico y tratamiento de dificultades en la comprensión y expresión del lenguaje en niños,
              adolescentes y adultos, favoreciendo una comunicación efectiva.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold">Tartamudez y Disartrias</h3>
            <p className="mt-2 text-sm text-zinc-600">
              Evaluación y terapia de trastornos del habla que afectan la fluidez,
              articulación y coordinación del habla, buscando una comunicación más clara y segura.
            </p>
          </div>

          {/* Agregar más servicios si es necesario */}
        </div>
      </section>

      {/* Información de la doctora */}
      <section className="doctora mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-4xl font-bold text-center">Conoce a la Dra. Antonia Pérez Mandujano</h2>
        <p className="mt-2 text-zinc-600 text-2xl text-center">
          Médico especialista en audición y foniatría, egresada del Instituto Nacional de Rehabilitación.
        </p>
        <div className="mt-8 flex justify-center justify-20">
          <img
            src="/doctor-image.jpg " // Cambia esto por la foto de la doctora
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
      <div className="mx-auto max-w-6xl px-6 py-16 grid gap-12 md:grid-cols-3 items-start">

        {/* Columna izquierda: Información de contacto */}
        <div>
          <h4 className="text-lg font-semibold text-left border-b border-white/20 pb-2 mb-6">
            Información de contacto
          </h4>

          {/* Lista de contacto (icono + texto) */}
          <div className="space-y-5 text-left">

            {/* Correo */}
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-500">
                📧
              </span>
              <span className="text-zinc-200">info@centroaurif.com</span>
            </div>

            {/* Teléfono */}
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-sky-500">
                📞
              </span>
              <span className="text-zinc-200">993 106 2317</span>
            </div>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/p/Aurif-Centro-Audiofoniatrico-61561590967199/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 hover:opacity-80 transition"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-white font-bold">
                f
              </span>
              <span className="text-zinc-200">/AurifCentroAudiofoniatrico</span>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/Centroaurif/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 hover:opacity-80 transition"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-pink-500 text-white font-bold">
                ◎
              </span>
              <span className="text-zinc-200">/CentroAurif</span>
            </a>

          </div>
        </div>

        {/* Columna centro: texto centrado */}
        <div className="flex items-start justify-center md:justify-center text-center">
          <p className="max-w-md text-white/80 leading-relaxed">
            Horario de atención:
            lunes a viernes de 9:00 AM a 6:00 PM.
            Sábados de 9:00 AM a 3:00 PM.
            domingos cerrado.
          </p>
        </div>

        {/* Columna derecha: CTA alineado a la derecha */}
        <div className="flex flex-col items-end text-right">
          <h2 className="text-2xl font-bold">
            ¿Listo para tu consulta?
          </h2>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-end">
            <a
              className="rounded-lg bg-white px-6 py-3 text-sm font-semibold text-zinc-900 hover:bg-zinc-100 text-center"
              href="mailto:info@centroaurif.com"
            >
              Enviar correo
            </a>

            <a
              className="rounded-lg border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 text-center"
              href="https://wa.me/5219931062317?text=Hola%20me%20interesa%20una%20cita%20en%20Aurif"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </a>
          </div>
        </div>

      </div>

      {/* Footer final centrado */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-6 text-center">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} Aurif Centro Audiofoniátrico. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </section>
   </main>
  );
}
