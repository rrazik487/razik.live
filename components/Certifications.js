import { motion } from 'framer-motion';

const certifications = [
  {
    name: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2025"
  },
  {
    name: "Certified Ethical Hacker (CEH)",
    issuer: "EC-Council",
    date: "2024"
  },
  {
    name: "Frontend Developer - Coursera",
    issuer: "Meta",
    date: "2023"
  }
];

export default function Certifications() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-10 text-center">Certifications</h1>
      
      <div className="max-w-3xl mx-auto">
        {certifications.map((cert, index) => (
          <motion.div 
            key={index}
            className="mb-6 bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-lg overflow-hidden shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-blue-300">{cert.name}</h3>
              <div className="flex justify-between text-gray-300">
                <p>{cert.issuer}</p>
                <p>{cert.date}</p>
              </div>
            </div>
            <div className="h-1 bg-gradient-to-r from-blue-600 to-cyan-400"></div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}