"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from '../styles/navigation.module.css';

export default function Navigation() {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li>
          <Link href="/">Home</Link>{pathname === '/' && '🏠'}
          </li>
        <li>
          <Link href="/about-us">About Us</Link>{pathname === '/about-us' && '🔥'}
        </li>
      </ul>
    </nav>
  );
}