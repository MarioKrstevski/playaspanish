import Link from 'next/link'
import { ArrowLeft, Calendar, User } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata = {
  title: 'Blog - Playa Spanish',
  description: 'Read about student success stories and Spanish learning experiences'
}

const blogPosts = [
  {
    slug: 'mitchel-success-story',
    title: 'From Beginner to Confident Speaker: Mitchel\'s Journey with Playa Spanish',
    excerpt: 'Discover how Mitchel transformed his Spanish skills through personalized lessons and put them into practice during his travels to Mexico.',
    date: 'January 15, 2025',
    author: 'Playa Spanish Team',
    readTime: '8 min read'
  }
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-20">
        <Link href="/">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Blog
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            Student success stories and insights from our Spanish learning community
          </p>

          <div className="space-y-8">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="p-8">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <span>{post.readTime}</span>
                  </div>

                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    {post.title}
                  </h2>
                  <p className="text-lg text-gray-600 mb-6">
                    {post.excerpt}
                  </p>

                  <Link href={`/blog/${post.slug}`}>
                    <Button>
                      Read More
                    </Button>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
