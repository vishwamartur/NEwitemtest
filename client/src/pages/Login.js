import React from "react";
import { useNavigate } from 'react-router-dom';
import AuthService from "../services/auth.service";
import { Card, Button, Form, Container, Row, Col } from 'react-bootstrap';
import { useState, useEffect } from 'react';
function Login() {
    // Declare state variables to store the username and password
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
  
    // Declare a variable to store the history object from React Router
    const navigate = useNavigate();
  
    // Define a function to handle the form submission
    const handleSubmit = (event) => {
      // Prevent the default browser behavior
      event.preventDefault();
  
      // Use the AuthService object to login with the username and password
      AuthService.login(username, password)
        .then((data) => {
          // If the login is successful, redirect the user to the profile page
          navigate("/profile");
        })
        .catch((error) => {
          // If there is an error, display an alert with the error message
          alert(error.message);
        });
    };
  
    // Return a JSX element to display the login form
    return (
      <div className="Login">
        <h1>Login</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="username">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
      </div>
    );
  }
  export default Login;
