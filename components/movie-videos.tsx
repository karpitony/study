import { API_URL } from '../app/(home)/page';
import styles from '../styles/movie-videos.module.css';

async function getVideos(id: string) {
  // console.log(`Fetching videos: ${Date.now()}`);
  // await new Promise((resolve) => setTimeout(resolve, 3000));
  // throw new Error('something broke...');
  const response = await fetch(API_URL + `/${id}/videos`);
  return await response.json();
}

export default async function MovieVideos({id}: {id: string}) {
  const videos = await getVideos(id);
  return (
    <div className={styles.container}>
      {videos.map((video) => (
        <iframe key={video.id} src={`https://www.youtube.com/embed/${video.key}`} title={video.name}/>
      ))}
    </div>
  );
}