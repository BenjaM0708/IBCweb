import type { Carousel } from "../../../sanity.types";
import { client, urlFor } from "../../sanity/sanityClient";
import { useState, useEffect } from "react";

export const HomeCarousel = () => {

    const [carousels, setCarousels] = useState<Carousel[]>([])
    const [loading, setLoading] = useState(true)
    const [hasError, setHasError] = useState(false)

    useEffect(() => {
        const fetchCarousels = async () => {
            try {
                setLoading(true)
                setHasError(false)
                const query = `*[_type == "carousel" && !(_id in path('drafts.**'))] | order(_createdAt desc)`
                
                const data = await client.fetch<Carousel[]>(query)
                setCarousels(data)
            } catch (error) {
                console.error('Error loading home carousel', error)
                setHasError(true)
            } finally {
                setLoading(false)
            }
        }

        fetchCarousels()
    }, [])

    const homeCarousel = carousels.find((c) => c.title === 'Home Carousel')
    const slides = (homeCarousel?.slides ?? []).filter((slide) => slide.image?.asset);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (slides.length <= 1) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % slides.length);
        }, 15000);

        return () => clearInterval(interval);
    }, [slides.length]);

    const heroBox = "grid min-h-svh place-items-center bg-ibc-red-dark px-6 text-center text-white"

    if (loading) return <div className={heroBox}>Cargando imágenes...</div>
    if (hasError) return <div className={heroBox}>No se pudieron cargar las imágenes. Inténtalo más tarde.</div>
    if (slides.length === 0) return <div className={heroBox}>No hay imágenes publicadas en el carrusel.</div>

    return (
      <div className="relative h-svh min-h-128 w-full overflow-hidden select-none">
        <div className="flex h-full transition-transform duration-1000 ease-in-out"
             style={{ transform: `translateX(-${currentIndex * 100}%)` }}>

            {slides.map((slide, index) => {
                if (!slide.image) return null

                const x = slide.image.hotspot?.x ?? 0.5
                const y = slide.image.hotspot?.y ?? 0.5

                return(
                <div key={slide._key} className= "relative w-full h-full shrink-0">
                    <img 
                        src={urlFor(slide.image).width(2000).auto('format').url()} 
                        alt={slide?.alt ?? ''}
                        className="w-full h-full absolute inset-0 object-cover"
                        style={{objectPosition: `${x*100}% ${y*100}%`}}
                        loading={index === 0 ? 'eager' : 'lazy'}
                        fetchPriority={index === 0 ? 'high' : 'auto'}
                    />
                </div>
                )
            })}
        </div>
        <div className="pointer-events-none absolute inset-0 bg-radial-[ellipse_at_center] from-black/45 via-black/70 via-20% to-black/85" />

        
        <div className="pointer-events-none absolute inset-0 z-10 flex flex-col items-start justify-center px-6 text-white sm:px-10 md:px-16 lg:px-20 xl:px-30">

            <h1 className="font-ibc-text text-4xl font-bold uppercase tracking-wide text-shadow-lg sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
                Iglesia Bautista <br />
                <span className="text-ibc-red-medium">Calvario</span>
            </h1>

            <p className="mt-3 max-w-xl font-ibc-formal text-base text-white/85 text-shadow-lg sm:mt-4 sm:text-lg md:text-2xl lg:text-3xl">
                Te damos la bienvenida a que seas parte de nosotros
            </p>

            <span className="my-3 block h-px w-24 bg-ibc-rose sm:w-32 md:w-48 lg:w-64 xl:w-90"></span>

            <a href="#como-llegar"
            className="group pointer-events-auto mt-5 inline-flex h-11 items-center gap-2 rounded-md
            bg-white px-6 font-display text-xs font-semibold uppercase tracking-widest text-ibc-red-medium
            ring-1 ring-white transition-colors duration-300
            hover:bg-ibc-red-medium hover:text-ibc-cream
            focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white
            sm:mt-6 sm:h-12 sm:px-7 sm:text-sm md:mt-8 md:px-8">

                Visítanos

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5"
                    aria-hidden="true"
                >
                    <polyline points="6 9 12 15 18 9" />
                </svg>
            </a>

        </div>


      </div>
    )
}
