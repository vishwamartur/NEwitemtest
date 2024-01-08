import React from "react";
import { Auth0Provider } from "@auth0/auth0-react";
import Constants from "../config/constants";
import { useHistory } from "react-router-dom";

function useAuth({ children }) {
  // Declare a variable to store the history object from React Router
  const history = useHistory();

  // Define a function to handle the authentication callback
  const onRedirectCallback = (appState) => {
    // Redirect the user to the previous page or the home page
    history.push(appState?.returnTo || window.location.pathname);
  };

  // Return the Auth0Provider component with the configuration values and the children props
  return (
    <Auth0Provider
      domain={Constants.AUTH0_DOMAIN}
      clientId={Constants.AUTH0_CLIENT_ID}
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
}
export default useAuth;
