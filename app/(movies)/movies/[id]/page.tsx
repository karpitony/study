import { API_URL } from '../../../(home)/page';

interface MovieDetailProps {
  params: {
    id: string;
  };
}

async function getMovie(id: string) {
  console.log(`Fetching movies: ${Date.now()}`);
  await new Promise((resolve) => setTimeout(resolve, 5000));
  const response = await fetch(API_URL + `/${id}`);
  return await response.json();
}

async function getVideos(id: string) {
  console.log(`Fetching videos: ${Date.now()}`);
  await new Promise((resolve) => setTimeout(resolve, 5000));
  const response = await fetch(API_URL + `/${id}/videos`);
  return await response.json();
}

export default async function MovieDetail({params: {id}}: MovieDetailProps) {
  console.log('======================');
  console.log('start fetching');
  // const movie = await getMovie(id);
  // const videos = await getVideos(id);
  const [movie, videos ] = await Promise.all([getMovie(id), getVideos(id)])

  console.log('end fetching');
  return (
    <h1>{movie.title}</h1>
  );
}