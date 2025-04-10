import Head from 'next/head';
import { motion } from 'framer-motion';
import Projects from '../components/Projects';
import Skills from '../components/Skills';

export default function Home() {
  return (
    <>
      <Head>
        <title>Razik | Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Portfolio of S. Razikur Rahman - Cybersecurity, Electronics, Pentesting Projects" />
      </Head>

      <motion.section 
        id="hero" 
        className="hero py-20 bg-gradient-to-r from-black via-gray-900 to-gray-800 text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Welcome to My Portfolio
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-blue-300"
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Cybersecurity Enthusiast | Electronics Engineer | Pentester
          </motion.p>
        </div>
      </motion.section>

      <motion.section 
        id="about" 
        className="py-16 bg-gray-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Who am I</h2>
          <p className="text-lg max-w-3xl mx-auto">
            I'm a cybersecurity enthusiast with a strong background in electronics engineering. I love exploring
            vulnerabilities, building embedded systems, and diving deep into the world of ethical hacking.
          </p>
        </div>
      </motion.section>

      <motion.section 
        id="projects" 
        className="py-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <Projects />
        </div>
      </motion.section>

      <motion.section 
        id="skills" 
        className="py-16 bg-gray-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <Skills />
        </div>
      </motion.section>

      <button id="backToTop" className="back-to-top">↑</button>
    </>
  );
}