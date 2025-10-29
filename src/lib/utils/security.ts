// Simple in-memory rate limiter
// Pour production, utiliser Redis/Upstash

const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

const RATE_LIMIT = {
  MAX_REQUESTS: 3, // 3 messages max
  WINDOW_MS: 60 * 60 * 1000, // 1 heure
};

export function rateLimit(identifier: string): { success: boolean; remaining: number } {
  const now = Date.now();
  const record = rateLimitMap.get(identifier);

  // Nettoyer les anciennes entrées (simple cleanup)
  if (rateLimitMap.size > 1000) {
    const cutoff = now - RATE_LIMIT.WINDOW_MS;
    for (const [key, value] of rateLimitMap.entries()) {
      if (value.resetTime < cutoff) {
        rateLimitMap.delete(key);
      }
    }
  }

  if (!record || now > record.resetTime) {
    // Nouveau window
    rateLimitMap.set(identifier, {
      count: 1,
      resetTime: now + RATE_LIMIT.WINDOW_MS,
    });
    return { success: true, remaining: RATE_LIMIT.MAX_REQUESTS - 1 };
  }

  if (record.count >= RATE_LIMIT.MAX_REQUESTS) {
    return { success: false, remaining: 0 };
  }

  // Incrémenter
  record.count++;
  rateLimitMap.set(identifier, record);
  return { success: true, remaining: RATE_LIMIT.MAX_REQUESTS - record.count };
}

export function sanitizeText(text: string): string {
  return text
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
}
