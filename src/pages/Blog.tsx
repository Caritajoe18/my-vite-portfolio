import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { fetchPosts, type SanityPost } from '@/lib/sanity'
import { Skeleton } from '@/components/ui/skeleton'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import ModernHeader from '@/components/ModernHeader'
import Footer from '@/components/Footer'
import SEO from '@/components/SEO'

const Blog = () => {
  const [posts, setPosts] = useState<SanityPost[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const fetchedPosts = await fetchPosts()
        setPosts(fetchedPosts)
      } catch (error) {
        console.error('Failed to load posts:', error)
      } finally {
        setLoading(false)
      }
    }

    loadPosts()
  }, [])

  if (loading) {
    return (
      <>
      <SEO 
          title="Blog - ContentLab"
          description="Latest insights, tips, and stories from the world of SaaS video production"
        />
      <ModernHeader />
      <main className="min-h-screen pt-32 bg-white">
        <section className="pb-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <Skeleton className="h-16 w-80 mx-auto mb-6" />
              <Skeleton className="h-8 w-[500px] mx-auto" />
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="space-y-4">
                  <Skeleton className="h-64 w-full rounded-2xl" />
                  <Skeleton className="h-8 w-full" />
                  <Skeleton className="h-5 w-32" />
                  <Skeleton className="h-20 w-full" />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
        <Footer />
      </>
    )
  }

  return (
    <>
    <SEO 
        title="Blog - ContentLab"
        description="Latest insights, tips, and stories from the world of SaaS video production"
      />
      <ModernHeader />
      <main className="min-h-screen pt-32 bg-white">
        <section className="pb-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold text-gray-900 mb-6 leading-tight tracking-tight">
                Our Blog
              </h1>
              <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto font-normal leading-relaxed">
                Insights, tips, and stories from the world of SaaS video production
              </p>
            </div>
            
            {posts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-xl text-gray-600 font-normal">No blog posts available yet.</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                {posts.map((post) => (
                  <Link key={post._id} to={`/blog/${post.slug?.current || post._id}`} className="group block">
                    <article className="h-full">
                      {post.mainImage && (
                        <div className="overflow-hidden rounded-2xl mb-6 aspect-[4/3]">
                          <img
                            src={post.mainImage.asset.url}
                            alt={post.mainImage.alt || post.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                          />
                        </div>
                      )}
                      <div className="space-y-4">
                        <h3 className="text-2xl font-semibold text-gray-900 line-clamp-2 group-hover:text-orange-600 transition-colors duration-300 leading-tight">
                          {post.title}
                        </h3>
                        <div className="flex items-center gap-3 text-sm">
                          <time className="text-gray-500 font-normal">
                            {new Date(post.publishedAt).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            })}
                          </time>
                          {post.author && (
                            <>
                              <span className="text-gray-300">•</span>
                              <div className="flex items-center gap-2">
                                <Avatar className="h-6 w-6">
                                  <AvatarImage 
                                    src={post.author.image?.asset.url} 
                                    alt={post.author.name} 
                                  />
                                  <AvatarFallback className="text-xs bg-gray-100 text-gray-600">
                                    {post.author.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                                  </AvatarFallback>
                                </Avatar>
                                <span className="text-gray-600 font-normal">{post.author.name}</span>
                              </div>
                            </>
                          )}
                        </div>
                        {post.excerpt && (
                          <p className="text-base text-gray-600 line-clamp-3 leading-relaxed font-normal">
                            {post.excerpt}
                          </p>
                        )}
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Blog