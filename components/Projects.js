import { motion } from 'framer-motion';

const projects = [
  {
    name: "Smart Yoga Mat",
    description: "AI-powered yoga mat for real-time posture correction."
  },
  {
    name: "NavIC Sentinel",
    description: "Secure GPS tracking system using India's NavIC."
  },
  {
    name: "CTF Challenges",
    description: "Participated in cybersecurity challenges, securing a top 10 position."
  }
];

export default function Projects() {
  return (
    <section className="projects-section">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <h3>{project.name}</h3>
            <p>{project.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
