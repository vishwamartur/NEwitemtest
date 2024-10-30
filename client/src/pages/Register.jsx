import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import AuthService from "../services/auth.service";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    AuthService.signup({ username, email, password })
      .then((response) => {
        console.log("Registration successful", response);
        navigate("/login");
      })
      .catch((error) => {
        console.error("Error registering", error);
        alert("Registration failed. Please try again.");
      });
  };

  return (
    <div className="Register">
      <h1>Register</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
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
          Register
        </Button>
      </Form>
    </div>
  );
}

export default Register;
