import type { Metadata } from 'next'

// The old design versions (C/D/E) are kept as a reference library, not as
// pages: they repeat the homepage, so search engines must not index them
// (PLA-31).
export const metadata: Metadata = {
  robots: { index: false, follow: false }
}

export default function VersionsLayout({ children }: { children: React.ReactNode }) {
  return children
}
