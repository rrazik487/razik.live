import Head from 'next/head';
import { motion } from 'framer-motion';
import NavBehavior from '../components/NavBehavior';


export default function Home() {
  return (
    <>
      <Head>
        <title>Razik | Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Portfolio of S. Razikur Rahman - Cybersecurity, Electronics, Pentesting Projects" />
      </Head>

      <NavBehavior />

      <nav>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#certifications">Certifications</a>
        <a href="#contact">Contact</a>
      </nav>

      <motion.section id="home" className="hero" initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <h1>Welcome to My Portfolio</h1>
        <p>Cybersecurity Enthusiast | Electronics Engineer | Pentester</p>
      </motion.section>

      <motion.section id="projects" className="projects" initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ staggerChildren: 0.3 }}>
        {[
          { title: 'Smart Yoga Mat', desc: 'AI-powered yoga mat for real-time posture correction.' },
          { title: 'NavIC Sentinel', desc: "Secure GPS tracking system using India's NavIC." },
          { title: 'CTF Challenges', desc: 'Participated in cybersecurity challenges, securing a top 10 position.' }
        ].map((proj, index) => (
          <motion.div
            key={index}
            className="project-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <h3>{proj.title}</h3>
            <p>{proj.desc}</p>
          </motion.div>
        ))}
      </motion.section>

      <motion.section id="skills" className="skills" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.2 }}>
        <h2>Skills</h2>
        <ul>
          <li>Cybersecurity & Ethical Hacking</li>
          <li>Networking & Web Security</li>
          <li>Embedded Systems & IoT</li>
          <li>Python, Bash, C, Verilog</li>
        </ul>
      </motion.section>

      <footer id="contact">
        <p>© 2025 S. Razikur Rahman | All rights reserved.</p>
      </footer>

      <button id="backToTop" className="back-to-top">↑</button>
    </>
  );
}
