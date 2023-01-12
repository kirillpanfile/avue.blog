export type image = {
  file: string;
  alt: string;
  title: string;
};

export interface ILargeArticle {
  title: string;
  emoji: string;
  image: image;
  category: string;
  timestamp: string | number;
  description: string;
  readTime: string;
  slug: string;
}

export interface ITinyArticle{
  title: string,
  image: image,
  category: string,
  timestamp: string | number,
  description: string,
  readTime: string,
  slug: string
}

interface IarticleFull extends ILargeArticle {}
