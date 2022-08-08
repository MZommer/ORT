import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
export default function User({id, name, lastName, email, age}) {
    return (
        <Card style={{ width: '20rem', margin: "0.25rem" }}>
          <Card.Body>
            <Card.Title>{name} {lastName}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{email}</Card.Subtitle>
            { age ? <Card.Subtitle className="mb-2 text-muted">{age} years old</Card.Subtitle> : <></>}
            <Link to={`/user/${id}`}><Button className="boton" variant="primary">Details</Button></Link>
          </Card.Body>
        </Card>
    );
}