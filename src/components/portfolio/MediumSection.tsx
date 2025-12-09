import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';

interface MediumArticle {
  title: string;
  link: string;
  pubDate: string;
  content: string;
  contentSnippet: string;
  guid: string;
  isoDate: string;
}

const MEDIUM_RSS_FEED = 'https://medium.com/feed/@caritaemelie';
const RSS2JSON_API = 'https://api.rss2json.com/v1/api.json?rss_url=';

const formatDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', options);
};

// Function to clean and format content
const stripHtml = (html: string): string => {
  if (!html) return '';

  // First remove HTML tags
  let cleaned = html.replace(/<[^>]*>?/gm, '');

  // Remove common photo credit patterns at the start
  cleaned = cleaned
    .replace(/^\s*(Photo by|Image by|Photo credit:?|Image credit:?|©|\u00a9)[^\n\r]+[\n\r]+/i, '')
    .replace(/^\s*[\w\s]*\(?:(?:[Cc]ourtesy|via|by|©|\u00a9)[^\n\r]*\)[\s\n\r]*/i, '')
    .replace(/^[^\w]*\b(?:Photo|Image|Picture|Pix|Pic|Snap|Shot|Credit)[^\w]*/i, '');

  // Clean up any remaining artifacts
  return cleaned
    .replace(/\n+/g, ' ')      // Replace multiple newlines with space
    .replace(/\s+/g, ' ')      // Replace multiple spaces with single space
    .replace(/^[\s.,;:!?]+/, '') // Remove leading punctuation
    .trim();
};

const estimateReadTime = (text: string) => {
  const wordsPerMinute = 200;
  const words = text.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
};

// Default articles to show if the API call fails
const DEFAULT_ARTICLES: MediumArticle[] = [
  {
    title: "Not a PHP developer, but you need to quickly run a PHP project on your local system for reasons best known to you?",
    link: "https://medium.com/@caritaemelie/not-a-php-developer-but-you-need-to-quickly-run-a-php-project-on-your-local-system-for-reasons-1f1d32e7efea",
    pubDate: "2025-11-26T00:00:00.000Z",
    content: "I was in the same situation recently. So here's a simple, no-stress guide to get a PHP project running on your Mac — no XAMPP, no Apache configuration nightmares, no wasted hours.",
    contentSnippet: "I was in the same situation recently. So here's a simple, no-stress guide to get a PHP project running on your Mac — no XAMPP, no Apache configuration nightmares, no wasted hours.",
    guid: "default-1",
    isoDate: "2025-11-26T00:00:00.000Z",
  },
  {
    title: "Let’s Talk DNS: The Internet’s Phone Book.… Cloudflare?",
    link: "https://medium.com/@caritaemelie/lets-talk-dns-the-internet-s-phone-book-cloudflare-7d07cdafcbb5",
    pubDate: "2025-11-18T00:00:00.000Z",
    content: "Our clients are calling, I check their sites, browser is working, host is working, but the middleman Cloudflare is throwing an error. I want to log in to the Cloudflare dashboard and check what could be wrong. I can’t even log in. This is how I knew Cloudflare went down today.",
    contentSnippet: "But what is DNS, what does it do, and how does Cloudflare come in?",
    guid: "default-2",
    isoDate: "2025-11-18T00:00:00.000Z"
  },
  {
    title: "Let’s Talk Rollups… Arbitrum, zkSync. Sound Familiar? Welcome to Layer 2",
    link: "https://medium.com/@caritaemelie/lets-talk-rollups-arbitrum-zksync-sound-familiar-welcome-to-layer-2-916c00e3145a",
    pubDate: "2025-11-07T00:00:00.000Z",
    content: "Instead of every transaction being processed directly on the slow, expensive main chain, rollups “roll up” hundreds or thousands of transactions into a single batch.",
    contentSnippet: "A rollup is a Layer 2 solution that helps scale Layer 1 blockchains like Ethereum....",
    guid: "default-3",
    isoDate: "2025-11-07T00:00:00.000Z"
  },
  {
    title: "Understanding Blockchain Layers (As a Web2 Dev Who Thought It Was About Versions… Spoiler: It is Not)",
    link: "https://medium.com/@caritaemelie/understanding-blockchain-layers-as-a-web2-dev-who-thought-it-was-about-versions-spoiler-it-is-5e198be6a5b3",
    pubDate: "2025-11-07T00:00:00.000Z",
    content: "When I first heard of blockchain layers, as a Web2 dev, my mind quickly went to versions… you know, “Layer 1.0,” “Layer 2.0,” something like that.",
    contentSnippet: "When I first heard of blockchain layers, as a Web2 dev, my mind quickly went to versions… you know, “Layer 1.0,” “Layer 2.0,” something like that.",
    guid: "default-4",
    isoDate: "2025-11-07T00:00:00.000Z"
  }
];

