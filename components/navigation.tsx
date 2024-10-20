"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <nav>
      <li>
        <Link href="/">Home</Link>{pathname === '/' && '🏠'}
        </li>
      <li>
        <Link href="/about-us">About Us</Link>{pathname === '/about-us' && '🔥'}
      </li>
    </nav>
  );
}