import React, { useState, useEffect } from "react";

function useFetch(url, options) {
  // Declare the state variables
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Use the useEffect hook to perform the fetch request
  useEffect(() => {
    // Set the loading state to true
    setLoading(true);

    // Use the fetch API to make the request
    fetch(url, options)
      .then((response) => {
        // Check if the response is ok
        if (response.ok) {
          // Convert the response to JSON
          return response.json();
        } else {
          // Throw an error with the status text
          throw new Error(response.statusText);
        }
      })
      .then((data) => {
        // Set the data state to the fetched data
        setData(data);
        // Set the loading state to false
        setLoading(false);
      })
      .catch((error) => {
        // Set the error state to the error message
        setError(error.message);
        // Set the loading state to false
        setLoading(false);
      });
  }, [url, options]); // Pass the url and options as dependencies

  // Return the state variables
  return { data, loading, error };
}

export default useFetch;
