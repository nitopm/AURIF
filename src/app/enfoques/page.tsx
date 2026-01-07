"use client";


import Link from "next/link";
import Image from "next/image";
import { motion, type Variants  } from "framer-motion";

type EnfoqueCard = {
  slug: string;
  titulo: string;
  descripcion: string;
  causas: string[];
  estudios: string[];
  imagen: string;
};

const enfoques: EnfoqueCard[] = [
  {
    slug: "problemas-auditivos",
    titulo: "Problemas Auditivos",
    descripcion:
      "Dificultad para escuchar con claridad que puede afectar comunicación, trabajo y vida diaria.",
    causas: ["Ruido", "Infecciones", "Cerumen", "Edad"],
    estudios: ["Otoscopía", "Audiometría", "Impedanciometría"],
    imagen: "/images/enfoques/audicion.jpg",
  },
  {
    slug: "acufeno",
    titulo: "Acúfeno",
    descripcion:
      "Zumbidos o ruidos en el oído sin fuente externa, con impacto en sueño y concentración.",
    causas: ["Daño auditivo", "Estrés", "Exposición a ruido"],
    estudios: ["Audiometría", "Historia clínica"],
    imagen: "/images/enfoques/acufeno.jpg",
  },
  {
    slug: "mareo-o-vertigo",
    titulo: "Mareo o Vértigo",
    descripcion:
      "Sensación de giro o inestabilidad asociada a alteraciones del sistema vestibular.",
    causas: ["VPPB", "Oído interno", "Alteración vestibular"],
    estudios: ["Exploración vestibular", "Pruebas posicionales"],
    imagen: "/images/enfoques/vertigo.jpg",
  },
  {
    slug: "problemas-en-deglucion",
    titulo: "Problemas en Deglución",
    descripcion:
      "Dificultad para tragar alimentos o líquidos con riesgo de atragantamiento/aspiración.",
    causas: ["Neurológicas", "Postquirúrgico", "Edad"],
    estudios: ["Evaluación clínica deglutoria"],
    imagen: "/images/enfoques/deglucion.jpg",
  },
  {
    slug: "problemas-en-la-voz",
    titulo: "Problemas en la Voz",
    descripcion:
      "Ronquera, fatiga vocal o pérdida de voz que afecta desempeño, especialmente en adultos.",
    causas: ["Mal uso vocal", "Inflamación", "Estrés/tensión"],
    estudios: ["Evaluación vocal", "Referencia ORL si aplica"],
    imagen: "/images/enfoques/voz.jpg",
  },
  {
    slug: "trastornos-de-lenguaje",
    titulo: "Trastornos de Lenguaje",
    descripcion:
      "Dificultades para comprender o expresar lenguaje; en adultos puede ser adquirido o funcional.",
    causas: ["Neurológico (según caso)", "Auditivo asociado"],
    estudios: ["Evaluación de lenguaje"],
    imagen: "/images/enfoques/lenguaje.jpg",
  },
  {
    slug: "problemas-de-aprendizaje",
    titulo: "Problemas de Aprendizaje",
    descripcion:
      "Dificultades en adquisición de habilidades académicas. Se detectan y orientan con evaluación.",
    causas: ["Atención", "Lenguaje", "Procesamiento"],
    estudios: ["Evaluación de aprendizaje"],
    imagen: "/images/enfoques/aprendizaje.jpg",
  },
  {
    slug: "sialorrea-y-labio-paladar-hendido",
    titulo: "Sialorrea, Labio Paladar Hendido",
    descripcion:
      "Alteraciones orofaciales/funcionales que impactan habla, alimentación y control oral.",
    causas: ["Congénito", "Neurológico"],
    estudios: ["Evaluación orofacial", "Deglución (si aplica)"],
    imagen: "/images/enfoques/orofacial.jpg",
  },
  {
    slug: "tartamudez-y-disartrias",
    titulo: "Tartamudez, Disartrias",
    descripcion:
      "Trastornos del habla que afectan fluidez y articulación; se trabaja técnica y seguridad al hablar.",
    causas: ["Funcional", "Neurológico (según caso)"],
    estudios: ["Evaluación del habla"],
    imagen: "/images/enfoques/habla.jpg",
  },
  {
    slug: "decanulacion-en-traqueostomia",
    titulo: "Decanulación en Traqueostomía",
    descripcion:
      "Acompañamiento terapéutico para retiro seguro de cánula según valoración funcional.",
    causas: ["Condición respiratoria previa"],
    estudios: ["Evaluación funcional", "Vía aérea (según indicación)"],
    imagen: "/images/enfoques/traqueostomia.jpg",
  },
  {
    slug: "rehabilitacion-vestibular",
    titulo: "Rehabilitación Vestibular",
    descripcion:
      "Programa de ejercicios y seguimiento para recuperar equilibrio y reducir mareo en adultos.",
    causas: ["Trastornos vestibulares"],
    estudios: ["Exploración vestibular"],
    imagen: "/images/enfoques/vestibular.jpg",
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: 0.06 * i, ease: "easeOut" },
  }),
};

