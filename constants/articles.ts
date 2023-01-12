import { ILargeArticle } from './../types.d';

export const LargeArticle = {
  title: 'Optimizing CSS for faster page loads',
  emoji: '🚀',
  image: {
    file: 'https://i.ibb.co/m4mgpbz/large.png',
    alt: 'Optimizing CSS for faster page loads',
    title: 'Optimizing CSS for faster page loads'
  },
  category: 'Nuxt.js',
  description:
    ' Not long ago I decided to improve the loading times of my website. It already loads pretty fast, but I knew there was still room for improvement and one of them was CSS loading. I will walk you through the process and show you how you can improve your load times as well. To see how CSS affects the load time of a webpage we first have to know how the browser converts an HTML document into a functional webpage... ',
  readTime: '5 min read',
  slug: 'optimizing-css-for-faster-page-loads',
  timestamp: 10
} satisfies ILargeArticle;
