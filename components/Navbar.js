import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar = () => {
  const router = useRouter();

  const getActiveClass = (path) => (router.pathname === path ? 'active' : '');

  return (
    <nav>
      <Link href="/" className={getActiveClass('/')}>Home</Link>
      <Link href="/projects" className={getActiveClass('/projects')}>Projects</Link>
      <Link href="/certifications" className={getActiveClass('/certifications')}>Certifications</Link>
      <Link href="/about" className={getActiveClass('/about')}>Skills</Link>
      <Link href="/contact" className={getActiveClass('/contact')}>Contact</Link>
    </nav>
  );
};

export default Navbar;
