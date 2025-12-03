import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { PortableText } from '@portabletext/react'
import { fetchPostBySlug, type SanityPost } from '@/lib/sanity'
import ModernHeader from '@/components/ModernHeader'
import Footer from '@/components/Footer'
import SEO from '@/components/SEO'
import Breadcrumb from '@/components/Breadcrumb'
import { Skeleton } from '@/components/ui/skeleton'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { ArrowLeft } from 'lucide-react'

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>()
  const [post, setPost] = useState<SanityPost | null>(null)
  const [loading, setLoading] = useState(true)
  const [notFound, setNotFound] = useState(false)

  useEffect(() => {
    const loadPost = async () => {
      if (!slug) {
        setNotFound(true)
        setLoading(false)
        return
      }

      try {
        const fetchedPost = await fetchPostBySlug(slug)
        if (fetchedPost) {
          setPost(fetchedPost)
        } else {
          setNotFound(true)
        }
      } catch (error) {
        console.error('Failed to load post:', error)
        setNotFound(true)
      } finally {
        setLoading(false)
      }
    }

    loadPost()
  }, [slug])

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <ModernHeader />
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
          <Skeleton className="h-16 w-3/4 mb-8" />
          <div className="flex items-center gap-4 mb-12">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div>
              <Skeleton className="h-5 w-32 mb-2" />
              <Skeleton className="h-4 w-24" />
            </div>
          </div>
          <Skeleton className="h-96 w-full rounded-2xl mb-12" />
          <div className="space-y-6">
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-6 w-3/4" />
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  if (notFound || !post) {
    return (
      <div className="min-h-screen bg-white">
        <SEO 
          title="Post Not Found - ContentLab"
          description="The requested blog post could not be found."
        />
        <ModernHeader />
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 text-center">
          <h1 className="text-5xl font-semibold text-gray-900 mb-6">Post Not Found</h1>
          <p className="text-xl text-gray-600 mb-12 font-normal">
            The blog post you're looking for doesn't exist or has been moved.
          </p>
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 text-gray-900 hover:text-orange-600 transition-colors text-lg font-normal"
          >
            <ArrowLeft className="h-5 w-5" />
            Back to Blog
          </Link>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title={`${post.title} - ContentLab Blog`}
        description={post.excerpt || `Read ${post.title} on the ContentLab blog`}
        url={`https://contentlab.live/blog/${post.slug.current}`}
      />
      
      <ModernHeader />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        <Link 
          to="/blog" 
          className="inline-flex items-center gap-2 text-gray-600 hover:text-orange-600 transition-colors mb-12 font-normal"
        >
          <ArrowLeft className="h-5 w-5" />
          Back to Blog
        </Link>

        <article>
          <header className="mb-16">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold text-gray-900 mb-8 leading-tight tracking-tight">
              {post.title}
            </h1>
            
            <div className="flex items-center gap-4 mb-12">
              {post.author && (
                <div className="flex items-center gap-3">
                  <Avatar className="h-14 w-14">
                    <AvatarImage 
                      src={post.author.image?.asset.url} 
                      alt={post.author.name} 
                    />
                    <AvatarFallback className="bg-gray-100 text-gray-600">
                      {post.author.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-gray-900 text-lg">{post.author.name}</p>
                    <p className="text-gray-500 text-sm font-normal">
                      {new Date(post.publishedAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {post.mainImage && (
              <div className="rounded-2xl overflow-hidden mb-12">
                <img
                  src={post.mainImage.asset.url}
                  alt={post.mainImage.alt || post.title}
                  className="w-full h-[400px] md:h-[500px] object-cover"
                />
              </div>
            )}
          </header>

          <div className="prose prose-lg max-w-none">
            {post.excerpt && (
              <p className="text-2xl text-gray-600 mb-12 leading-relaxed font-normal">
                {post.excerpt}
              </p>
            )}
            
            {post.body && (
              <div className="text-gray-900 leading-relaxed">
                <PortableText 
                  value={post.body}
                  components={{
                    block: {
                      normal: ({children}) => <p className="mb-6 text-lg text-gray-700 leading-relaxed font-normal">{children}</p>,
                      h1: ({children}) => <h1 className="text-4xl font-semibold text-gray-900 mt-12 mb-6 tracking-tight">{children}</h1>,
                      h2: ({children}) => <h2 className="text-3xl font-semibold text-gray-900 mt-10 mb-5 tracking-tight">{children}</h2>,
                      h3: ({children}) => <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4 tracking-tight">{children}</h3>,
                      blockquote: ({children}) => <blockquote className="border-l-4 border-orange-600 pl-6 italic my-8 text-gray-700 text-xl">{children}</blockquote>,
                    },
                    marks: {
                      strong: ({children}) => <strong className="font-semibold text-gray-900">{children}</strong>,
                      em: ({children}) => <em className="italic">{children}</em>,
                      link: ({children, value}) => (
                        <a href={value.href} className="text-orange-600 hover:text-orange-700 underline transition-colors" target="_blank" rel="noopener noreferrer">
                          {children}
                        </a>
                      ),
                    },
                    list: {
                      bullet: ({children}) => <ul className="list-disc list-outside ml-6 mb-6 space-y-2 text-gray-700">{children}</ul>,
                      number: ({children}) => <ol className="list-decimal list-outside ml-6 mb-6 space-y-2 text-gray-700">{children}</ol>,
                    },
                    listItem: {
                      bullet: ({children}) => <li className="mb-2 text-lg font-normal leading-relaxed">{children}</li>,
                      number: ({children}) => <li className="mb-2 text-lg font-normal leading-relaxed">{children}</li>,
                    },
                  }}
                />
              </div>
            )}
          </div>
        </article>
      </main>
      
      <Footer />
    </div>
  )
}

export default BlogPost