import { fileURLToPath } from 'node:url';
// eslint-disable-next-line import/no-extraneous-dependencies
import { mergeConfig } from 'vite';
// eslint-disable-next-line import/no-unresolved
import { configDefaults, defineConfig } from 'vitest/config';
import viteConfig from './vite.config';

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: true,
      environment: 'jsdom',
      exclude: [...configDefaults.exclude, 'e2e/*'],
      root: fileURLToPath(new URL('./', import.meta.url)),
      transformMode: {
        web: [/\.[jt]sx$/],
      },
    },
  }),
);
