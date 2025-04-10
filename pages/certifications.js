import Head from 'next/head';
import Layout from '../components/Layout';
import Certifications from '../components/Certifications';

export default function CertificationsPage() {
  return (
    <Layout>
      <Head>
        <title>Certifications | Razik</title>
        <meta
          name="description"
          content="Explore the certifications of S. Razikur Rahman in cybersecurity and technology."
        />
      </Head>
      <div className="max-w-3xl mx-auto py-10 px-4">
        <Certifications />
      </div>
    </Layout>
  );
}
