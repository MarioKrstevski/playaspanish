import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/structured-data'

// Cloudflare adds its own managed rules (AI-training bots) above these.
// Search engines may crawl everything. The old design versions under /v/
// stay crawlable on purpose so Google can read their noindex tag; blocking
// them here would hide that tag and could leave them half-indexed.
export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL
  }
}
