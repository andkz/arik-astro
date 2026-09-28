import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'Arik Portfolio CMS',

  projectId: 'TWOJ_PROJECT_ID', // Wpisz swój Project ID z https://sanity.io/manage
  dataset: 'production',

  plugins: [structureTool()],

  schema: {
    types: schemaTypes,
  },
})
