import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import AuthService from "../services/auth.service";
import { Card, Button, Form, Container, Row, Col } from 'react-bootstrap';
function Profile() {
    // Use the useAuth0 hook to access the user object, the isAuthenticated boolean, and the logout method
    const { user, isAuthenticated, logout } = useAuth0();
  
    // Return a JSX element to display the user profile information
    return (
      <div className="Profile">
        {isAuthenticated && (
          <Card>
            <Card.Img variant="top" src={user.picture} />
            <Card.Body>
              <Card.Title>{user.name}</Card.Title>
              <Card.Text>{user.email}</Card.Text>
              <Button variant="danger" onClick={() => logout()}>
                Logout
              </Button>
            </Card.Body>
          </Card>
        )}
      </div>
    );
  }
  export default Profile;
  