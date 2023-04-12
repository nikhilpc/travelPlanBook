import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import styledComponents from "styled-components";
const LogoutButton = () => {
    const { logout, isAuthenticated } = useAuth0();

    return (
        (isAuthenticated && (
            < Button onClick={() => logout()}>
                Log out
            </ Button>
        )))

}
const Button = styledComponents.button`
    background-color: orange;
    border: 1px solid orange;
    border-radius: 5px;
    color: black;
    cursor: pointer;
    margin-left: 90vw;
height: 40px;
width: 5vw;
    &:hover {
        background-color: yellow;
        color: orange;
    }`
export default LogoutButton
