import path from 'path';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import analyze from 'rollup-plugin-analyzer';
import babel from 'rollup-plugin-babel';
import copy from 'rollup-plugin-copy';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import tsPathsResolve from 'rollup-plugin-ts-paths-resolve';
import cleaner from 'rollup-plugin-cleaner';

const CONFIGS = require('./configs');
const ROOT_PATH = path.resolve(__dirname, '..', '..');
const DIST_PATH = path.resolve(__dirname, 'dist');
export const extensions = ['.js', '.jsx', '.ts', '.tsx'];

/**
 * Compile index & compile separately every elements exported by it.
 */
const input = Object.fromEntries([
    ['index', 'src/index.ts'],
]);

/**
 * Export non index chunks in `esm/_internal` (enables tree shaking but detracts user from importing them directly).
 */
const renameFile = (info) => {
    let name = info.name;
    if (name !== 'index') {
        name = `_internal/${name}`;
    }
    return `${name}.js`;
}

export default {
    input,
    output: {
        format: 'esm',
        sourcemap: true,
        dir: path.join(DIST_PATH, 'esm'),
        chunkFileNames: renameFile,
        entryFileNames: renameFile
    },
    plugins: [
        /** Clean dist dir */
        cleaner({ targets: [DIST_PATH] }),
        /** Externalize peer dependencies. */
        peerDepsExternal(),
        /** Analyze created bundle. */
        analyze(),
        /** Resolve tsconfig paths. */
        tsPathsResolve(),
        // typescript({
        //     rollupCommonJSResolveHack: false,
        //     clean: true,
        //   }),
        /** Resolve source files. */
        resolve({ browser: true, extensions }),
        /** Resolve commonjs dependencies. */
        commonjs({ include: /node_modules/ }),
        /** Transpile JS/TS. */
        babel({
            extensions,
            exclude: /node_modules/,
            plugins: CONFIGS.babel.plugins,
            presets: CONFIGS.babel.presets,
        }),
        /** Copy additional files to dist. */
        copy({
            targets: [
                { src: path.join(ROOT_PATH, 'CONTRIBUTING.md'), dest: DIST_PATH },
                { src: path.join(ROOT_PATH, 'LICENSE.md'), dest: DIST_PATH },
                { src: path.join(__dirname, 'README.md'), dest: DIST_PATH },
                { src: path.join(__dirname, 'package.json'), dest: DIST_PATH },
                {
                    src: [path.join(__dirname, 'src'), '!**/*.snap', '!**/*.test.tsx', '!**/*.test.ts'],
                    dest: DIST_PATH,
                },
            ],
        }),
    ],
};