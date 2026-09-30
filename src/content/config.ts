import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';

// Схема рецептов приготовления (HowTo)
const recipes = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    quickAnswer: z.string().optional(),
    prepTime: z.string(),
    cookTime: z.string(),
    servings: z.number().int().positive().default(1),
    difficulty: z.enum(['easy', 'medium', 'hard']).default('medium'),
    ingredients: z.array(z.string()),
    equipment: z.array(z.string()).default([]),
    cuisine: z.string().optional(),
    pubDate: z.coerce.date(),
    locale: z.enum(['en', 'cs']), // Локаль документа
    canonicalSlug: z.string().optional(), // Сопоставление переведенных версий
  }),
});

// Схема для гидов и обзоров кофеен
const cafes = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    quickAnswer: z.string().optional(),
    city: z.string().default('Prague'),
    metro: z.string().optional(),
    beans: z.string().optional(),
    equipment: z.string().optional(),
    features: z.array(z.string()).default([]),
    address: z.string().optional(),
    rating: z.number().min(1).max(5).default(5),
    priceRange: z.enum(['$', '$$', '$$$', '$$$$']).default('$$'),
    openingHours: z.string().default('08:00 - 20:00'),
    hasWifi: z.boolean().default(true),
    website: z.string().url().optional(),
    pubDate: z.coerce.date().default(() => new Date()),
    locale: z.enum(['en', 'cs']), // Локаль документа
    canonicalSlug: z.string().optional(), // Сопоставление переведенных версий
  }),
});

// Схема для общих статей и руководств (Guides/Posts)
const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    quickAnswer: z.string().optional(),
    pubDate: z.coerce.date(),
    author: z.string().default('Anonymous'),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    heroImage: z.string().optional(),
    locale: z.enum(['en', 'cs']).default('en'),
    canonicalSlug: z.string().optional(),
  }),
});

export const collections = {
  recipes,
  cafes,
  posts,
};
