import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/structured-data'

// The pages Google should know about (PLA-31). The old design versions under
// /v/ are left out on purpose and marked noindex.
export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: { path: string; priority: number; changeFrequency: 'weekly' | 'monthly' }[] = [
    { path: '/', priority: 1, changeFrequency: 'weekly' },
    { path: '/blog', priority: 0.6, changeFrequency: 'weekly' },
    { path: '/blog/mitchel-success-story', priority: 0.5, changeFrequency: 'monthly' },
    { path: '/anki', priority: 0.4, changeFrequency: 'monthly' }
  ]
  return pages.map(({ path, priority, changeFrequency }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority
  }))
}
