import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Korner Kick',

  projectId: '38hmxwwe',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,

    templates: (prev) => {
      const categoryChild = {
        id: 'category-child',
        title: 'Category: Child',
        schemaType: 'category',
        parameters: [{name: `parentId`, title: `Parent ID`, type: `string`}],
        // This value will be passed-in from desk structure
        value: ({parentId}: {parentId: string}) => ({
          parent: {_type: 'reference', _ref: parentId},
        }),
      }

      return [...prev, categoryChild]
    },
  },
})
