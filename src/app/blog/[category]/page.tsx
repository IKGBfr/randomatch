'use client';
import styled from '@emotion/styled';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { use } from 'react';

const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(165deg, #FFFFFF 0%, #FFF8FA 50%, #FFF0F5 100%);
  padding: 40px 20px;
`;

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const BackLink = styled(Link)`
  display: inline-block;
  color: #FE3C72;
  text-decoration: none;
  font-weight: 500;
  margin-bottom: 30px;
  transition: color 0.3s ease;
  
  &:hover {
    color: #FF5485;
  }
`;

const CategoryHeader = styled.header`
  background: white;
  border-radius: 12px;
  padding: 40px;
  margin-bottom: 50px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  
  @media (max-width: 768px) {
    padding: 30px 20px;
  }
`;

const CategoryIntro = styled.p`
  font-size: 1.1rem;
  color: #555;
  line-height: 1.6;
  margin-top: 15px;
  max-width: 800px;
`;

const CategoryBadge = styled.div`
  display: inline-block;
  background: #FE3C72;
  color: white;
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const CategoryTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: #1a1a1a;
  margin-bottom: 10px;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const PostsCount = styled.p`
  font-size: 0.95rem;
  color: #999;
`;

const ArticlesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 30px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const ArticleCard = styled.article`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
  }
`;

const ArticleImageWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  background: #e5e5e5;
`;

const ArticleImage = styled(Image)`
  object-fit: cover;
  width: 100%;
  height: 100%;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
  }
`;

const ArticleContent = styled.div`
  padding: 25px;
`;

const ArticleTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 12px;
  line-height: 1.3;
  
  a {
    color: inherit;
    text-decoration: none;
    transition: color 0.3s ease;
  }
  
  a:hover {
    color: #FE3C72;
  }
`;

const ArticleDescription = styled.p`
  color: #666;
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 15px;
`;

const ArticleMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 0.875rem;
  color: #999;
  
  time {
    font-weight: 500;
  }
  
  a {
    color: #FE3C72;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s ease;
    
    &:hover {
      color: #FF5485;
    }
  }
`;

const EmptyState = styled.div`
  background: white;
  border-radius: 12px;
  padding: 60px 30px;
  text-align: center;
  color: #666;
`;

interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  category: string;
  image: string;
}

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

// Descriptions uniques par catégorie
const categoryIntros: Record<string, string> = {
  'actualites': 'Suis l\'évolution de RandoMatch en temps réel : nouveautés, fonctionnalités, milestones et actualités du projet.',
  'guides': 'Des guides complets pour tirer le meilleur parti de RandoMatch et multiplier tes chances de rencontres.',
  'coulisses': 'Plonge dans les coulisses du développement : transparence totale sur la création de RandoMatch.',
  'temoignages': 'Les plus belles histoires de rencontres nées sur RandoMatch : témoignages authentiques de nos utilisateurs.'
};

function unslugifyCategory(slug: string): string {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

function slugifyCategory(category: string): string {
  return category
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const resolvedParams = use(params);
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  const categoryName = unslugifyCategory(resolvedParams.category);
  const categorySlug = resolvedParams.category;
  const categoryIntro = categoryIntros[categorySlug];

  useEffect(() => {
    fetch(`/api/blog/category/${resolvedParams.category}`)
      .then(res => res.json())
      .then(data => {
        setPosts(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setPosts([]);
        setLoading(false);
      });
  }, [resolvedParams.category]);

  return (
    <>
      {/* Structured Data - CollectionPage with Breadcrumbs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": `${categoryName} - Blog RandoMatch`,
            "description": categoryIntro || `Articles de la catégorie ${categoryName}`,
            "url": `https://www.randomatch.fr/blog/${categorySlug}`,
            "isPartOf": {
              "@type": "WebSite",
              "name": "RandoMatch",
              "url": "https://www.randomatch.fr"
            },
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Accueil",
                  "item": "https://www.randomatch.fr"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Blog",
                  "item": "https://www.randomatch.fr/blog"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": categoryName,
                  "item": `https://www.randomatch.fr/blog/${categorySlug}`
                }
              ]
            }
          })
        }}
      />
      <Container>
        <Content>
          <BackLink href="/blog">← Retour au blog</BackLink>
          
          <CategoryHeader>
            <CategoryBadge>{categoryName}</CategoryBadge>
            <CategoryTitle>{categoryName}</CategoryTitle>
            {categoryIntro && <CategoryIntro>{categoryIntro}</CategoryIntro>}
            <PostsCount>
              {posts.length} {posts.length > 1 ? 'articles' : 'article'}
            </PostsCount>
          </CategoryHeader>

        {loading ? (
          <EmptyState>Chargement...</EmptyState>
        ) : posts.length === 0 ? (
          <EmptyState>Aucun article dans cette catégorie.</EmptyState>
        ) : (
          <ArticlesGrid>
            {posts.map((post) => (
              <ArticleCard key={post.slug}>
                <Link href={`/blog/${slugifyCategory(post.category)}/${post.slug}`}>
                  <ArticleImageWrapper>
                    <ArticleImage
                      src={post.image}
                      alt={post.title}
                      width={600}
                      height={338}
                    />
                  </ArticleImageWrapper>
                </Link>
                <ArticleContent>
                  <ArticleTitle>
                    <Link href={`/blog/${slugifyCategory(post.category)}/${post.slug}`}>
                      {post.title}
                    </Link>
                  </ArticleTitle>
                  <ArticleDescription>{post.description}</ArticleDescription>
                  <ArticleMeta>
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString('fr-FR', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </time>
                    <span>•</span>
                    <Link href={`/auteur/${post.author.toLowerCase()}`}>
                      {post.author}
                    </Link>
                  </ArticleMeta>
                </ArticleContent>
              </ArticleCard>
            ))}
          </ArticlesGrid>
        )}
      </Content>
    </Container>
    </>
  );
}
