interface MovieDetailProps {
  params: {
    id: string;
  };
}

export default function MovieDetail({params: {id}}: MovieDetailProps) {
  console.log(id);
  return (
    <h1>Movie {id}</h1>
  );
}