import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import styledComponents from "styled-components";
const LoginButton = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();

    return (
        !isAuthenticated && (
            <Button onClick={() => loginWithRedirect({
                options: {
                    redirectUri: window.location.origin
                }
            })}>
                Login
            </Button >
        )
    )
}
const Button = styledComponents.button`
    
    border: 1px solid orange;
    border-radius: 5px;
    color: black;
    cursor: pointer;
    margin-left: 10px;
    text-align: center;
height: 40px;
width: 5vw;
    &:hover {
        color: orange;
    }`

export default LoginButton
