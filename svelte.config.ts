import type { Config } from '@sveltejs/kit'
import { relative, sep } from 'node:path'
import adapter from '@sveltejs/adapter-node'

const config: Config = {
  compilerOptions: {
    // defaults to rune mode for the project, except for `node_modules`. Can be removed in svelte 6.
    runes: ({ filename }: { filename: string }) => {
      const relativePath = relative(import.meta.dirname, filename)
      const pathSegments = relativePath.toLowerCase().split(sep)
      const isExternalLibrary = pathSegments.includes('node_modules')

      return isExternalLibrary ? undefined : true
    },
  },
  kit: { adapter: adapter() },
}

export default config
