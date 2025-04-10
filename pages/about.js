import Head from 'next/head';
import Layout from '../components/Layout';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <Layout>
      <Head>
        <title>About | Razik</title>
        <meta
          name="description"
          content="Learn more about S. Razikur Rahman - Cybersecurity Enthusiast and Electronics Engineer."
        />
      </Head>

      <motion.div
        className="max-w-3xl mx-auto py-10 px-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-bold mb-6">Who am I</h1>
        <p className="text-lg mb-4">
          I’m a cybersecurity enthusiast with a strong background in electronics engineering. I love exploring
          vulnerabilities, building embedded systems, and diving deep into the world of ethical hacking.
        </p>
        <p className="text-lg">
          I’ve worked on projects ranging from IoT security to GPS tracking using NavIC, and I’m passionate about
          using tech for real-world problem solving.
        </p>
      </motion.div>
    </Layout>
  );
}
