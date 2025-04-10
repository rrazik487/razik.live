import Head from 'next/head';
import Layout from '../app/layout';
import Projects from '../components/Projects';

export default function ProjectsPage() {
  return (
    <Layout>
      <Head>
        <title>Projects | Razik</title>
        <meta name="description" content="Explore projects by S. Razikur Rahman in cybersecurity, IoT, and electronics engineering." />
      </Head>
      <Projects />
    </Layout>
  );
}
