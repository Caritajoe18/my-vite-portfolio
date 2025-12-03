import { motion } from 'framer-motion';
import { Code2, Server, Blocks, Lightbulb } from 'lucide-react';

const highlights = [
  {
    icon: Server,
    title: "Backend Architecture",
    description: "Building scalable APIs and microservices with Node.js, TypeScript, and FastAPI"
  },
  {
    icon: Blocks,
    title: "Web3 Development",
    description: "Creating smart contracts and blockchain solutions with Solidity and Rust"
  },
  {
    icon: Code2,
    title: "Full-Stack Solutions",
    description: "End-to-end development from React frontends to cloud deployments"
  },
  {
    icon: Lightbulb,
    title: "Problem Solving",
    description: "Turning complex requirements into elegant, maintainable solutions"
  }
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-card/50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm tracking-wider uppercase">About Me</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-foreground">
            Crafting Digital Solutions
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I'm a full-stack developer with a passion for building robust, scalable applications. 
              My expertise spans from backend systems with <span className="text-primary font-medium">Node.js</span>, 
              <span className="text-primary font-medium"> TypeScript</span>, and 
              <span className="text-primary font-medium"> FastAPI</span> to modern frontends with 
              <span className="text-primary font-medium"> React</span>.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Beyond traditional web development, I venture into the 
              <span className="text-accent font-medium"> Web3 space</span>, building smart contracts 
              and decentralized applications using Solidity and Rust. This unique combination allows 
              me to bridge conventional systems with blockchain technology.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              My portfolio includes diverse projects: church management platforms, event systems, 
              SMS wallet integrations, supplier/customer ledger systems, batch-aware product sales, 
              image analysis APIs, and secure role-based applications. I approach each project with 
              a focus on clean architecture, performance, and maintainability.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center p-4 rounded-xl bg-background border border-border">
                <div className="text-3xl font-bold text-primary">5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-background border border-border">
                <div className="text-3xl font-bold text-primary">20+</div>
                <div className="text-sm text-muted-foreground">Projects Built</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-background border border-border">
                <div className="text-3xl font-bold text-primary">10+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
            </div>
          </motion.div>

          {/* Highlight cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className="p-6 rounded-2xl bg-background border border-border hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
