import { motion } from 'framer-motion';

export default function Certifications() {
  const certs = [
    "Certified Ethical Hacker (CEH) – EC-Council",
    "Cybersecurity Analyst – TCS",
    "Foundations of Cybersecurity – Google"
  ];

  return (
    <section className="cert-section">
      <h2>Certifications</h2>
      <div className="cert-list">
        {certs.map((cert, index) => (
          <motion.div
            key={index}
            className="cert-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            {cert}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
