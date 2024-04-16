import { Link } from "react-router-dom"

export default function OndraLink(props) {

    return (
        <>
            <p>Name: {props.name}</p>
            <Link to={`/ondra/${props.id}`}>
                <p>View ondra</p>
            </Link>
        </>
    )
}