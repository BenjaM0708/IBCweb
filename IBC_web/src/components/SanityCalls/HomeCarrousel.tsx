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
        }, 4000);

        return () => clearInterval(interval);
    }, [slides.length]);

    if (loading) return <div className="text-center py-10 text-ibc-gray">Cargando imágenes...</div>
    if (hasError) return <div className="text-center py-10 text-ibc-gray">No se pudieron cargar las imágenes. Inténtalo más tarde.</div>
    if (slides.length === 0) return <div className="text-center py-10 text-ibc-gray">No hay imágenes publicadas en el carrusel.</div>

    return (
      <div className="relative w-full overflow-hidden select-none">
        <div className="flex transition-transform duration-700 ease-in-out"
             style={{ transform: `translateX(-${currentIndex * 100}%)` }}>

            {slides.map((slide) => {
                if (!slide.image) return null

                return(
                <div key={slide._key} className= "w-full shrink-0">
                    <img 
                        src={urlFor(slide.image).width(1600).auto('format').url()} 
                        alt={slide?.alt ?? ''}
                        className="w-full h-[500px] object-cover"
                    />
                </div>
                )
            })}
        </div>
      </div>
    )
}
