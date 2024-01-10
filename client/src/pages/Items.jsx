import React from "react";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { Button } from 'react-bootstrap';
import { Table } from 'react-bootstrap';
function Items() {
    // Use the useFetch hook to fetch the items data from the /items endpoint
    const { data: items, loading, error } = useFetch("/items");
  
    // Return a JSX element to display the items list in a table
    return (
      <div className="Items">
        <h1>Items List</h1>
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {items && (
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Category</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>${item.price}</td>
                  <td>{item.category}</td>
                  <td>
                    <Link to={`/items/${item.id}`}>
                      <Button variant="info">View</Button>
                    </Link>
                    <Link to={`/items/update/${item.id}`}>
                      <Button variant="warning">Update</Button>
                    </Link>
                    <Link to={`/items/delete/${item.id}`}>
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
  export default Items;
  