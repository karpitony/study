'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styles from '../styles/movie.module.css';

interface MovieProps {
  poster_path: string;
  title: string;
  id: string;
}

export default function Movie({poster_path, title, id}: MovieProps) {
  const router = useRouter();
  const onClick = () => {
    router.push(`/movies/${id}`);
  }
  return (
    <div className={styles.movie}>
      <img 
        src={poster_path}
        alt={title}
        onClick={onClick}
      />
      <Link prefetch href={`/movies/${id}`}>{title}</Link>
    </div>
  );
}