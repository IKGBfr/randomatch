import { NextResponse } from 'next/server';
import { getPostsByAuthor } from '@/lib/blog';

interface RouteContext {
  params: Promise<{ username: string }>;
}

export async function GET(request: Request, context: RouteContext) {
  try {
    const { username } = await context.params;
    const authorName = username.charAt(0).toUpperCase() + username.slice(1);
    const posts = getPostsByAuthor(authorName);
    
    return NextResponse.json(posts);
  } catch (error) {
    console.error('Error fetching author posts:', error);
    return NextResponse.json([], { status: 500 });
  }
}
