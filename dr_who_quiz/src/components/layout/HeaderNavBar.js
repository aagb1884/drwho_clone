import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { LoginButton } from "../auth0/buttons/login-button";
import { LogoutButton } from "../auth0/buttons/logout-button";
import { SignupButton } from "../auth0/buttons/signup-button";

export const HeaderNavBar = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="nav-bar__buttons">
      {!isAuthenticated && (
        <>
        <div className="signup-button">
          <SignupButton />
        </div>
        <div className="login-button">
          <LoginButton />
        </div>
        </>
      )}
      {isAuthenticated && (
        <div className="logout-button">
          <LogoutButton />
        </div>
      )}
    </div>
  );
};