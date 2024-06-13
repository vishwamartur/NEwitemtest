import React from "react";
import { useParams, useHistory } from "react-router-dom";
import api from "../utils/api";
import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

function UpdateBookInfo() {
  // Declare state variables to store the book title, author, image, and description
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  // Declare a variable to store the book id from the URL parameter
  const { id } = useParams();

  // Declare a variable to store the history object from React Router
  const history = useHistory();

  // Define a function to handle the form submission
  const handleSubmit = (event) => {
    // Prevent the default browser behavior
    event.preventDefault();

    // Create a book object with the state values
    const book = { title, author, image, description };

    // Use the api helper function to make a PUT request to the /books/update/:id endpoint with the book object and the book id
    api
      .put(`/books/update/${id}`, book)
      .then((response) => {
        // If the request is successful, log the response to the console
        console.log(response.data);

        // Redirect the user to the book details page
        history.push(`/books/${id}`);
      })
      .catch((error) => {
        // If there is an error, log it to the console
        console.error(error);
      });
  };

  // Use the useEffect hook to fetch the book data from the backend API by the book id
  useEffect(() => {
    // Use the api helper function to make a GET request to the /books/:id endpoint with the book id
    api
      .get(`/books/${id}`)
      .then((response) => {
        // If the request is successful, update the state variables with the response data
        setTitle(response.data.title);
        setAuthor(response.data.author);
        setImage(response.data.image);
        setDescription(response.data.description);
      })
      .catch((error) => {
        // If there is an error, log it to the console
        console.error(error);
      });
  }, [id]); // Pass the book id as a dependency to run the effect only when it changes

  // Return a JSX element to display the form for updating a book
  return (
    <div className="UpdateBookInfo">
      <h1>Update Book Info</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="author">
          <Form.Label>Author</Form.Label>
          <Form.Control
            type="text"
            value={author}
            onChange={(event) => setAuthor(event.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="image">
          <Form.Label>Image URL</Form.Label>
          <Form.Control
            type="text"
            value={image}
            onChange={(event) => setImage(event.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Update
        </Button>
      </Form>
    </div>
  );
}
export default UpdateBookInfo;
