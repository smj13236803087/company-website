import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'en-US',

  title: 'VuePress',
  description: 'Company VuePress Site',

  theme: defaultTheme({
    logo: 'https://vuejs.press/images/hero.png',

    navbar: [
      { text: '首页', link: '/' },
      { text: '关于我们', link: '/about' },
      { text: '产品服务', link: '/products' },
      { text: '联系我们', link: '/contact' },
    ],
  }),

  bundler: viteBundler(),
})
