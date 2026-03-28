type RateLimitBucket = {
  count: number;
  resetAt: number;
};

const buckets = new Map<string, RateLimitBucket>();

function getNow(): number {
  return Date.now();
}

export function isRateLimited(
  key: string,
  limit = 6,
  windowMs = 10 * 60 * 1000,
): boolean {
  const now = getNow();
  const bucket = buckets.get(key);

  if (!bucket || bucket.resetAt < now) {
    buckets.set(key, {
      count: 1,
      resetAt: now + windowMs,
    });
    return false;
  }

  bucket.count += 1;
  buckets.set(key, bucket);

  return bucket.count > limit;
}

export function getClientIp(headerValue: string | null): string {
  if (!headerValue) {
    return "unknown";
  }

  return headerValue.split(",")[0]?.trim() || "unknown";
}
