'use client';

import { use, useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import styled from '@emotion/styled';
import { ArticleSchema } from '@/components/analytics/ArticleSchema';
import { CTABox, CTATitle, CTAButton, CTASubtext } from '@/components/blog/MDXComponents';

interface BlogPost {
  title: string;
  slug: string;
  description: string;
  date: string;
  author: string;
  category: string;
  content: MDXRemoteSerializeResult;
  image: string;
  imageAlt?: string;
  imageCaption?: string;
  keywords?: string;
}

const ArticleContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  
  @media (max-width: 768px) {
    padding: 0;
  }
  
  @media (min-width: 769px) {
    padding: 2rem 1rem;
  }
`;

const ArticleWrapper = styled.article`
  background: white;
  
  @media (max-width: 768px) {
    border-radius: 0;
    min-height: 100vh;
  }
  
  @media (min-width: 769px) {
    border-radius: 16px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
    max-width: 800px;
    margin: 0 auto;
    overflow: hidden;
  }
`;

const Breadcrumb = styled.nav`
  padding: 1rem 1.5rem;
  font-size: 0.875rem;
  color: #666;
  border-bottom: 1px solid #eee;
  
  a {
    color: #667eea;
    text-decoration: none;
    transition: color 0.2s;
    
    &:hover {
      color: #764ba2;
    }
  }
  
  span {
    margin: 0 0.5rem;
    color: #ccc;
  }
`;

const HeroImageWrapper = styled.div`
  width: 100%;
  position: relative;
  aspect-ratio: 16 / 9;
  overflow: hidden;
`;

const HeroImage = styled(Image)`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

const ImageCaption = styled.p`
  padding: 0.75rem 1.5rem;
  font-size: 0.875rem;
  color: #666;
  font-style: italic;
  border-bottom: 1px solid #eee;
  margin: 0;
`;

const ArticleHeader = styled.header`
  padding: 2rem 1.5rem 1rem;
  
  @media (min-width: 769px) {
    padding: 2.5rem 3rem 1.5rem;
  }
`;

const CategoryBadge = styled.span`
  display: inline-block;
  background: linear-gradient(135deg, #FE3C72, #FF5485);
  color: white;
  padding: 0.375rem 0.875rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 1rem;
`;

const ArticleTitle = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-size: 2rem;
  font-weight: 800;
  color: #1a1a1a;
  margin: 0 0 1rem 0;
  line-height: 1.2;
  
  @media (min-width: 769px) {
    font-size: 2.5rem;
  }
`;

const ArticleMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: #666;
  font-size: 0.875rem;
  padding-bottom: 1.5rem;
  border-bottom: 2px solid #eee;
`;

const AuthorLink = styled(Link)`
  color: #667eea;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.2s;
  
  &:hover {
    color: #764ba2;
  }
`;

const ArticleContent = styled.div`
  padding: 2rem 1.5rem;
  font-family: 'Inter', sans-serif;
  
  @media (min-width: 769px) {
    padding: 2.5rem 3rem;
  }
  
  p {
    font-size: 1.0625rem;
    line-height: 1.75;
    color: #374151;
    margin-bottom: 1.5rem;
  }
  
  h2 {
    font-family: 'Montserrat', sans-serif;
    font-size: 1.75rem;
    font-weight: 700;
    color: #1a1a1a;
    margin: 2.5rem 0 1rem 0;
    line-height: 1.3;
  }
  
  h3 {
    font-family: 'Montserrat', sans-serif;
    font-size: 1.375rem;
    font-weight: 600;
    color: #1a1a1a;
    margin: 2rem 0 1rem 0;
    line-height: 1.3;
  }
  
  strong {
    font-weight: 600;
    color: #1a1a1a;
  }
  
  a:not([class*="CTAButton"]) {
    color: #667eea;
    text-decoration: underline;
    transition: color 0.2s;
    
    &:hover {
      color: #764ba2;
    }
  }
  
  ul, ol {
    margin: 1.5rem 0;
    padding-left: 1.5rem;
  }
  
  li {
    margin-bottom: 0.75rem;
    line-height: 1.75;
    color: #1f2937;
    font-size: 1.0625rem;
    
    strong {
      color: #FE3C72;
      font-weight: 700;
    }
  }
  
  blockquote {
    border-left: 4px solid #667eea;
    padding-left: 1.5rem;
    margin: 2rem 0;
    font-style: italic;
    color: #555;
  }
  
  code {
    background: #f3f4f6;
    padding: 0.2rem 0.4rem;
    border-radius: 4px;
    font-size: 0.9em;
    font-family: 'Courier New', monospace;
  }
  
  pre {
    background: #1f2937;
    color: #f9fafb;
    padding: 1.5rem;
    border-radius: 8px;
    overflow-x: auto;
    margin: 1.5rem 0;
    
    code {
      background: transparent;
      padding: 0;
      color: inherit;
    }
  }
`;

const BackButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  transition: transform 0.2s, box-shadow 0.2s;
  margin: 2rem 1.5rem;
  
  @media (min-width: 769px) {
    margin: 2rem 3rem;
  }
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(102, 126, 234, 0.4);
  }
