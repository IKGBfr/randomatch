import { NextResponse } from 'next/server';
import { getPostsByCategory } from '@/lib/blog';

interface RouteContext {
  params: Promise<{ slug: string }>;
}

function unslugifyCategory(slug: string): string {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export async function GET(request: Request, context: RouteContext) {
  try {
    const { slug } = await context.params;
    const categoryName = unslugifyCategory(slug);
    const posts = getPostsByCategory(categoryName);
    
    return NextResponse.json(posts);
  } catch (error) {
    console.error('Error fetching category posts:', error);
    return NextResponse.json([], { status: 500 });
  }
}
