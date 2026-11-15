import { HomeCarousel } from "../components/SanityCalls/HomeCarrousel"
import { BsFillGeoAltFill } from 'react-icons/bs'
import churchMap from "../assets/fotos/church_map.jpg"

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
        <div className="grid grid-cols-1 lg:min-h-svh lg:grid-cols-[60%_40%]">
          <div className="order-2 flex flex-col justify-center px-6 py-12 sm:px-10 md:px-12 lg:order-1 lg:px-16 xl:px-20">
            <h2 className="font-ibc-text text-ibc-red-medium text-lg font-bold tracking-wide sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
              !Estamos aquí!</h2>
            <p className="mt-3 max-w-xl font-ibc-formal text-base text-black/85 sm:mt-4 sm:text-lg md:text-xl lg:text-2xl"
              >Estamos emocionados de poder conocerte y compartir contigo</p>
            
            <span className="my-8 block h-px w-24 bg-ibc-red-medium sm:w-32 md:w-48 lg:w-64 xl:w-90"></span>

            <h3 className="font-ibc-text text-ibc-red-medium text-lg font-bold tracking-wide sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
              Dirección</h3>
            <p className="mt-3 max-w-xl font-ibc-formal text-base text-black/85 sm:mt-4 sm:text-lg md:text-xl lg:text-2xl">
              Iglesia Bautista Calvario <br />
              Calle de Palermo 28 <br />
              Hortaleza, 28043 Madrid
            </p>

            <span className="my-8 block h-px w-24 bg-ibc-red-medium sm:w-32 md:w-48 lg:w-64 xl:w-90"></span>

            <a href="https://maps.app.goo.gl/Rtz63vBy7D4cfhDd7?g_st=ac"
              className="group pointer-events-auto mt-2 self-start inline-flex h-11 items-center gap-2 rounded-md
              bg-ibc-red-medium px-6 font-display text-xs font-semibold uppercase tracking-widest text-white
              ring-1 ring-ibc-red-medium transition-colors duration-300
              hover:bg-ibc-cream hover:text-ibc-red-medium
              focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ibc-cream
              sm:h-12 sm:px-7 sm:text-sm md:px-8">
              ¿Cómo Llegar?
              <BsFillGeoAltFill></BsFillGeoAltFill>
            </a>

          </div>

          <div className="order-1 px-5 pt-8 sm:px-8 lg:order-2 lg:px-0 lg:py-0">
            <img 
              className="h-64 w-full rounded-xl object-cover sm:h-80 md:h-112.5 lg:h-full lg:rounded-none lg:min-h-137.5"
              src={churchMap}
              alt="Iglesia en el mapa" />
          </div>

        </div>
      </section>
    </>
  )
}