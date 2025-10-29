import { Metadata } from 'next';
import { getPostBySlug, getAllPosts } from '@/lib/blog';

interface PageProps {
  params: Promise<{ category: string; slug: string }>;
}

// Génération des metadata dynamiques pour SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: 'Article non trouvé - RandoMatch Blog',
      description: 'Cet article n\'existe pas ou a été supprimé.',
    };
  }

  const siteUrl = 'https://randomatch.fr';
  const articleUrl = `${siteUrl}/blog/${post.category.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-')}/${post.slug}`;
  const imageUrl = post.image.startsWith('http') ? post.image : `${siteUrl}${post.image}`;

  return {
    title: `${post.title} - RandoMatch Blog`,
    description: post.description,
    keywords: post.keywords || 'randonnée, célibataires, rencontres, outdoor, hiking',
    authors: [{ name: post.author }],
    creator: post.author,
    publisher: 'RandoMatch',
    
    // Open Graph pour Facebook, LinkedIn, etc.
    openGraph: {
      title: post.title,
      description: post.description,
      url: articleUrl,
      siteName: 'RandoMatch',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 675,
          alt: post.imageAlt || post.title,
        },
      ],
      locale: 'fr_FR',
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      section: post.category,
      tags: post.keywords?.split(',').map(k => k.trim()),
    },

    // Twitter Cards
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [imageUrl],
      creator: '@randomatch',
      site: '@randomatch',
    },

    // Autres tags SEO
    alternates: {
      canonical: articleUrl,
    },
    
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

// Génération des routes statiques pour les articles
export async function generateStaticParams() {
  const posts = await getAllPosts();
  
  return posts.map((post) => ({
    category: post.category
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, '-'),
    slug: post.slug,
  }));
}

// Le composant page
export { default } from './BlogPostClient';
