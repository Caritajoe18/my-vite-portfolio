import { motion } from 'framer-motion';
import { Briefcase, Award, Rocket } from 'lucide-react';

const experiences = [
  {
    type: "role",
    title: "Backend Engineer",
    company: "RAD5 Tech Hub",
    period: "2024 - Present",
    description: "Building customised Enterprise Mangagement systems, APIs, solutions for clients across various industries. Specializing in Node.js, Database and Server management",
    highlights: [
      "Delivered projects that increases business efficiency",
      "Collaborating/ working closely with clients to understand their needs, designers and developers to build customised and scalable solutions that wil solve clients problems",
      "Working with SMEs to provide solutins to automate their processes processes that are repeated",
      "Mentored junior developers"

    ]
  },
  {
    type: "role",
    title: "Associate Software Developer",
    company: "Decagon Institute",
    period: "2023 - 2024",
    description: "End to end developement of applications, from designing, to API to deployment",
    highlights: [
      "Reduced API response times by 60%",
      "Implemented automated testing",
      "Mentored junior developers"
    ]
  }
];

const achievements = [
  // {
  //   icon: Award,
  //   title: "Smart Contract Audits",
  //   description: "Conducted security audits for DeFi protocols with combined TVL of $5M+"
  // },
  {
    icon: Rocket,
    title: "System Design",
    description: "Architected scalable solutions that can handle millions of requests daily"
  },
  {
    icon: Briefcase,
    title: "Technical Leadership",
    description: "Led development teams and established coding standards and best practices"
  }
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 bg-card/50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm tracking-wider uppercase">Career</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-foreground">
            Experience & Achievements
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience timeline */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
              <Briefcase className="h-6 w-6 text-primary" />
              Work Experience
            </h3>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border" />

              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.title + exp.company}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-12 pb-10 last:pb-0"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-2 top-1 w-5 h-5 rounded-full bg-primary border-4 border-background" />

                  <div className="p-6 rounded-2xl bg-background border border-border hover:border-primary/30 transition-all duration-300">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h4 className="text-lg font-bold text-foreground">{exp.title}</h4>
                      <span className="text-sm text-muted-foreground font-mono">{exp.period}</span>
                    </div>
                    <p className="text-primary font-medium mb-3">{exp.company}</p>
                    <p className="text-muted-foreground text-base mb-4">{exp.description}</p>
                    <ul className="space-y-1">
                      {exp.highlights.map((highlight) => (
                        <li key={highlight} className="text-base text-muted-foreground flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
              <Award className="h-6 w-6 text-primary" />
              Key Achievements
            </h3>
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 rounded-2xl bg-background border border-border hover:border-primary/30 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                      <achievement.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-foreground mb-2">{achievement.title}</h4>
                      <p className="text-muted-foreground">{achievement.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Skills summary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20"
            >
              <h4 className="text-lg font-bold text-foreground mb-4">Core Competencies</h4>
              <div className="flex flex-wrap gap-2">
                {["System Architecture", "API Design", "Database Optimization", "Smart Contracts", "Team Leadership", "Agile/Scrum", "Code Review", "Technical Writing"].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm font-medium rounded-lg bg-background/50 text-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