const MediumSection = () => {
  const [articles, setArticles] = useState<MediumArticle[]>(DEFAULT_ARTICLES);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMediumArticles = async () => {
      try {
        const response = await fetch(`${RSS2JSON_API}${encodeURIComponent(MEDIUM_RSS_FEED)}`);
        if (!response.ok) throw new Error('Failed to fetch articles');

        const data = await response.json();

        const validItems: MediumArticle[] = data.items.map((item: any) => ({
          title: item.title,
          link: item.link,
          pubDate: item.pubDate,
          content: stripHtml(item.content || ''),
          contentSnippet: stripHtml(item.description || ''),
          guid: item.guid,
          isoDate: item.pubDate
        }));

        setArticles(validItems);
      } catch (err) {
        console.warn('Using default articles as fallback. Error fetching Medium articles:', err);
        // Don't show error to users since we have fallback content
        setError(null);
      } finally {
        setLoading(false);
      }
    };

    fetchMediumArticles();
  }, []);

  return (
    <section id="writing" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm tracking-wider uppercase">Blog</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-foreground">
            Latest Writing
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I share my experiences and insights on software development, Web3, and technology on Medium.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-6" />
        </motion.div>

        {/* Content */}
        {loading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
            <p className="mt-4 text-muted-foreground">Loading articles...</p>
          </div>
        ) : error ? (
          <div className="text-center py-12">
            <p className="text-destructive">{error}</p>
            <Button
              variant="outline"
              className="mt-4"
              onClick={() => window.location.reload()}
            >
              Retry
            </Button>
          </div>
        ) : (
          <>
            {/* Articles Grid */}
            <div className="grid md:grid-cols-2 gap-6 auto-rows-fr">
              {articles.slice(0, 4).map((article, index) => {
                const content = stripHtml(article.content || article.contentSnippet || '');
                // Clean the content by removing HTML tags and truncating
                const cleanContent = stripHtml(content);
                const excerpt = article.contentSnippet ? stripHtml(article.contentSnippet) : cleanContent.substring(0, 200) + '...';

                return (
                  <motion.div
                    key={article.guid || article.link}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="h-full"
                  >
                    <a
                      href={article.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block h-full"
                    >
                      <div className="h-full p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 flex flex-col">
                        {/* Meta info */}
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                          <span className="flex items-center gap-1.5 whitespace-nowrap">
                            <Calendar className="h-4 w-4 flex-shrink-0" />
                            <span>{formatDate(article.pubDate)}</span>
                          </span>
                          <span className="flex items-center gap-1.5 whitespace-nowrap">
                            <BookOpen className="h-4 w-4 flex-shrink-0" />
                            <span>{estimateReadTime(content)}</span>
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2 min-h-[3.5rem] overflow-hidden">
                          {article.title}
                        </h3>

                        {/* Excerpt */}
                        <div
                          className="text-muted-foreground leading-relaxed line-clamp-3 mb-4 flex-g-1 overflow-hidden text-ellipsis"
                          style={{
                            display: '-webkit-box',
                            WebkitLineClamp: 3,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden',
                            minHeight: '4.5rem'
                          }}
                        >
                          {excerpt}
                        </div>

                        {/* Read more */}
                        <div className="flex items-center text-primary font-medium mt-auto pt-2">
                          <span>Read on Medium</span>
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform flex-shrink-0" />
                        </div>
                      </div>
                    </a>
                  </motion.div>
                );
              })}
            </div>

            {/* View All Button */}
            {articles.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-center mt-12"
              >
                <a href="https://medium.com/@caritaemelie" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="px-8">
                    <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22.4 2.2H1.6a1.6 1.6 0 0 0-1.6 1.6v16.4a1.6 1.6 0 0 0 1.6 1.6h20.8a1.6 1.6 0 0 0 1.6-1.6V3.8a1.6 1.6 0 0 0-1.6-1.6zM7.2 17.6H3.2V9.6h4v8zm-2-9.2a2.4 2.4 0 1 1 0-4.8 2.4 2.4 0 0 1 0 4.8zm13.6 9.2h-4v-4.8c0-1.2 0-2.8-1.6-2.8s-1.8 1.2-1.8 2.8v4.8H9.6V9.6h4v1.4a3.6 3.6 0 0 1 3.2-1.8c3.2 0 3.6 2.4 3.6 4.8v4.8z" />
                    </svg>
                    View All Articles on Medium
                  </Button>
                </a>
              </motion.div>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default MediumSection;
