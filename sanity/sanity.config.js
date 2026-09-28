import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'Arik Portfolio CMS',

  projectId: 'qjkjugu2',
  dataset: 'production',

  plugins: [structureTool()],

  schema: {
    types: schemaTypes,
  },
})
