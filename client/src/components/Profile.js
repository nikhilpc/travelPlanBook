import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import styledComponents from "styled-components";

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <>
        <UserName> Hello {user.nickname} 👋</UserName>
      </>
    )
  )
}

const UserName = styledComponents.h1`
  font-size: 1.5rem;
  font-weight: 700;
  text-align: left;
  padding: 1rem;  }
  `
export default Profile
