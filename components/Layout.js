import Head from 'next/head';
import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className="min-h-screen flex flex-col bg-white text-gray-900">
        {/* Header */}
        <header className="bg-black text-white shadow-md">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold">Razik</h1>
            <nav className="space-x-4">
              <Link href="/" className="hover:text-gray-300">
                Home
              </Link>
              <Link href="/about" className="hover:text-gray-300">
                About
              </Link>
              <Link href="/certifications" className="hover:text-gray-300">
                Certifications
              </Link>
              <Link href="/contact" className="hover:text-gray-300">
                Contact
              </Link>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-grow">{children}</main>

        {/* Footer */}
        <footer className="bg-gray-100 text-center py-4 mt-10 border-t">
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} Razik. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}
