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

const AuthorHeaderContent = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 30px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 20px;
  }
`;

const AvatarWrapper = styled.div`
  flex-shrink: 0;
`;

const Avatar = styled(Image)`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #FE3C72;
  box-shadow: 0 4px 12px rgba(254, 60, 114, 0.3);
`;

const AuthorInfo = styled.div`
  flex: 1;
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

const AuthorDescription = styled.p`
  font-size: 1rem;
  color: #555;
  line-height: 1.7;
  margin-top: 20px;
  max-width: 800px;
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

const CategoryBadge = styled(Link)`
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
  text-decoration: none;
  transition: transform 0.2s, box-shadow 0.2s;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(254, 60, 114, 0.4);
  }
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

// Informations d'auteur
const authorInfo: Record<string, { bio: string; description: string; role: string; avatar?: string }> = {
  'anthony': {
    bio: 'Créateur de RandoMatch',
    description: 'Passionné de nature, de voyage à vélo, de randonnée et de montagne. Développeur passionné par les nouvelles technologies, Anthony partage les coulisses du développement de RandoMatch, ses apprentissages, ses choix techniques et sa vision pour révolutionner les rencontres entre amoureux de la nature et du grand air.',
    role: 'Fondateur & Développeur',
    avatar: '/anthony.jpeg'
  }
};

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
  const authorUsername = resolvedParams.username;
  const author = authorInfo[authorUsername] || { bio: 'Auteur', description: '', role: 'Auteur' };

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
    <>
      {/* Structured Data - ProfilePage with Person Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfilePage",
            "mainEntity": {
              "@type": "Person",
              "name": authorName,
              "description": author.description,
              "jobTitle": author.role,
              "url": `https://www.randomatch.fr/auteur/${authorUsername}`,
              "worksFor": {
                "@type": "Organization",
                "name": "RandoMatch"
              }
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
                  "name": authorName,
                  "item": `https://www.randomatch.fr/auteur/${authorUsername}`
                }
              ]
            }
          })
        }}
      />
      <Container>
        <Content>
          <BackLink href="/blog">← Retour au blog</BackLink>
          
          <AuthorHeader>
            <AuthorHeaderContent>
              {author.avatar && (
                <AvatarWrapper>
                  <Avatar
                    src={author.avatar}
                    alt={authorName}
                    width={120}
                    height={120}
                    priority
                  />
                </AvatarWrapper>
              )}
              <AuthorInfo>
                <AuthorTitle>{authorName}</AuthorTitle>
                <AuthorBio>{author.bio}</AuthorBio>
                {author.description && <AuthorDescription>{author.description}</AuthorDescription>}
                <PostsCount>
                  {posts.length} {posts.length > 1 ? 'articles publiés' : 'article publié'}
                </PostsCount>
              </AuthorInfo>
            </AuthorHeaderContent>
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
                  <CategoryBadge href={`/blog/${slugifyCategory(post.category)}`}>
                    {post.category}
                  </CategoryBadge>
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
    </>
  );
}
