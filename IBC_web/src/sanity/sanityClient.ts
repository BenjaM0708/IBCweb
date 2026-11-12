import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url'

export const client = createClient({
    projectId: 'idytbnwx',
    dataset: 'production',
    useCdn: import.meta.env.PROD,
    apiVersion: '2026-09-09'
})

const builder = imageUrlBuilder(client)

export function urlFor(source: SanityImageSource) {
    return builder.image(source)
}