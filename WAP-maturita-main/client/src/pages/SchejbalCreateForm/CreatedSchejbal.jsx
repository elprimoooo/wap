import { useParams, Link } from "react-router-dom";

export default function CreatedSchejbal() {
  const { id } = useParams();

  return (
    <>
      <p>Schejbal was created: {id}</p>
      <Link to={`/schejbal/${id}`}>
        <p>View schejbal</p>
      </Link>
      <Link to={`/`}>
        <p>Go back</p>
      </Link>
    </>
  );
}
