import Link from 'next/link'
import { ArrowLeft, Calendar, User, Clock, Play } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export const metadata = {
  title: 'Mitchel\'s Success Story - Playa Spanish Blog',
  description: 'Discover how Mitchel transformed his Spanish skills through personalized lessons with Playa Spanish'
}

export default function MitchelBlogPost() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-20">
        <Link href="/blog">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Button>
        </Link>

        <article className="max-w-4xl mx-auto">
          {/* Header */}
          <header className="mb-8">
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>January 15, 2025</span>
              </div>
              <div className="flex items-center gap-1">
                <User className="h-4 w-4" />
                <span>Playa Spanish Team</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>8 min read</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              From Beginner to Confident Speaker: Mitchel&apos;s Journey with Playa Spanish
            </h1>
            <p className="text-xl text-gray-600 italic">
              Discover how Mitchel transformed his Spanish skills through personalized lessons and put them into practice during his travels to Mexico.
            </p>
          </header>

          {/* Podcast-style content */}
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-8">
            {/* Podcast player placeholder */}
            <div className="bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg p-8 mb-8 text-center">
              <div className="flex items-center justify-center mb-4">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <Play className="h-10 w-10 text-primary-600 ml-1" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Student Success Story</h3>
              <p className="text-white/90">Mitchel&apos;s Experience with Playa Spanish</p>
              <p className="text-white/80 text-sm mt-2">Listen to Mitchel share his journey</p>
            </div>

            {/* Blog content */}
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                <strong className="text-gray-900">Host:</strong> Welcome to the Playa Spanish podcast! Today, we&apos;re excited to share an inspiring story from one of our students, Mitchel. Mitchel, thank you for joining us and sharing your experience.
              </p>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                <strong className="text-gray-900">Mitchel:</strong> Thank you for having me! I&apos;m really excited to share my story because learning Spanish with Playa Spanish has been such a transformative experience for me.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-6">
                Starting from Zero
              </h2>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                <strong className="text-gray-900">Host:</strong> Let&apos;s start at the beginning. What was your Spanish level when you first started with Playa Spanish?
              </p>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                <strong className="text-gray-900">Mitchel:</strong> I was a complete beginner. I knew maybe &quot;hola&quot; and &quot;gracias,&quot; but that was about it. I had always wanted to learn Spanish, especially because I was planning a trip to Mexico. I tried apps and online courses, but nothing really stuck. I needed something more personal, more interactive.
              </p>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                <strong className="text-gray-900">Host:</strong> What made you choose Playa Spanish?
              </p>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                <strong className="text-gray-900">Mitchel:</strong> I found Playa Spanish online and was immediately drawn to the personalized approach. The fact that Angelica customizes lessons based on your goals and length of stay really appealed to me. I signed up for the one-on-one phone calls because I wanted focused attention and flexible scheduling that worked with my busy life.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-6">
                The Learning Experience
              </h2>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                <strong className="text-gray-900">Host:</strong> Can you tell us about your learning experience? What was it like working with Angelica?
              </p>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                <strong className="text-gray-900">Mitchel:</strong> Angelica is amazing! She&apos;s so patient and really understands how to teach. What I loved most was how she focused on both speaking and listening from day one. We didn&apos;t just memorize vocabulary—we actually had conversations. She would correct me gently and explain things in a way that made sense.
              </p>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                The lessons were structured but flexible. We followed the material, but Angelica also tailored topics to my interests. Since I was planning to travel, we focused a lot on practical phrases for restaurants, asking directions, and having basic conversations with locals.
              </p>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                <strong className="text-gray-900">Host:</strong> How did the teaching style work for you?
              </p>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                <strong className="text-gray-900">Mitchel:</strong> The results-driven approach really worked for me. Every lesson had clear objectives, and I always knew what we were working toward. Angelica gave me feedback on my progress regularly, which kept me motivated. The combination of speaking practice and listening exercises helped me build confidence quickly.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-6">
                Putting It Into Practice
              </h2>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                <strong className="text-gray-900">Host:</strong> This is the part I&apos;m most excited to hear about! You mentioned you traveled to Mexico. How did your Spanish lessons help you in real situations?
              </p>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                <strong className="text-gray-900">Mitchel:</strong> Oh, it was incredible! I went to Playa del Carmen, which is where Playa Spanish is based. Being able to use Spanish in real situations was the ultimate test, and I was so surprised by how much I could actually communicate.
              </p>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                One of my favorite moments was at a local restaurant. I was able to order food, ask about ingredients, and even have a conversation with the waiter about recommendations. Before my lessons, I would have just pointed at the menu. But this time, I felt confident speaking Spanish!
              </p>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                <strong className="text-gray-900">Host:</strong> That&apos;s wonderful! Can you share a specific example?
              </p>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                <strong className="text-gray-900">Mitchel:</strong> Absolutely! I was at a mercado (market) and wanted to buy some fresh fruit. I was able to ask the vendor about the prices, negotiate a bit, and even ask which fruits were the freshest. The vendor was so friendly and seemed impressed that I was trying to speak Spanish. We ended up having a nice conversation about the different fruits and where they came from.
              </p>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Another time, I got lost in the city center. Instead of panicking, I approached someone and asked for directions in Spanish. They gave me directions, and I was able to understand and follow them. That moment really showed me how much I had learned.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-6">
                Cultural Immersion
              </h2>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                <strong className="text-gray-900">Host:</strong> Angelica also teaches about Mexican culture, right? How did that help during your trip?
              </p>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                <strong className="text-gray-900">Mitchel:</strong> Yes! That was one of the best parts. Angelica taught me not just the language, but also about Mexican customs, food culture, and how to interact respectfully with locals. For example, I learned about the importance of greetings and how to be polite in different situations.
              </p>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                When I tried local street food, I could ask about the ingredients and understand what the vendors were explaining. I even learned some food-related vocabulary that made the experience so much richer. The cultural knowledge made me feel more connected to the place and the people.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-6">
                The Results
              </h2>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                <strong className="text-gray-900">Host:</strong> What would you say are the biggest benefits you&apos;ve gained from learning with Playa Spanish?
              </p>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                <strong className="text-gray-900">Mitchel:</strong> The confidence to actually use Spanish in real situations is huge. Before, I was too scared to try speaking because I was worried about making mistakes. But Angelica created such a supportive environment that I learned it&apos;s okay to make mistakes—that&apos;s how you learn.
              </p>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                I can now have basic conversations, understand directions, order food, and ask questions. More importantly, I feel like I can continue learning and improving. The foundation Angelica gave me is solid, and I know I can build on it.
              </p>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                <strong className="text-gray-900">Host:</strong> Would you recommend Playa Spanish to others?
              </p>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                <strong className="text-gray-900">Mitchel:</strong> Absolutely, 100%! If you&apos;re serious about learning Spanish and want personalized attention, Playa Spanish is the way to go. Angelica is an incredible teacher, and the flexible, customized approach really works. Whether you&apos;re planning to travel, need it for work, or just want to learn for personal growth, I can&apos;t recommend it enough.
              </p>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                The best part is that you&apos;re not just learning from a textbook—you&apos;re learning from someone who understands Mexican culture and can teach you how to actually use Spanish in real life. That made all the difference for me.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-6">
                Final Thoughts
              </h2>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                <strong className="text-gray-900">Host:</strong> Thank you so much, Mitchel, for sharing your inspiring journey with us. It&apos;s stories like yours that remind us why we do what we do at Playa Spanish.
              </p>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                <strong className="text-gray-900">Mitchel:</strong> Thank you for having me! And thank you to Angelica and Playa Spanish for giving me the tools and confidence to communicate in Spanish. It&apos;s opened up a whole new world for me.
              </p>

              <div className="bg-primary-50 border-l-4 border-primary-600 p-6 my-8 rounded-r-lg">
                <p className="text-lg text-gray-800 italic">
                  &quot;Learning Spanish with Playa Spanish has been one of the best investments I&apos;ve made. The personalized approach and real-world focus gave me the confidence to actually use Spanish during my trip to Mexico. I couldn&apos;t be happier with my progress!&quot;
                </p>
                <p className="text-gray-700 font-semibold mt-4">— Mitchel, Playa Spanish Student</p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-lg p-8 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Spanish Learning Journey?</h2>
            <p className="text-xl mb-6 text-white/90">
              Join students like Mitchel and discover how personalized Spanish lessons can transform your language skills.
            </p>
            <Link href="/#contact">
              <Button size="lg" variant="outline" className="bg-white text-primary-600 hover:bg-gray-100">
                Get Started Today
              </Button>
            </Link>
          </div>
        </article>
      </div>
    </div>
  )
}
