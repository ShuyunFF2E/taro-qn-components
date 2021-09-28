const path = require('path');

function outputDir() {
  if (process.env.TARO_ENV === 'h5') {
    return 'dist/h5';
  }
  return 'dist/qn';
}

const config = {
  projectName: 'taro3-app',
  date: '2021-5-21',
  designWidth: 1024,
  deviceRatio: {
    640: 1,
    750: 1,
    828: 1,
    1024: 1,
  },
  sourceRoot: 'src',
  outputRoot: outputDir(),
  plugins: [],
  defineConstants: {},
  copy: {
    patterns: [],
    options: {},
  },
  framework: 'react',
  alias: {
    '@/common': path.resolve(__dirname, '..', 'src/common'),
  },
  mini: {
    lessLoaderOption: {
      lessOptions: {
        strictMath: true,
        noIeCompat: true,
      },
    },
    postcss: {
      pxtransform: {
        enable: false,
        config: {},
      },
      url: {
        enable: true,
        config: {
          limit: 1024, // 设定转换尺寸上限
        },
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'global', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]',
        },
      },
    },
  },
  h5: {
    staticDirectory: 'static',
    router: {
      mode: 'hash',
    },
    postcss: {
      autoprefixer: {
        enable: false,
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
          namingPattern: 'global', // 转换模式，取值为 global/module
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
