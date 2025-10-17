import { z, defineCollection } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    publishedDate: z.date(),
    author: z.string(),
    image: z.string(),
    excerpt: z.string(),
  }),
});

export const collections = {
  'blog': blogCollection,
};