import { Suspense } from "react";
import { getMovie } from '../../../../components/movie-info';
import MovieInfo from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

interface MovieDetailProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({params: {id}}: MovieDetailProps) {
  const movie = await getMovie(id);
  return {
    title: movie.title,
  };
}

export default async function MovieDetail({params: {id}}: MovieDetailProps) {

  console.log('end fetching');
  return (
    <div>
      <Suspense fallback={<h2>Loading movie id...</h2>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h2>Loading movie videos...</h2>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}