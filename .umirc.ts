import { defineConfig } from 'dumi';

export default defineConfig({
  title: ' ',
  hash: true,
  favicon: 'https://www.shuyun.com/favicon.ico',
  logo: 'https://brand-guide.shuyun.com/IAM/77c28a6547cd.png',
  outputPath: 'docs-dist',
  mode: 'site',
  locales: [['zh-CN', '中文']],
  navs: [
    {
      title: 'Taro千牛组件库',
      path: '/components',
    },
    // {
    //   title: 'Taro千牛业务组件库',
    //   path: '/bu-components',
    // },
    {
      title: 'React组件库',
      path: 'https://cloud-react.shuyun.com/#/%E6%8C%87%E5%8D%97/entry',
    },
    {
      title: 'React业务组件库',
      path: 'https://cloud-business-react.shuyun.com/#/other-docs',
    },
    {
      title: 'Blue组件库',
      path: 'https://cloud-hd.shuyun.com/',
    },
  ],
  resolve: {
    includes: ['docs', 'packages/taro-qn-components/components'],
  },
  styles: [
    ` .__dumi-default-layout-hero { height: 420px; box-sizing: border-box; padding: 120px 0 100px !important; background: url(https://www.shuyun.com/template/default/images/page_f.jpg) 100% !important; }
    .__dumi-default-navbar-logo { transform: scale(1.5) }
    .__dumi-default-layout-hero img { margin-top: -50px }
    .__dumi-default-layout-hero h1 { color: white !important }
    .__dumi-default-layout-hero .markdown { color: white !important }
    `,
  ],
});
