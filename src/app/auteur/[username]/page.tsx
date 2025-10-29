'use client';
import styled from '@emotion/styled';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { use } from 'react';

const Container = styled.div`
  min-height: 100vh;
  background: #f9f9f9;
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

const AuthorHeader = styled.header`
  background: white;
  border-radius: 12px;
  padding: 40px;
  margin-bottom: 50px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  
  @media (max-width: 768px) {
    padding: 30px 20px;
  }
`;

const AuthorTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: #1a1a1a;
  margin-bottom: 10px;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const AuthorBio = styled.p`
  font-size: 1.1rem;
  color: #666;
  line-height: 1.6;
`;

const PostsCount = styled.p`
  font-size: 0.95rem;
  color: #999;
  margin-top: 20px;
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

const CategoryBadge = styled.span`
  display: inline-block;
  background: #FE3C72;
  color: white;
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 600;
  margin-bottom: 15px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
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

interface AuthorPageProps {
  params: Promise<{ username: string }>;
}

function slugifyCategory(category: string): string {
  return category
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export default function AuthorPage({ params }: AuthorPageProps) {
  const resolvedParams = use(params);
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  const authorName = resolvedParams.username.charAt(0).toUpperCase() + resolvedParams.username.slice(1);

  useEffect(() => {
    fetch(`/api/blog/author/${resolvedParams.username}`)
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
  }, [resolvedParams.username]);

  return (
    <Container>
      <Content>
        <BackLink href="/blog">← Retour au blog</BackLink>
        
        <AuthorHeader>
          <AuthorTitle>{authorName}</AuthorTitle>
          <AuthorBio>Créateur de RandoMatch</AuthorBio>
          <PostsCount>
            {posts.length} {posts.length > 1 ? 'articles publiés' : 'article publié'}
          </PostsCount>
        </AuthorHeader>

        {loading ? (
          <EmptyState>Chargement...</EmptyState>
        ) : posts.length === 0 ? (
          <EmptyState>Aucun article pour cet auteur.</EmptyState>
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
                  <CategoryBadge>{post.category}</CategoryBadge>
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
                  </ArticleMeta>
                </ArticleContent>
              </ArticleCard>
            ))}
          </ArticlesGrid>
        )}
      </Content>
    </Container>
  );
}
