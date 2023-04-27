import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import styledComponents from "styled-components";
const LoginButton = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();

    return (
        !isAuthenticated && (
            <Button onClick={() => loginWithRedirect()}>
                Login
            </Button >
        )
    )
}
const Button = styledComponents.button`
    height: 40px;
padding:10px;
color: blue;
background-color: orange;
:hover {
    cursor: pointer;
background-color: green;}
    border: 1px solid orange;
    border-radius: 5px;
    color: black;
    cursor: pointer;
    margin-left: 10px;
    text-align: center;
width: 5vw;
   `

export default LoginButton
