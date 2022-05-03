/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { defineConfig } from 'vitest/config'
import { resolve } from 'path'
import { name } from './package.json'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import typescript from '@rollup/plugin-typescript'
import AutoImport from 'unplugin-auto-import/vite'

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    clearMocks: true,
    setupFiles: [resolve(__dirname, 'config', 'api.ts')],
    coverage: {
      exclude: ['config/**', '__tests__/**'],
    },
  },
  plugins: [
    AutoImport({
      imports: ['vitest'],
      dts: true,
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'lib', 'index.ts'),
      name,
    },
    rollupOptions: {
      plugins: [
        peerDepsExternal(),
        typescript({
          tsconfig: resolve(__dirname, 'tsconfig.json'),
        }),
      ],
    },
  },
})
