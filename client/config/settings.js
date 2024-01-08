import React from "react";
import Constants from "./constants";
function Settings() {
    // Declare state variables to store the settings values
    const [pageSize, setPageSize] = useState(Constants.PAGE_SIZE);
    const [themeColor, setThemeColor] = useState(Constants.THEME_COLOR);
  
    // Define a function to handle the form submission
    const handleSubmit = (event) => {
      // Prevent the default browser behavior
      event.preventDefault();
  
      // Save the settings values to the local storage
      localStorage.setItem("pageSize", pageSize);
      localStorage.setItem("themeColor", themeColor);
  
      // Reload the page to apply the changes
      window.location.reload();
    };
  
    // Use the useEffect hook to load the settings values from the local storage
    useEffect(() => {
      // Get the settings values from the local storage
      const storedPageSize = localStorage.getItem("pageSize");
      const storedThemeColor = localStorage.getItem("themeColor");
  
      // Update the state variables with the stored values
      if (storedPageSize) {
        setPageSize(storedPageSize);
      }
      if (storedThemeColor) {
        setThemeColor(storedThemeColor);
      }
    }, []); // Pass an empty array as the second argument to run the effect only once
  
    // Return a JSX element to display the settings form
    return (
      <div className="Settings">
        <h1>Settings</h1>
        <Card>
          <Card.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="pageSize">
                <Form.Label>Page size</Form.Label>
                <Form.Control
                  type="number"
                  value={pageSize}
                  onChange={(event) => setPageSize(event.target.value)}
                />
                <Form.Text className="text-muted">
                  The number of items to display per page
                </Form.Text>
              </Form.Group>
              <Form.Group controlId="themeColor">
                <Form.Label>Theme color</Form.Label>
                <Form.Control
                  as="select"
                  value={themeColor}
                  onChange={(event) => setThemeColor(event.target.value)}
                >
                  <option value="blue">Blue</option>
                  <option value="red">Red</option>
                  <option value="green">Green</option>
                </Form.Control>
                <Form.Text className="text-muted">
                  The color of the app theme
                </Form.Text>
              </Form.Group>
              <Button variant="primary" type="submit">
                Save
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
    );
  }
  