export default function EnfoquesPage() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      {/* Header estilo Aurif */}
      <header className="border-b border-zinc-200">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/AURIF-logo.png"
              alt="Aurif Logo"
              width={56}
              height={56}
              priority
            />
            <div className="flex flex-col leading-tight">
              <span className="text-lg font-bold tracking-wide text-zinc-900">
                Aurif Centro Audiofoniátrico
              </span>
              <span className="text-xs text-zinc-500">
                Escucha, Entiende y Comunícate
              </span>
            </div>
          </Link>

          <nav className="hidden gap-6 text-sm text-zinc-700 md:flex">
            <Link className="hover:text-zinc-900" href="/#servicios">
              Servicios
            </Link>
            <Link className="hover:text-zinc-900" href="/#contacto">
              Contacto
            </Link>
            <Link className="hover:text-zinc-900" href="/enfoques">
              Enfoques
            </Link>
          </nav>

          <Link
            href="/#contacto"
            className="rounded-lg bg-purple-700 px-4 py-2 text-sm font-medium text-white hover:bg-purple-800"
          >
            Agendar cita
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="border-b border-zinc-100 bg-zinc-50">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <p className="inline-flex items-center rounded-full bg-purple-100 px-4 py-2 text-xs font-semibold text-purple-800">
            Enfoque adulto · Información breve
          </p>
          <h1 className="mt-5 text-3xl font-extrabold tracking-tight md:text-5xl">
            Enfoques de atención médica
          </h1>
          <p className="mt-4 max-w-2xl text-zinc-600">
            Selecciona un enfoque para ver la explicación completa, estudios,
            tratamiento y opciones de apoyo (incluyendo auxiliares auditivos cuando aplica).
          </p>
        </div>
      </section>

      {/* Lista */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="space-y-12">
          {enfoques.map((e, i) => (
            <motion.article
              key={e.slug}
              className="overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              custom={i}
            >
              <div className="grid md:grid-cols-2">
                {/* Texto */}
                <div className="p-8 md:p-10">
                  {/* Título clickeable -> detalle */}
                  <Link
                    href={`/enfoques/${e.slug}`}
                    className="text-2xl font-extrabold tracking-tight hover:text-purple-800 transition-colors"
                  >
                    {e.titulo}
                  </Link>

                  <p className="mt-3 text-zinc-600">{e.descripcion}</p>

                  <div className="mt-6 grid gap-6 sm:grid-cols-2">
                    <div>
                      <h3 className="text-sm font-semibold text-zinc-900">
                        Causas (común)
                      </h3>
                      <ul className="mt-2 list-disc pl-5 text-sm text-zinc-600 space-y-1">
                        {e.causas.slice(0, 3).map((c) => (
                          <li key={c}>{c}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-sm font-semibold text-zinc-900">
                        Estudios (común)
                      </h3>
                      <ul className="mt-2 list-disc pl-5 text-sm text-zinc-600 space-y-1">
                        {e.estudios.slice(0, 3).map((s) => (
                          <li key={s}>{s}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <Link
                      href={`/enfoques/${e.slug}`}
                      className="inline-flex justify-center rounded-lg bg-purple-700 px-6 py-3 text-sm font-semibold text-white hover:bg-purple-800"
                    >
                      Ver detalle
                    </Link>
                    <Link
                      href="/#contacto"
                      className="inline-flex justify-center rounded-lg border border-zinc-200 bg-white px-6 py-3 text-sm font-semibold text-zinc-900 hover:bg-zinc-50"
                    >
                      Agendar valoración
                    </Link>
                  </div>
                </div>

                {/* Imagen grande */}
                <div className="relative min-h-[280px] md:min-h-full">
                  <img
                    src={e.imagen}
                    alt={e.titulo}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </main>
  );
}
