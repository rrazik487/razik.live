import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('/');
  const router = useRouter();

  useEffect(() => {
    setActiveLink(router.pathname);
  }, [router.pathname]);

  return (
    <nav className="navbar">
      <ul>
        <li className={activeLink === '/' ? 'active' : ''}>
          <Link href="/"><span>Home</span></Link>
        </li>
        <li className={activeLink === '/about' ? 'active' : ''}>
          <Link href="/about"><span>About</span></Link>
        </li>
        <li className={activeLink === '/projects' ? 'active' : ''}>
          <Link href="/projects"><span>Projects</span></Link>
        </li>
        <li className={activeLink === '/certifications' ? 'active' : ''}>
          <Link href="/certifications"><span>Certifications</span></Link>
        </li>
        <li className={activeLink === '/contact' ? 'active' : ''}>
          <Link href="/contact"><span>Contact</span></Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
