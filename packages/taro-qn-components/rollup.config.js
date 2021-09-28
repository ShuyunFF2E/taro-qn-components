import NodePath from 'path'
import RollupJson from '@rollup/plugin-json'
import RollupNodeResolve from '@rollup/plugin-node-resolve'
import RollupCommonjs from '@rollup/plugin-commonjs'
import RollupBabel from '@rollup/plugin-babel';
import RollupTypescript from 'rollup-plugin-typescript2'
import postcss from "rollup-plugin-postcss";
// import RollupCopy from 'rollup-plugin-copy'
import Package from './package.json'

const resolveFile = path => NodePath.resolve(__dirname, path)

const externalPackages = [
  'react',
  'react-dom',
  'prop-types',
  '@tarojs/components',
  '@tarojs/runtime',
  '@tarojs/taro',
  '@tarojs/react'
]

export default {
  input: resolveFile(Package.source),
  output: [
    {
      file: resolveFile(Package.main),
      format: 'cjs',
      sourcemap: false
    },
    // {
    //   file: resolveFile(Package.module),
    //   format: 'es',
    //   sourcemap: true
    // }
  ],
  external: externalPackages,
  plugins: [
    RollupNodeResolve({
      extensions: ['js', 'jsx'],
      dedupe: [ 'react', '@tarojs/components' ],
      customResolveOptions: {
        moduleDirectory: 'node_modules'
      }
    }),
  
    RollupCommonjs({
      include: /\/node_modules\//
    }),
    RollupJson(),
    RollupTypescript({
      extensions: ['ts','tsx'],
      include: [ "*.ts+(|x)", "**/*.ts+(|x)", "*.js+(|x)", "**/*.js+(|x)" ],
      exclude: [/\/node_modules\//],
      allowJs: true,
      tsconfig: resolveFile('tsconfig.rollup.json')
    }),
    RollupBabel({
      babelHelpers: 'bundled',
      extensions: ['js', 'jsx'],
      include: [ "*.js+(|x)", "**/*.js+(|x)"],
      exclude: 'node_modules/**',
      presets: ['@babel/preset-env', '@babel/preset-react']
    }),
    postcss({
      extract: true,
      namedExports: true,
      minimize: true,
      extensions: [".less", ".css"],
    }),
    // RollupCopy({
    //   targets: [
    //     {
    //       src: resolveFile('src/style'),
    //       dest: resolveFile('dist')
    //     }
    //   ]
    // })
  ]
}
