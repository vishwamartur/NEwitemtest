import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Items from "./pages/Items";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Reservations from "./pages/Reservations";
import Navbar from "./components/Navbar";
function App() {
  // Return a JSX element that wraps the BrowserRouter component around the Switch and Route components
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" component={Home} />
          <Route path="/items" component={Items} />
          <Route path="/login" component={Login} />
          <Route path="/profile" component={Profile} />
          <Route path="/reservations" component={Reservations} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
