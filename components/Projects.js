import { motion } from 'framer-motion';

const projects = [
  {
    name: "Smart Yoga Mat",
    description: "AI-powered yoga mat for real-time posture correction with advanced sensor technology and machine learning algorithms."
  },
  {
    name: "NavIC Sentinel",
    description: "Secure GPS tracking system using India's NavIC with encrypted communication and anti-tampering measures."
  },
  {
    name: "CTF Challenges",
    description: "Participated in cybersecurity Capture The Flag challenges, securing a top 10 position by solving complex security puzzles."
  }
];

export default function Projects() {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold mb-10">Projects</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-xl overflow-hidden shadow-xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-4 text-blue-300">{project.name}</h3>
              <p className="text-gray-300">{project.description}</p>
            </div>
            <div className="bg-blue-600 h-1"></div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}