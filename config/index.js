const path = require('path');
const resolve = path.resolve;

function outputDir() {
  if (process.env.TARO_ENV === 'h5') {
    return 'dist/h5';
  }
  return 'dist/qn';
}

const config = {
  projectName: 'taro-qn-components',
  date: '2021-5-27',
  designWidth: 750,
  deviceRatio: {
    640: 1,
    750: 1,
    828: 1,
  },
  sourceRoot: 'src',
  outputRoot: outputDir(),
  plugins: [],
  defineConstants: {},
  copy: {
    patterns: [],
    options: {},
  },
  alias: {
    '@common': resolve(__dirname, '..', 'src/common'),
    '@assets': resolve(__dirname, '..', 'src/assets'),
    '@components': resolve(__dirname, '..', 'src/components'),
  },
  framework: 'react',
  mini: {
    postcss: {
      autoprefixer: {
        enable: true,
      },
      pxtransform: {
        enable: false,
        config: {},
      },
      url: {
        enable: true,
        config: {
          limit: 102400000000, // 设定转换尺寸上限
        },
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]',
        },
      },
    },
  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    postcss: {
      autoprefixer: {
        enable: true,
        config: {},
      },
      pxtransform: {
        enable: false,
        config: {
          selectorBlackList: ['body'],
        },
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]',
        },
      },
    },
  },
};

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'));
  }
  return merge({}, config, require('./prod'));
};
