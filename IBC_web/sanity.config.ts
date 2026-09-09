// sanity.config.js
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from './src/sanity/schemas/schemaTypes'

export default defineConfig({
  name: 'default',
  title: "My IBC's Studio",

  projectId: 'idytbnwx',      
  dataset: 'production',      

  basePath: '/studio',        

  plugins: [structureTool()],

  schema: {
    types: schemaTypes,                
  },
})
