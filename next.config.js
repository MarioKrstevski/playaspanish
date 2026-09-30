/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
  experimental: {
    // Next 15.5's devtools Segment Explorer injects a client component from
    // next/dist/next-devtools/ into the RSC tree. That module isn't part of the
    // app's module graph, so HMR recompiles drop it from the client-reference
    // manifest and every render then fails until the dev server is restarted.
    devtoolSegmentExplorer: false
  }
}

module.exports = nextConfig
