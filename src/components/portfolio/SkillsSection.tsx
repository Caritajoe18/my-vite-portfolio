import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: "Backend",
    color: "from-blue-500 to-cyan-500",
    skills: ["Node.js", "Express", "FastAPI", "TypeScript", "REST APIs", "Microservices", "Python"]
  },
  {
    title: "Frontend",
    color: "from-purple-500 to-pink-500",
    skills: ["React", "TailwindCSS", "Component Design", "Responsive UI", "State Management"]
  },
  {
    title: "Databases",
    color: "from-green-500 to-emerald-500",
    skills: ["PostgreSQL", "MySQL", "Redis", "Prisma", "Sequelize", "Database Design"]
  },
  {
    title: "Cloud & DevOps",
    color: "from-orange-500 to-amber-500",
    skills: ["DigitalOcean", "Docker", "Nginx", "CI/CD", "GitHub Actions", "Linux"]
  },
  {
    title: "Web3",
    color: "from-indigo-500 to-violet-500",
    skills: ["Solidity", "Rust", "Smart Contracts", "Ethereum", "DeFi", "NFTs"]
  },
  {
    title: "Tools",
    color: "from-rose-500 to-red-500",
    skills: ["Git", "Supabase", "VS Code", "Postman", "Figma", "Jira"]
  }
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm tracking-wider uppercase">Tech Stack</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-foreground">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl -z-10"
                style={{ backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))` }}
              />
              <div className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 h-full">
                {/* Category header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${category.color}`} />
                  <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm font-medium rounded-lg bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors duration-200 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional tools bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 p-6 rounded-2xl bg-card border border-border"
        >
          <p className="text-center text-muted-foreground mb-4">Also experienced with</p>
          <div className="flex flex-wrap justify-center gap-4">
            {["GraphQL", "WebSockets", "Jest", "Stripe API", "Flutterwave", "Termii", "AWS S3", "Cloudflare"].map((tool) => (
              <span
                key={tool}
                className="px-4 py-2 text-sm font-medium rounded-full border border-border text-muted-foreground hover:border-primary hover:text-primary transition-colors duration-200"
              >
                {tool}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
