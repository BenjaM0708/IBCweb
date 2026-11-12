import { HomeCarousel } from "../components/SanityCalls/HomeCarrousel"

export default function Home() {
  return (
    <>
      <h1 className="sr-only">IBC - Iglesia Bautista Calvario</h1>

      {/* Hero Section */}  
      <section>
         <HomeCarousel />
      </section>

      {/* Schedule Section */}
      <section id="horarios" className="scroll-mt-20">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          {/* Contenido de Horarios, lo diseñamos en su turno */}
        </div>
      </section>

      {/* Direction Section */}
      <section id="como-llegar" className="scroll-mt-20">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          {/* Contenido de Cómo llegar, lo diseñamos en su turno */}
        </div>
      </section>
    </>
  )
}