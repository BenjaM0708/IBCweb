// sanity.config.js
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure' // O 'structureTool' en versiones muy recientes

export default defineConfig({
  name: 'default',
  title: "My IBC's Studio",

  projectId: 'idytbnwx',       // Tu ID de proyecto
  dataset: 'production',       // Tu dataset

  basePath: '/studio',         // La URL de tu app React donde vivirá el Studio

  plugins: [structureTool()],

  schema: {
    types: [],                 // Aquí irán tus esquemas más adelante
  },
})
