import Head from 'next/head';
import Layout from '../app/layout';
import Certifications from '../components/Certifications';

export default function CertificationsPage() {
  return (
    <Layout>
      <Head>
        <title>Certifications | Razik</title>
        <meta name="description" content="Explore the certifications of S. Razikur Rahman in cybersecurity and technology." />
      </Head>
      <Certifications />
    </Layout>
  );
}
