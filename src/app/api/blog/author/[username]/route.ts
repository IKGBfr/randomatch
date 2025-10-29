import { NextResponse } from 'next/server';
import { getPostsByAuthor } from '@/lib/blog';

interface RouteContext {
  params: Promise<{ username: string }>;
}

export async function GET(request: Request, context: RouteContext) {
  try {
    const { username } = await context.params;
    const posts = await getPostsByAuthor(username);
    
    return NextResponse.json(posts);
  } catch (error) {
    console.error('Error fetching posts by author:', error);
    return NextResponse.json([]);
  }
}
