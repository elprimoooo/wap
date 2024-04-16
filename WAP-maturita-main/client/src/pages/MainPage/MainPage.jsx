import "./MainPage.css";
import { Link } from "react-router-dom";

export default function MainPage() {
  return (
    <>
      <Link to={"/createdavid"}>
        <p>David create form</p>
      </Link>
      <Link to={"/updatedavid/df46g65df4g6df"}>
        <p>David update form</p>
      </Link>
      <Link to={"/davids"}>
        <p>David list</p>
      </Link>

      <Link to={"/createpawel"}>
        <p>Pawel create form</p>
      </Link>
      <Link to={"/updatepawel/df46g65df4g6df"}>
        <p>Pawel update form</p>
      </Link>
      <Link to={"/pawels"}>
        <p>Pawel list</p>
      </Link>

      <Link to={"/createschejbal"}>
        <p>Schejbal create form</p>
      </Link>
      <Link to={"/updateschejbal/df46g65df4g6df"}>
        <p>Schejbal update form</p>
      </Link>
      <Link to={"/schejbals"}>
        <p>Schejbal list</p>
      </Link>

      
<Link to={"/createondra"}>
        <p>Ondra create form</p>
      </Link>
      <Link to={"/updateondra/df46g65df4g6df"}>
        <p>Ondra update form</p>
      </Link>
      <Link to={"/ondras"}>
        <p>Ondra list</p>
      </Link>
    </>
  );
}