`;

const LoadingContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
`;

const LoadingSpinner = styled.div`
  width: 50px;
  height: 50px;
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-top-color: white;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`;

// JSON-LD Structured Data pour SEO
const StructuredData = ({ post, articleUrl }: { post: BlogPost; articleUrl: string }) => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    image: post.image,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Person',
      name: post.author,
      url: `https://randomatch.fr/auteur/${post.author.toLowerCase()}`,
    },
    publisher: {
      '@type': 'Organization',
      name: 'RandoMatch',
      logo: {
        '@type': 'ImageObject',
        url: 'https://randomatch.fr/logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': articleUrl,
    },
    articleSection: post.category,
    keywords: post.keywords,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

function slugifyCategory(category: string | undefined): string {
  if (!category) return '';
  
  return category
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export default function BlogPostPage({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const resolvedParams = use(params);
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/blog/${resolvedParams.slug}`)
      .then((res) => res.json())
      .then((data) => {
        setPost(data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [resolvedParams.slug]);

  if (loading) {
    return (
      <LoadingContainer>
        <LoadingSpinner />
      </LoadingContainer>
    );
  }

  if (!post) {
    return (
      <ArticleContainer>
        <ArticleWrapper>
          <ArticleHeader>
            <ArticleTitle>Article non trouvé</ArticleTitle>
          </ArticleHeader>
          <BackButton href="/blog">← Retour aux articles</BackButton>
        </ArticleWrapper>
      </ArticleContainer>
    );
  }

  const categorySlug = slugifyCategory(post.category);
  const articleUrl = `https://randomatch.fr/blog/${categorySlug}/${post.slug}`;

  return (
    <>
      <StructuredData post={post} articleUrl={articleUrl} />
      <ArticleContainer>
        <ArticleWrapper>
          <Breadcrumb>
            <Link href="/blog">Blog</Link>
            <span>/</span>
            {post.category && categorySlug && (
              <>
                <Link href={`/blog/${categorySlug}`}>
                  {post.category}
                </Link>
                <span>/</span>
              </>
            )}
            <span>{post.title}</span>
          </Breadcrumb>

          {post.image && (
            <HeroImageWrapper>
              <HeroImage
                src={post.image}
                alt={post.imageAlt || post.title}
                width={1200}
                height={675}
                priority
                quality={90}
              />
            </HeroImageWrapper>
          )}

          {post.imageCaption && (
            <ImageCaption>{post.imageCaption}</ImageCaption>
          )}

          <ArticleHeader>
            {post.category && (
              <CategoryBadge>{post.category.toUpperCase()}</CategoryBadge>
            )}
            <ArticleTitle>{post.title}</ArticleTitle>
            <ArticleMeta>
              {post.author && (
                <>
                  <span>
                    Par <AuthorLink href={`/auteur/${post.author.toLowerCase()}`}>{post.author}</AuthorLink>
                  </span>
                  <span>•</span>
                </>
              )}
              {post.date && (
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString('fr-FR', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })}
                </time>
              )}
            </ArticleMeta>
          </ArticleHeader>

          <ArticleContent>
            <MDXRemote 
              {...post.content}
              components={{
                CTABox,
                CTATitle,
                CTAButton,
                CTASubtext,
              }}
            />
          </ArticleContent>

          <BackButton href="/blog">← Retour aux articles</BackButton>
        </ArticleWrapper>
      </ArticleContainer>
    </>
  );
}
