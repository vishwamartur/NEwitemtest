import React from "react";
//import { Link } from "react-router-dom";
import BookCard from "../components/BookCard";
import { Container, Row, Col } from 'react-bootstrap';
import { useState, useEffect } from 'react';
function Home() {
    // Declare a state variable to store the book data
    const [books, setBooks] = useState([]);
  
    // Use the useEffect hook to fetch the book data from the backend API
    useEffect(() => {
      // Use the fetch API to make a GET request to the /books endpoint
      fetch("/books")
        .then((response) => {
          // If the request is successful, convert the response to JSON
          return response.json();
        })
        .then((data) => {
          // Update the books state variable with the data
          setBooks(data);
        })
        .catch((error) => {
          // If there is an error, log it to the console
          console.error(error);
        });
    }, []); // Pass an empty array as the second argument to run the effect only once
  
    // Return a JSX element to display the book list in a grid
    return (
      <div className="Home">
        <h1>Book List</h1>
        <Container>
          <Row>
            {books.map((book) => (
              <Col md={4} key={book.id}>
                <BookCard book={book} />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    );
  }
  export default Home;
