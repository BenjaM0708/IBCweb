import { createClient } from '@sanity/client'

export const client = createClient({
    projectId: 'idytbnwx',
    dataset: 'production',
    useCdn: import.meta.env.PROD,
    apiVersion: '2026-09-09'
})