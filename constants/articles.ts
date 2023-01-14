import { ILargeArticle, ITinyArticle } from './../types.d'

export const LargeArticle = {
  title: 'Optimizing CSS for faster page loads',
  emoji: '🚀',
  image: {
    file: 'https://i.ibb.co/m4mgpbz/large.png',
    alt: 'Optimizing CSS for faster page loads',
    title: 'Optimizing CSS for faster page loads',
  },
  category: 'Nuxt.js',
  description:
    ' Not long ago I decided to improve the loading times of my website. It already loads pretty fast, but I knew there was still room for improvement and one of them was CSS loading. I will walk you through the process and show you how you can improve your load times as well. To see how CSS affects the load time of a webpage we first have to know how the browser converts an HTML document into a functional webpage... ',
  readTime: '5 min read',
  slug: 'optimizing-css-for-faster-page-loads',
  timestamp: 10,
} satisfies ILargeArticle

export const TinyArticle = {
  title: 'Css Grid',
  image: {
    file: 'https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/blogs/2147485209/images/WgUgHhj8Tl64ZsgQfa4G_file.jpg',
    alt: 'Css Grid',
    title: 'Css Grid',
  },
  category: 'Nuxt.js',
  description:
    'The CSS Grid Layout Module offers a grid-based layout system, with rows and columns, making it easier to design web pages without having to use floats and positioning',
  readTime: '3 min read',
  slug: 'css-grid',
  timestamp: 20,
} satisfies ITinyArticle
