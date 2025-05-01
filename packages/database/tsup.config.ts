import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  clean: true,
  target: 'es2021', // Avoid ES2020 to prevent decorator issues
  tsconfig: './tsconfig.json', // 👈 MAKE SURE THIS IS RELATIVE TO THIS FILE
});
