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
    <section id="about" className="py-24 bg-gradient-to-b from-background to-card/30">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm tracking-wider uppercase font-semibold">About Me</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-foreground">
            Crafting Digital Solutions
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary via-accent to-primary mx-auto rounded-full" />
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
              I am a Software Developer developer passionate about building reliable, easy-to-maintain applications.
              My expertise spans from backend systems with <span className="text-primary font-semibold">Node.js</span>,
              <span className="text-primary font-semibold"> TypeScript</span>, and
              <span className="text-primary font-semibold"> FastAPI</span> to modern frontends with
              <span className="text-primary font-semibold"> React</span>.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Beyond traditional web development, I also work in the Web3 space, where I build smart contracts and decentralized applications using Solidity and Rust. This helps me connect traditional systems with blockchain technology in a practical and effective way.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Outside coding, I enjoy music and reading books. One of my favourites is
              <span className="text-primary font-semibold"> The Perfect Planet </span>
              by Edward Packard, #80 in the “Choose Your Own Adventure” series.
            </p>


            {/* Stats */}
            {/* <div className="grid grid-cols-3 gap-6">
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center p-4 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/30 shadow-lg shadow-primary/10"
              >
                <div className="text-3xl font-bold text-primary">{import.meta.env.VITE_YEARS_EXPERIENCE || '5+'}</div>
                <div className="text-sm text-muted-foreground font-medium">Years Experience</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center p-4 rounded-xl bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/30 shadow-lg shadow-accent/10"
              >
                <div className="text-3xl font-bold text-accent">{import.meta.env.VITE_PROJECTS_COMPLETED || '20+'}</div>
                <div className="text-sm text-muted-foreground font-medium">Projects Built</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center p-4 rounded-xl bg-gradient-to-br from-primary/10 to-accent/5 border border-primary/30 shadow-lg shadow-primary/10"
              >
                <div className="text-3xl font-bold text-primary">{import.meta.env.VITE_HAPPY_CLIENTS || '10+'}</div>
                <div className="text-sm text-muted-foreground font-medium">Happy Clients</div>
              </motion.div>
            </div> */}
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
                whileHover={{ scale: 1.03, y: -5 }}
                className="p-6 rounded-2xl bg-gradient-to-br from-background to-card border border-border hover:border-primary/50 shadow-lg hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 group-hover:from-primary/30 group-hover:to-accent/30 transition-all shadow-md shadow-primary/20">
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
