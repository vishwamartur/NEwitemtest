import React from "react";
import { useHistory } from "react-router-dom";
import api from "../utils/api";
import { Form } from "react-bootstrap";
import { useState } from "react";
import Button from "react-bootstrap";

function CreateBook() {
  // Declare state variables to store the book title, author, image, and description
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  // Declare a variable to store the history object from React Router
  const history = useHistory();

  // Define a function to handle the form submission
  const handleSubmit = (event) => {
    // Prevent the default browser behavior
    event.preventDefault();

    // Create a book object with the state values
    const book = { title, author, image, description };

    // Use the api helper function to make a POST request to the /books/add endpoint with the book object
    api
      .post("/books/add", book)
      .then((response) => {
        // If the request is successful, log the response to the console
        console.log(response.data);

        // Redirect the user to the home page
        history.push("/");
      })
      .catch((error) => {
        // If there is an error, log it to the console
        console.error(error);
      });

    // Reset the state variables to empty strings
    setTitle("");
    setAuthor("");
    setImage("");
    setDescription("");
  };

  // Return a JSX element to display the form for creating a book
  return (
    <div className="CreateBook">
      <h1>Create Book</h1>
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
          Submit
        </Button>
      </Form>
    </div>
  );
}
export default CreateBook;
