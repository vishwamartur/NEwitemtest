import React from "react";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { Button } from 'react-bootstrap';
import { Table } from 'react-bootstrap';
function Reservations() {
    // Use the useFetch hook to fetch the reservations data from the /reservations endpoint
    const { data: reservations, loading, error } = useFetch("/reservations");
  
    // Return a JSX element to display the reservations list in a table
    return (
      <div className="Reservations">
        <h1>Reservations List</h1>
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {reservations && (
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Item</th>
                <th>Date</th>
                <th>Time</th>
                <th>User</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {reservations.map((reservation) => (
                <tr key={reservation.id}>
                  <td>{reservation.item.name}</td>
                  <td>{reservation.date}</td>
                  <td>{reservation.time}</td>
                  <td>{reservation.user.username}</td>
                  <td>
                    <Link to={`/reservations/${reservation.id}`}>
                      <Button variant="info">View</Button>
                    </Link>
                    <Link to={`/reservations/update/${reservation.id}`}>
                      <Button variant="warning">Update</Button>
                    </Link>
                    <Link to={`/reservations/delete/${reservation.id}`}>
                      <Button variant="danger">Delete</Button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </div>
    );
  }
  export default Reservations;
  