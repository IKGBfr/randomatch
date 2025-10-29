'use client';
import styled from '@emotion/styled';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const Container = styled.div`
  min-height: 100vh;
  background: #f9f9f9;
  padding: 40px 20px;
`;

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Header = styled.header`
  margin-bottom: 60px;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  color: #1a1a1a;
  margin-bottom: 10px;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #666;
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

function slugifyCategory(category: string): string {
  return category
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/blog')
      .then(res => res.json())
      .then(data => {
        setPosts(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <Container>
      <Content>
        <BackLink href="/">← Retour à l'accueil</BackLink>
        
        <Header>
          <Title>Blog RandoMatch</Title>
          <Subtitle>Actualités, coulisses et vision du projet</Subtitle>
        </Header>

        {loading ? (
          <EmptyState>Chargement...</EmptyState>
        ) : posts.length === 0 ? (
          <EmptyState>Aucun article pour le moment.</EmptyState>
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
  );
}
