import { defineConfig } from 'rolldown';

export default defineConfig({
    input: './src/ts/ecoindex-badge.ts',
    tsconfig: true,
    platform: 'browser',
    output: {
        cleanDir: true,
        comments: false,
        dir: './assets/js',
        format: 'esm',
        minify: {
            compress: {
                target: 'es2015',
            },
        },
    },
});
