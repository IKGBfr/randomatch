import { NextResponse } from 'next/server';
import { getPostsByCategory } from '@/lib/blog';

interface RouteContext {
  params: Promise<{ category: string }>;
}

export async function GET(request: Request, context: RouteContext) {
  try {
    const { category } = await context.params;
    const posts = await getPostsByCategory(category);
    
    return NextResponse.json(posts);
  } catch (error) {
    console.error('Error fetching posts by category:', error);
    return NextResponse.json([]);
  }
}
