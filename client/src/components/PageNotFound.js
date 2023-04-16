import React from 'react'
import { Link } from 'react-router-dom'
import PageNotFoundVideo from '../assets/404.gif'
import styledComponents from "styled-components";
const PageNotFound = () => {
    return (
        <Division>
            <h1>Welcome to Space</h1>
            <img src={PageNotFoundVideo} alt="Page Not Found" />
            <p style={{ textAlign: "center" }}>
                <Link to="/">Back to Home </Link>
            </p>
        </Division>
    )
}
const Division = styledComponents.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    text-align: center;
    font-size: 30px;
    font-weight: 900;
    text-shadow: 2px 2px 2px orange;
    text-decoration: none;
    padding: 20px;

        `
export default PageNotFound