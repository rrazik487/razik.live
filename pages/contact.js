import Head from 'next/head';
import Layout from '../app/layout';
import Contact from '../components/Contact';

export default function ContactPage() {
  return (
    <Layout>
      <Head>
        <title>Contact | Razik</title>
        <meta name="description" content="Get in touch with S. Razikur Rahman via email or phone." />
      </Head>
      <Contact />
    </Layout>
  );
}
