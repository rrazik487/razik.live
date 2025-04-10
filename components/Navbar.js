import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar = () => {
  const router = useRouter();

  const getActiveClass = (path) => (router.pathname === path ? 'active' : '');

  return (
    <div className="flex justify-between items-center">
      <h1 className="text-2xl font-bold">Razik</h1>
      <nav className="space-x-4">
        <Link href="/" className={getActiveClass('/')}>
          Home
        </Link>
        <Link href="/projects" className={getActiveClass('/projects')}>
          Projects
        </Link>
        <Link href="/about" className={getActiveClass('/about')}>
          About
        </Link>
        <Link href="/certifications" className={getActiveClass('/certifications')}>
          Certifications
        </Link>
        <Link href="/contact" className={getActiveClass('/contact')}>
          Contact
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;