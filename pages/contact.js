import Head from 'next/head';
import Layout from '../components/Layout';
import Contact from '../components/Contact';

export default function ContactPage() {
  return (
    <Layout>
      <Head>
        <title>Contact | Razik</title>
        <meta name="description" content="Get in touch with S. Razikur Rahman via email or phone." />
      </Head>
      <div className="max-w-3xl mx-auto py-10 px-4">
        <Contact />
      </div>
    </Layout>
  );
}
