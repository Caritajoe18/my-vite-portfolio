import { motion } from 'framer-motion';
import { ExternalLink, Github, Image, ShoppingCart, Vote, FileSearch, Blocks, Church, Shield, Box } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: "ChurchSet",
    description: "A comprehensive church management system with member tracking, event scheduling, donation management, and communication tools. Built with role-based access control and real-time updates.",
    tech: ["Node.js", "TypeScript", "PostgreSQL", "Multi-Tenancy", "Redis", "Sequelize", "Database Design"],
    icon: Church,
    color: "from-blue-500 to-cyan-500",
    links: { live: "https://churchset.com/" }
  },
  {
    title: "Talk Safe",
    description:
      "A platform built for the international women’s movement to raise awareness about femicide and sexual violence against women. It provides a safe space where anyone can anonymously report abuse and seek support.",
    tech: ["MongoDB", "Nodejs", "React", "Teamwork"],

    icon: Shield,
    color: "from-green-500 to-emerald-500",
    links: { github: "https://talk-safe-app.vercel.app/", live: "https://talk-safe-app.vercel.app/" }
  },
  {
    title: "Drop It",
    description: "A decentralized app where verified individuals complete physical tasks (deliveries, errands, etc.) for others — powered by blockchain verification, escrow payments, and on-chain reputation.",
    tech: ["Ethereum", "Rust", "Foundry", "Nodejs", "React", "TailwindCSS"],
    icon: Box,
    color: "from-purple-500 to-pink-500",
    links: { github: "https://github.com/Caritajoe18/WIBA-final-Project", live: "https://dropit-seven.vercel.app/" }
  },
  {
    title: "Lovtiti Agro Mart",
    description: "A decentralized marketplace that connects farmers directly to buyers using Hedera blockchain technology",
    tech: ["Node.js", "Express", "PostgreSQL", "Nextjs", "Hedera", "Solidity", "TypeScript"],
    icon: ShoppingCart,
    color: "from-orange-500 to-amber-500",
    links: { github: "https://github.com/mgatogoh/lovtiti-agro-Hedera-ecommerce", live: "https://lovtiti-agro-hedera-ecommerce.vercel.app/" }
  },
  // {
  //   title: "Ranked-Choice Voting",
  //   description: "Secure voting system implementing ranked-choice algorithm in C. Features vote validation, real-time tallying, and audit logging for transparency.",
  //   tech: ["C", "Algorithms", "Data Structures", "Security"],
  //   icon: Vote,
  //   color: "from-rose-500 to-red-500",
  //   links: { github: "#" }
  // },
  //   {
  //     title: "Metadata Extractor",
  //     description: "FastAPI-based service for extracting and analyzing file metadata. Supports various file formats with structured JSON output and batch processing.",
  //     tech: ["FastAPI", "Python", "Docker", "REST API"],
  //     icon: FileSearch,
  //     color: "from-teal-500 to-cyan-500",
  //     links: { github: "#", live: "#" }
  //   },
  //   {
  //     title: "DeFi Smart Contracts",
  //     description: "Suite of smart contracts for decentralized finance applications including token swaps, staking pools, and yield farming mechanisms.",
  //     tech: ["Solidity", "Ethereum", "Hardhat", "Web3.js"],
  //     icon: Blocks,
  //     color: "from-indigo-500 to-violet-500",
  //     links: { github: "#" }
  //   },
  //   {
  //     title: "NFT Marketplace",
  //     description: "Rust-based smart contracts for NFT minting, trading, and royalty distribution. Includes auction functionality and collection management.",
  //     tech: ["Rust", "Solana", "Anchor", "React"],
  //     icon: Blocks,
  //     color: "from-fuchsia-500 to-purple-500",
  //     links: { github: "#", live: "#" }
  //   }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 bg-card/50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm tracking-wider uppercase">Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-foreground">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full p-6 rounded-2xl bg-background border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${project.color} p-3 group-hover:scale-110 transition-transform duration-300`}>
                    <project.icon className="w-full h-full text-white" />
                  </div>
                  <div className="flex gap-2">
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg hover:bg-muted transition-colors"
                      >
                        <Github className="h-5 w-5 text-muted-foreground hover:text-foreground" />
                      </a>
                    )}
                    {project.links.live && (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg hover:bg-muted transition-colors"
                      >
                        <ExternalLink className="h-5 w-5 text-muted-foreground hover:text-foreground" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-sm font-medium rounded-md bg-muted text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href={import.meta.env.VITE_GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" size="lg" className="px-8">
              <Github className="mr-2 h-5 w-5" />
              View All Projects on GitHub
            </Button>
          </a>

        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
