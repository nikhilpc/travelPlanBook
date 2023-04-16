import React from 'react'
import ThankyouImage from '../assets/Thankyou.gif'
import styledComponents from "styled-components";
import { Link } from 'react-router-dom';
const ThankYouPage = () => {
    return (
        <Division>
            <h1>Thank you for subscribing us!</h1>
            <Image src={ThankyouImage} alt="Thank you" />
            <p style={{ textAlign: "center" }}>
                <TextLink to="/">Back to Home </TextLink>
            </p>
        </Division>
    )
}
export default ThankYouPage;
const Image = styledComponents.img`
    width: 100%;
    `
const TextLink = styledComponents(Link)`
    text-decoration: none;
    `
const Division = styledComponents.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    text-align: center;
    font-size: 30px;
    font-weight: 900;
    text-shadow: 2px 2px 2px orange;
    text-decoration: none;
        `