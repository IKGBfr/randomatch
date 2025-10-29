import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';

const contentDirectory = path.join(process.cwd(), 'content/blog');

export interface BlogPost {
  title: string;
  slug: string;
  description: string;
  date: string;
  author: string;
  category: string;
  content?: any;
  image: string;
  imageAlt?: string;
  imageCaption?: string;
  keywords?: string;
}

// Fonction pour normaliser/slugifier une catégorie
function slugifyCategory(category: string): string {
  return category
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export async function getAllPosts(): Promise<BlogPost[]> {
  if (!fs.existsSync(contentDirectory)) {
    return [];
  }

  const files = fs.readdirSync(contentDirectory);

  const posts = await Promise.all(
    files
      .filter((file) => file.endsWith('.mdx'))
      .map(async (file) => {
        const filePath = path.join(contentDirectory, file);
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        const { data } = matter(fileContent);

        return {
          title: data.title || '',
          slug: data.slug || file.replace('.mdx', ''),
          description: data.description || '',
          date: data.date || '',
          author: data.author || '',
          category: data.category || '',
          image: data.image || '',
          imageAlt: data.imageAlt || data.title || '',
          imageCaption: data.imageCaption || '',
          keywords: data.keywords || '',
        };
      })
  );

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const filePath = path.join(contentDirectory, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  const mdxSource = await serialize(content);

  return {
    title: data.title || '',
    slug: data.slug || slug,
    description: data.description || '',
    date: data.date || '',
    author: data.author || '',
    category: data.category || '',
    content: mdxSource,
    image: data.image || '',
    imageAlt: data.imageAlt || data.title || '',
    imageCaption: data.imageCaption || '',
    keywords: data.keywords || '',
  };
}

export async function getAllCategories(): Promise<string[]> {
  const posts = await getAllPosts();
  const categories = [...new Set(posts.map((post) => post.category))];
  return categories.filter(Boolean);
}

export async function getPostsByCategory(category: string): Promise<BlogPost[]> {
  const posts = await getAllPosts();
  // Normaliser les catégories pour la comparaison (enlever accents, etc.)
  const normalizedCategory = slugifyCategory(category);
  return posts.filter((post) => slugifyCategory(post.category) === normalizedCategory);
}

export async function getAllAuthors(): Promise<string[]> {
  const posts = await getAllPosts();
  const authors = [...new Set(posts.map((post) => post.author))];
  return authors.filter(Boolean);
}

export async function getPostsByAuthor(author: string): Promise<BlogPost[]> {
  const posts = await getAllPosts();
  return posts.filter((post) => post.author.toLowerCase() === author.toLowerCase());
}
