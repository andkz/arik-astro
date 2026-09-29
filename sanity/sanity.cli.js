import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'gkzj0x76',
    dataset: 'production',
  },
  project: {
    basePath: '/admin',
  },
  vite: (config) => {
    return {
      ...config,
      base: '/admin/',
    }
  },
})
