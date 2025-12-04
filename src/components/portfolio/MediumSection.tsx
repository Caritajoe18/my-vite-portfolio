import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Placeholder articles - in production, these would come from Medium RSS feed
const articles = [
  {
    title: "Building Scalable APIs with FastAPI and PostgreSQL",
    excerpt: "A deep dive into creating production-ready APIs with async Python, covering database optimization, caching strategies, and deployment best practices.",
    date: "Dec 1, 2024",
    readTime: "8 min read",
    link: "#"
  },
  {
    title: "Smart Contract Security: Common Vulnerabilities and How to Avoid Them",
    excerpt: "Exploring the most critical security issues in Solidity development and implementing robust patterns to protect your decentralized applications.",
    date: "Nov 15, 2024",
    readTime: "12 min read",
    link: "#"
  },
  {
    title: "Microservices Architecture: Lessons Learned from Production",
    excerpt: "Real-world insights from building and maintaining microservices at scale, including service communication, monitoring, and debugging strategies.",
    date: "Nov 1, 2024",
    readTime: "10 min read",
    link: "#"
  },
  {
    title: "From Node.js to Rust: A Backend Developer's Journey",
    excerpt: "Comparing the development experience, performance characteristics, and use cases for Node.js and Rust in backend development.",
    date: "Oct 20, 2024",
    readTime: "15 min read",
    link: "#"
  }
];

const MediumSection = () => {
  return (
    <section id="writing" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4">
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

        <div className="grid md:grid-cols-2 gap-6">
          {articles.map((article, index) => (
            <motion.a
              key={article.title}
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group block"
            >
              <div className="h-full p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5">
                {/* Meta info */}
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-4 w-4" />
                    {article.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <BookOpen className="h-4 w-4" />
                    {article.readTime}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-muted-foreground leading-relaxed line-clamp-3 mb-4">
                  {article.excerpt}
                </p>

                {/* Read more */}
                <div className="flex items-center text-primary font-medium">
                  Read more
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a href={import.meta.env.VITE_MEDIUM_URL}target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="px-8">
              <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
              </svg>
              Read More on Medium
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default MediumSection;
