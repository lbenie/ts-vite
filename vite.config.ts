/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { defineConfig, configDefaults } from 'vitest/config'
import { resolve } from 'path'
import { name } from './package.json'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import typescript from '@rollup/plugin-typescript'
// import AutoImport from 'unplugin-auto-import/vite'

export default defineConfig({
  define: {
    'import.meta.vitest': false,
  },
  test: {
    globals: true,
    environment: 'jsdom',
    clearMocks: true,
    setupFiles: [resolve(__dirname, 'config', 'api.ts')],
    includeSource: ['lib/**/*.ts'],
    exclude: [...configDefaults.exclude, '**/__tests__/**', '**/__mocks__/**'],
    coverage: {
      provider: 'v8',
      exclude: ['config/**', '__tests__/**'],
    },
  },
  plugins: [
    // AutoImport({
    //   imports: ['vitest'],
    //   dts: true,
    // }),
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
          exclude: [
            'vite.config.ts',
            'config/**',
            '**/__tests__/**',
            'auto-import.d.ts',
            'release.config.cjs',
            '.eslintrc.cjs',
          ],
        }),
      ],
    },
  },
})
