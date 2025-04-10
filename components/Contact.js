import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section className="contact-section">
      <h2>Contact Me</h2>
      <motion.div
        className="contact-card"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <p>
          <strong>Email:</strong>{' '}
          <a href="mailto:rrazik487@gmail.com">rrazik487@gmail.com</a>
        </p>
        <p>
          <strong>Phone:</strong> 6382308661
        </p>
      </motion.div>
    </section>
  );
}
