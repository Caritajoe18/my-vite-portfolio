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

const estimateReadTime = (text: string) => {
  const wordsPerMinute = 200;
  const words = text.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
};

const MediumSection = () => {
  const [articles, setArticles] = useState<MediumArticle[]>([]);
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
          content: item.content,
          contentSnippet: item.description,
          guid: item.guid,
          isoDate: item.pubDate,
        }));

        setArticles(validItems);
      } catch (err) {
        console.error('Error fetching Medium articles:', err);
        setError('Failed to load articles. Please try again later.');
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
            <div className="grid md:grid-cols-2 gap-6">
              {articles.slice(0, 4).map((article, index) => {
                const content = article.content || article.contentSnippet || '';
                const excerpt = article.contentSnippet || content.substring(0, 200) + '...';

                return (
                  <motion.a
                    key={article.guid || article.link}
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group block h-full"
                  >
                    <div className="h-full p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 flex flex-col">
                      {/* Meta info */}
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="h-4 w-4" />
                          {formatDate(article.pubDate)}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <BookOpen className="h-4 w-4" />
                          {estimateReadTime(content)}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                        {article.title}
                      </h3>

                      {/* Excerpt */}
                      <p
                        className="text-muted-foreground leading-relaxed line-clamp-3 mb-4 flex-grow"
                        dangerouslySetInnerHTML={{ __html: excerpt }}
                      />

                      {/* Read more */}
                      <div className="flex items-center text-primary font-medium mt-auto">
                        Read on Medium
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform" />
                      </div>
                    </div>
                  </motion.a>
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
