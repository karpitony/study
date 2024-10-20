import { Suspense } from "react";
import MovieInfo from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

interface MovieDetailProps {
  params: {
    id: string;
  };
}

export default async function MovieDetail({params: {id}}: MovieDetailProps) {

  console.log('end fetching');
  return (
    <div>
      <h3>Movie detail page</h3>
      <Suspense fallback={<h2>Loading movie id...</h2>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h2>Loading movie videos...</h2>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}