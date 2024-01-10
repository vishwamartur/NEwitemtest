import React from "react";
import { Link } from "react-router-dom";
import { Card, Button } from 'react-bootstrap';

function BookCard({ book }) {
  return (
    <div className="BookCard">
      <Card>
        <Card.Img variant="top" src={book.image} />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
          <Card.Text>{book.author}</Card.Text>
          <Link to={`/books/${book.id}`}>
            <Button variant="primary">View Details</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
}
export default BookCard;
